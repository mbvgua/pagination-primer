import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mainRouter from "./api";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(json());
app.use(cors());
app.use(mainRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
