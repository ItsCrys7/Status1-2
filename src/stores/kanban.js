import { defineStore } from "pinia"

import axios from "axios"

import { ws } from "../ws.js";

export const useKanban = defineStore("status2", {
  state: () => {
    return {
      lists: []
    }
  },
  actions: {
    fetchKanbanLists() {
      axios.get("http://localhost:3000/status2").then(response => {
        this.lists = response.data
      })
    },
    addNewList(columnName) {
      this.lists.push({ name: columnName, tasks: [] })

      axios.post(
        "http://localhost:3000/status2/add-new-list",
        { name: columnName },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then((response) => {console.log(response.data)}) 
      ws.send(JSON.stringify(this.lists));
    },
    deleteList(id) {
      this.lists.splice(id, 1)

      axios.delete("http://localhost:3000/status2/delete-list", {
        headers: {
          "Content-Type": "application/json"
        },
        data: { id }
      })
      ws.send(JSON.stringify(this.lists));
    },
      addNewTask(columnId, taskName) {
        const list = this.lists.find(l => l.id === columnId)
        if (!list) {
          console.error("List not found for id:", columnId)
          return
        }

        list.tasks.push({
          id: Date.now(), // dacă vrei să identifici task-ul
          name: taskName,
          completed: false,
        })
      


      axios.post(
        "http://localhost:3000/status2/add-new-task",
        { columnId, name: taskName },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      ws.send(JSON.stringify(this.lists));
    },
    editList(id, newName) {

  const list = this.lists.find((l) => l.id === id)
  if (list) {
    list.name = newName
  }      axios.put(
        "http://localhost:3000/status2/edit-list",
        { data: { id, name: newName } },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      ws.send(JSON.stringify(this.lists));
    },   

    addNewProject(projectName) {
      this.lists.push({ name: projectName, tasks: [] })

      axios.post(
        "http://localhost:3000/status2/add-new-list",
        { name: projectName },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then((response) => {console.log(response.data)}) 
      ws.send(JSON.stringify(this.lists));
    }
  }

})
