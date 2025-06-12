import { Projects, sequelize, } from "../db.js"

// Get all projects with tasks
export const getKanbanProjects = async () => {
  const dbprojects = await Projects.findAll({
    attributes: ["id", "name"],
    include: [{ model: Projects, attributes: ["id", "name",] }],
    order: [["id", "ASC"]]
  })

  return dbprojects.map(project => ({
    id: project.id,
    name: project.name
  }))
}

// Add new project
export const addNewProject = async (columnName) => {
  await Projects.create({ name: columnName});
}

// Delete projects
export const deleteProject = async (id) => {
  const t = await sequelize.transaction()
  try {
    await Projects.destroy({ where: { id }, transaction: t })
    await t.commit()
  } catch (e) {
    await t.rollback()
    throw e
  }
}

// Edit project name
export const editProject = async (id, name) => {
  await Projects.update({ name:name }, { where: { id:id } })
}
