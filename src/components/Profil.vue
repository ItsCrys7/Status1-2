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

      <div v-for="(list, index) in kanban.lists" :key="index" class="mb-4">
        <input
          class="mr-2 w-full rounded border p-2 md:w-auto"
          v-model="list.name"
          @blur="kanban.editList(index, list.name)"
        />
        <button @click="kanban.deleteList(index)" class="text-red-600">🗑</button>
      </div>

      <div class="mt-6 flex flex-col items-start gap-4 md:flex-row md:items-center">
        <input
          v-model="newListName"
          class="w-full rounded border p-2 md:w-auto"
          placeholder="New list name"
        />
        <button @click="addList" class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
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
import { useKanban } from "../stores/kanban"

const kanban = useKanban()
const newListName = ref("")

onMounted(() => {
  kanban.fetchKanbanLists()
})

const addList = () => {
  if (newListName.value.trim() !== "") {
    kanban.addNewList(newListName.value)
    newListName.value = ""
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
</style>
