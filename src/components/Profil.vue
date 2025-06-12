<template>
  <Navbar />

  <section class="bg-gray-100 p-8 text-center">
    <h2 class="mb-4 text-3xl font-bold">Profiles</h2>
    <p class="text-gray-600">Manage your profile details and preferences</p>
  </section>

  <section class="mx-auto max-w-4xl p-6">
    <!-- Profile Card -->
    <!-- <div class="bg-white shadow rounded p-6 flex flex-col md:flex-row items-center gap-6 mb-8">
      <div class="flex-shrink-0">
        <i class="bi bi-person-circle text-[4rem] text-teal-500"></i>
      </div>
      <div class="flex-1 text-center md:text-left">
        <h3 class="text-xl font-semibold">John Doe</h3>
        <p class="text-gray-600">john.doe@example.com</p>
        <button class="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
          <i class="bi bi-pencil-square mr-2"></i>Edit Profile
        </button>
      </div>
    </div> -->

    <!-- Kanban Lists Section -->
    <div class="rounded bg-white p-6 pb-8 shadow">
      <h2 class="mb-4 text-2xl font-bold">People's</h2>

      <div v-for="list in kanban.lists" :key="list.id" class="relative mb-4 rounded border p-4">
        <input
          v-model="list.name"
          class="mr-2 w-full rounded border p-2 md:w-auto"
          @blur="kanban.editList(list.id, list.name)"
        />
        <button class="text-red-600" @click="kanban.editList(list.id, list.name)">Edit</button>
        <button class="text-red-600" @click="kanban.deleteList(list.id)">🗑</button>
        <button class="text-green-600" @click="showTaskInput(list.id)">Add task</button>

        <!-- Formularea pentru adăugare task -->
        <div
          v-if="selectedListId === list.id"
          class="absolute top-0 right-[-320px] w-72 rounded bg-gray-100 p-4 shadow-lg"
        >
          <h4 class="mb-2 text-lg font-bold">Task for "{{ list.name }}"</h4>
          <input
            v-model="newTaskName"
            class="mb-2 w-full rounded border p-2"
            placeholder="Enter task name"
          />
          <div class="flex justify-between">
            <button
              class="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              @click="submitTask"
            >
              Add
            </button>
            <button
              class="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              @click="cancelTask"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div class="mt-6 flex flex-col items-start gap-4 md:flex-row md:items-center">
        <input
          v-model="newListName"
          class="w-full rounded border p-2 md:w-auto"
          placeholder="New list name"
        />
        <button class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" @click="addList">
          Add Name
        </button>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue"
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"
// import { useKanban } from "../stores/kanban"
import { useKanban } from "../stores/kanban"

const kanban = useKanban()
const newListName = ref("")

onMounted(() => {
  kanban.fetchKanbanLists()
  console.log("Kanban lists fetched:", kanban.lists)
})
const addList = () => {
  if (newListName.value.trim() !== "") {
    kanban.addNewList(newListName.value)
    newListName.value = ""
  }
}

const selectedListId = ref(null)
const newTaskName = ref("")

const showTaskInput = listId => {
  selectedListId.value = listId
  newTaskName.value = ""
}

function submitTask() {
  if (newTaskName.value.trim() !== "" && selectedListId.value !== null) {
    kanban.addNewTask(selectedListId.value, newTaskName.value)
    newTaskName.value = ""
    selectedListId.value = null
  }
}



const cancelTask = () => {
  selectedListId.value = null
  newTaskName.value = ""
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
</style>
