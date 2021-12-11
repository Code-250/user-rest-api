import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import Validate from "./middleware/validationResources";
import { createUserSchema } from "./schema/user.schema";

const routes = (app: Express) => {
  app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
  app.post("/create-user", Validate(createUserSchema), createUserHandler);
};
export default routes;
