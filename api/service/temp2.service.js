// services/temp2.service.js
import { Temp2 } from "../db.js"

// Get all projects
export const getAllProjects = async () => {
  const projects = await Temp2.findAll({
    attributes: ["id", "name", "text"],
    order: [["id", "ASC"]]
  })

  return projects.map(project => ({
    id: project.id,
    name: project.name,
    text: project.text
  }))
}

// Add new project
export const addNewProject = async (name, text) => {
  const newProject = await Temp2.create({ name, text })
  return newProject
}
