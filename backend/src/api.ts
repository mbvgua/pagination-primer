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
      // NOTE: you will not destructure only the first element of the array
      // i.e rows[0] but instead you capture the entire thing. If you do the
      // former, only one value is returned. Why?
      // Stored Procedure retunrn the array. Actual queries return the values directy
      const users = rows as IUsers[];

      return response.status(200).json({
        code: 200,
        status: "success",
        message: "Users succesfully retrieved",
        data: { users },
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
    try {
      const connection = await pool.getConnection();
      const [rows]: any = await connection.execute(
        `SELECT * FROM users LIMIT 10 OFFSET 10;`,
      );
      // NOTE: you will not destructure only the first element of the array
      // i.e rows[0] but instead you capture the entire thing. If you do the
      // former, only one value is returned. Why?
      // Stored Procedure retunrn the array. Actual queries return the values directy
      const users = rows as IUsers;

      return response.status(200).json({
        code: 200,
        status: "success",
        message: "Users succesfully retrieved",
        data: { users },
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

//get users with cursor method
mainRouter.get("/cursor", async (request: Request, response: Response) => {
  try {
    const connection = await pool.getConnection();
    await connection.execute(`SET @user_id=7;`);
    const [rows]: any = await connection.query(
      `SELECT * FROM users WHERE id>@user_id LIMIT 10; `,
    );
    // NOTE: you will not destructure only the first element of the array
    // i.e rows[0] but instead you capture the entire thing. If you do the
    // former, only one value is returned. Why?
    // Stored Procedure retunrn the array. Actual queries return the values directy
    const users = rows as IUsers;

    return response.status(200).json({
      code: 200,
      status: "success",
      message: "Users succesfully retrieved",
      data: { users },
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
});

export default mainRouter;
