// stores/temp2Store.js
import { defineStore } from "pinia"
import axios from "axios"

export const useTemp2Store = defineStore("temp2", {
  state: () => ({
    projects: [],
    loading: false,
    error: null
  }),
  actions: {
    async createProject(name, text) {
      this.loading = true
      this.error = null

      try {
        const res = await axios.post("http://localhost:3000/temp2", {
          name,
          text
        })
        this.projects.push(res.data.project)
      } catch (err) {
        this.error = err.response?.data?.error || "Project creation failed"
        throw err
      } finally {
        this.loading = false
      }
    },
    async fetchProjects() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get("http://localhost:3000/temp2")
        this.projects = res.data.projects
      } catch (err) {
        this.error = err.response?.data?.error || "Failed to fetch projects"
      } finally {
        this.loading = false
      }
    }
  }
})
