import { Request, Response, Router } from "express";
import express from "express";
import NoteService from "../services/notes.services";
const noteController = express.Router();
const services = new NoteService();
noteController.get("/", async (req: Request, res: Response) => {
  try {
    const result = await services.getAll();
    res.json(result);
  } catch (error) {
    res.json("error get all");
  }
});
noteController.get("/:id", async (req: Request, res: Response) => {
  const param = Number(req.params.id);
  try {
    const result = await services.getInFoNoteApp(param);
    res.json(result);
  } catch (error) {
    res.json("get info error");
  }
});
noteController.post("/", async (req: Request, res: Response) => {
  try {
    const newData = {
      content: req.body.content,
    };
    await services.addNewNote(newData);
    res.json("add ok");
  } catch (error) {
    res.json("error add");
  }
});
noteController.patch("/:id", async (req: Request, res: Response) => {
  const param = Number(req.params.id);
  const dataNew = {
    ...req.body,
  };
  try {
    const result = await services.updateNote(param, dataNew);
    if (result[0] !== 0) {
      res.json("ok update");
      console.log("ok update");
    } else {
      res.json("error not found object");
      console.log("error update");
    }
  } catch (error) {
    res.json("error update");
  }
});
noteController.delete("/:id", async (req: Request, res: Response) => {
  const param = Number(req.params.id);
  try {
    await services.deleteNote(param);
    res.json("ok delete");
  } catch (error) {
    res.json("error delete");
  }
});
export default noteController;
