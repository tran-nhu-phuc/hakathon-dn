import { Express } from "express";
import noteController from "../controllers/notes.controller";

const Router = (app: Express) => {
  app.use("/api/v1/notes", noteController);
};

export default Router;
