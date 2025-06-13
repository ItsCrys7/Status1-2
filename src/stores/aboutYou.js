import { defineStore } from "pinia"
import axios from "axios"
import { ws } from "../ws.js"

export const useAboutYouStore = defineStore("aboutYou", {
  state: () => ({
    entries: []
  }),

  actions: {
    async fetchDescriptions() {
      try {
        const response = await axios.get("http://localhost:3000/aboutYou")
        this.entries = response.data
      } catch (e) {
        console.error("Failed to fetch descriptions", e)
      }
    },

    async addDescription(name, text) {
      const newEntry = {
        id: Date.now(), // temporar, până primim de la server
        name,
        text
      }

      this.entries.push(newEntry)

      try {
        await axios.post("http://localhost:3000/about-you/add-aboutYou", { name, text }, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        ws.send(JSON.stringify(this.entries))
      } catch (e) {
        console.error("Failed to add entry", e)
      }
    },

    async deleteDescription(id) {
      this.entries = this.entries.filter(entry => entry.id !== id)

      try {
        await axios.delete("http://localhost:3000/about-you/delete-aboutYou", {
          headers: {
            "Content-Type": "application/json"
          },
          data: { id }
        })
        ws.send(JSON.stringify(this.entries))
      } catch (e) {
        console.error("Failed to delete entry", e)
      }
    },

    async editDescription(id, newName, newText) {
      const entry = this.entries.find(e => e.id === id)
      if (entry) {
        entry.name = newName
        entry.text = newText
      }

      try {
        await axios.put("http://localhost:3000/about-you/edit-aboutYou", {
          id,
          name: newName,
          text: newText
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        ws.send(JSON.stringify(this.entries))
      } catch (e) {
        console.error("Failed to update entry", e)
      }
    }
  }
})
