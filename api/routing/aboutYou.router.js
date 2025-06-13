// /api/routes/aboutYou.router.js
import { Router } from "express";
import {
  getAboutYou,
  addNewAboutYou,
  deleteAboutYou,
  editAboutYou
} from "../service/aboutYou.service.js";


export const aboutYouRouter = Router();

aboutYouRouter.get("/", async (req, res) => {
  const data = await getAboutYou();
  res.json(data);
});

aboutYouRouter.post("/add-new-aboutYou", async (req, res) => {
  const { name , text } = req.body;
  await addNewAboutYou(name, text);
  res.send("ok");
});

aboutYouRouter.delete("/delete-aboutYou", async (req, res) => {
  const { id } = req.body;
  await deleteAboutYou(id);
  res.send("ok");
});

aboutYouRouter.put("/edit-aboutYou", async (req, res) => {
  const { id, name } = req.body.data;
  await editAboutYou(id, name);
  res.send("ok");
});
