import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import myUserRoute from "./routes/myUserRoute";

const app = express();

export type User = {
  id: string;
  auth0Id: string;
  email: string;
  name: string;
  mobile: string;
};
export const users: User[] = [];

app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Health OK!" });
});
app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("server started on http://localhost:7000");
});
