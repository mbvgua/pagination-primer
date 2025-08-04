import { Request, Response, Router } from "express";
import { IUsers } from "./models";
import { pool } from "./db";

const mainRouter = Router();

//get users with no pagination
mainRouter.get(
  "/no-pagination",
  async (request: Request, response: Response) => {
    try {
      const connection = await pool.getConnection();
      const [rows]: any = await connection.execute(`SELECT * FROM users;`);
      const users = rows as IUsers[];

      return response.status(200).json({
        code: 200,
        status: "success",
        message: "Users succesfully retrieved",
        data: {
          currentPage: null,
          totalPages: null,
          totalItems: users.length,
          users,
        },
        metadata: null,
      });
    } catch (error) {
      return response.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server error",
        data: { error },
        metadata: null,
      });
    }
  },
);

//get users with limit-offset method
mainRouter.get(
  "/limit-offset",
  async (request: Request, response: Response) => {
    //defaults to page 1 and limit of 10 if none passed
    const page = parseInt(request.query.page as string) || 1;
    const limit = parseInt(request.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    try {
      const connection = await pool.getConnection();
      //get total number of items in db
      const [results]: any = await connection.query(
        "SELECT COUNT(*) AS total FROM users;",
      );
      const totalItems = results[0].total;

      //get paginated query based on user input
      const [rows]: any = await connection.query(
        "SELECT * FROM users LIMIT ? OFFSET ?;",
        [limit, offset],
      );
      const users = rows as IUsers[];
      const totalPages = Math.ceil(totalItems / limit);

      return response.status(200).json({
        code: 200,
        status: "success",
        message: "Users succesfully retrieved",
        data: { users },
        metadata: {
          previousPage: +page - 1,
          currentPage: +page,
          nextPage: +page + 1,
          totalPages,
          totalItems,
        },
      });
    } catch (error) {
      return response.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server error",
        data: { error },
        metadata: null,
      });
    }
  },
);

//get users with cursor method
mainRouter.get("/cursor", async (request: Request, response: Response) => {
  try {
    const cursor_id = parseInt(request.query.cursor_id as string) || 0;
    const limit = parseInt(request.query.limit as string) || 10;

    //get total number of items in db
    const connection = await pool.getConnection();
    const [results]: any = await connection.query(
      "SELECT COUNT(*) AS total FROM users;",
    );
    const totalItems = results[0].total;

    const [rows]: any = await connection.query(
      `SELECT * FROM users WHERE id > ? LIMIT ?;`,
      [cursor_id, limit],
    );
    const users = rows as IUsers;
    const totalPages = Math.ceil(totalItems / limit);

    return response.status(200).json({
      code: 200,
      status: "success",
      message: "Users succesfully retrieved",
      data: { users },
      metadata: {
        currentCursorId: +cursor_id,
        //HACK: used ternary operators here for some minor error-handling
        //very proud of myself
        nextCursorId:
          +cursor_id + limit > totalItems ? +cursor_id : +cursor_id + limit,
        previousCursorId: +cursor_id - limit,
        totalPages,
        totalItems,
      },
    });
  } catch (error) {
    return response.status(500).json({
      code: 500,
      status: "error",
      message: "Internal Server error",
      data: { error },
      metadata: null,
    });
  }
});

export default mainRouter;
