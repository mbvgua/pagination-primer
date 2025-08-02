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
          totalItems: users.length,
          totalPages: null,
          currentPage: null,
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
    const { page, limit } = request.body;
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
        [parseInt(limit), offset],
      );
      const users = rows as IUsers[];
      const totalPages = Math.ceil(totalItems / limit);

      return response.status(200).json({
        code: 200,
        status: "success",
        message: "Users succesfully retrieved",
        data: { users },
        metadata: {
          currentPage: +page,
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
    const { user_id } = request.body;

    //get total number of items in db
    const connection = await pool.getConnection();
    const [results]: any = await connection.query(
      "SELECT COUNT(*) AS total FROM users;",
    );
    const totalItems = results[0].total;

    await connection.execute(`SET @user_id=7;`);
    const [rows]: any = await connection.query(
      `SELECT * FROM users WHERE id>@user_id LIMIT 10; `,
    );
    const users = rows as IUsers;

    return response.status(200).json({
      code: 200,
      status: "success",
      message: "Users succesfully retrieved",
      data: { users },
      metadata: {
        //currentPage: +page,
        //totalPages,
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
