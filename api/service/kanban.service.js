// export const lists = []

// export const addNewList = columnName => {
//   lists.push({ name: columnName, tasks: [] })
// }

// export const addNewTask = (listId, taskName) => {
//   lists[listId].tasks.push({ name: taskName })
// }

// export const deleteList = id => {
//   lists.splice(id, 1)
// }
// export const editList = (id, name) => {
//   lists[id].name = name
// }

// export const getKanbanLists = () => {
//   return lists
// }
/////////////////////////////////////////////////////////////
export const lists = []
import { List, sequelize, Task } from "../db.js"

import fs from "fs"
const dataPath = "./kanban.data.json"

const readData = () => {
  if (!fs.existsSync(dataPath)) return []
  return JSON.parse(fs.readFileSync(dataPath, "utf8"))
}
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
}

export const getKanbanLists = () => readData()

export const addNewList = (columnName) => {
  const data = readData()
  data.push({ name: columnName, tasks: [] })
  writeData(data)
}

export const addNewTask = (listId, taskName) => {
  const data = readData()
  data[listId].tasks.push({ name: taskName })
  writeData(data)
}
// export const addNewTask = (listId, taskName) => {
//   const data = readData()
//   if (!data[listId]) throw new Error("List not found")
//   data[listId].tasks.push({ name: taskName })
//   writeData(data)
// }



export const deleteList = (id) => {
  const data = readData()
  data.splice(id, 1)
  writeData(data)
}

export const editList = (id, name) => {
  const data = readData()
  data[id].name = name
  writeData(data)
}
