import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
const routes = (app: Express) => {
  app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
  app.post("/create-user", createUserHandler);
};
export default routes;
