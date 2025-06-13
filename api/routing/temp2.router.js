// routes/temp2.router.js
import express from "express"
import { getAllProjects, addNewProject } from "../service/temp2.service.js"

const router = express.Router()

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await getAllProjects()
    return res.status(200).json({ projects })
  } catch (error) {
    console.error("Fetch projects error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
})

// POST create project
router.post("/", async (req, res) => {
  try {
    const { name, text } = req.body

    if (!name || !text) {
      return res.status(400).json({ error: "Name and description are required" })
    }

    const newProject = await addNewProject(name, text)
    return res.status(201).json({ project: newProject })
  } catch (error) {
    console.error("Create project error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
})

// export default router
export const temp2Router = router
