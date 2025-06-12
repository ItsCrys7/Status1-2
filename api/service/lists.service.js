import { List, sequelize, Task } from "../db.js"

// Get all lists with tasks
export const getKanbanLists = async () => {
  const dblists = await List.findAll({
    attributes: ["id", "name"],
    include: [{ model: Task, attributes: ["id", "name", "color"] }],
    order: [["id", "ASC"]]
  })

  return dblists.map(list => ({
    id: list.id,
    name: list.name,
    tasks: list.Tasks.map(task => ({
      id: task.id,
      name: task.name,
      color: task.color
    }))
  }))
}

// Add new list
export const addNewList = async (columnName) => {
  await List.create({ name: columnName});
}

// Add task to list
export const addNewTask = async (listId, taskName) => {
  await Task.create({ name: taskName, color: "red", ListId: listId })
}

// Delete list and its tasks
export const deleteList = async (id) => {
  const t = await sequelize.transaction()
  try {
    await Task.destroy({ where: { ListId: id }, transaction: t })
    await List.destroy({ where: { id }, transaction: t })
    await t.commit()
  } catch (e) {
    await t.rollback()
    throw e
  }
}

// Edit list name
export const editList = async (id, name) => {
  await List.update({ name:name }, { where: { id:id } })
}
