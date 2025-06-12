import { Router } from "express"
import {
  getKanbanLists,
  addNewList,
  addNewTask,
  deleteList,
  editList
} from "../service/lists.service.js"

export const kanbanRouter = Router()

kanbanRouter.get("/",async (req, res) => {
  res.send(JSON.stringify (await getKanbanLists()))
})

kanbanRouter.post("/add-new-list", async (req, res) => {
  const columnName = req.body.name
  const checkname = new RegExp("^[a-zA-Z0-9 ]*$")
  if (!checkname.test(columnName)) {
    res.status(400).send("Invalid list name")
    return
  }
  await addNewList(columnName)
  res.send("ok")
})

kanbanRouter.post("/add-new-task", async (req, res) => {
  const { listId, name } = req.body
  const checkname = new RegExp("^[a-zA-Z0-9 ]*$")
  if (!checkname.test(name)) {
    res.status(400).send("Invalid list name")
    return
  }
  await addNewTask(listId, name)
  res.send("ok")
})

kanbanRouter.delete("/delete-list", async (req, res) => {
  const { id } = req.body
  const checkid = new RegExp("^[0-9]*$")
  if (!checkid.test(id)) {
    res.status(400).send("Invalid list name")
    return
  }
  await deleteList(id)
  res.send("ok")
})

kanbanRouter.put("/edit-list", async (req, res) => {
  const { id, name } = req.body.data
  console.log("edit-list", id, name)
  const checkname = new RegExp("^[a-zA-Z0-9 ]*$")
  if (!checkname.test(name)) {
    res.status(400).send("Invalid list name")
    return
  }
  await editList(id, name)
  res.send("ok")
})

kanbanRouter.post("/add-new-task", async (req, res) => {
  const { listId, name } = req.body
  try {
   await addNewTask(listId, name)
    res.send("ok")
  } catch (e) {
    res.status(400).send(e.message)
  }
})


