<template>
  <Navbar />

  <section class="text-center p-8 bg-gray-100">
    <h2 class="text-3xl font-bold mb-4">Profiles</h2>
    <p class="text-gray-600">Manage your profile details and preferences</p>
  </section>

  <section class="max-w-4xl mx-auto p-6">
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
    <div class="bg-white shadow rounded p-6">
      <h2 class="text-2xl font-bold mb-4">People's</h2>

      <div v-for="(list, index) in kanban.lists" :key="index" class="mb-4">
        <input
          class="border p-2 rounded mr-2 w-full md:w-auto"
          v-model="list.name"
          @blur="kanban.editList(index, list.name)"
        />
        <button @click="kanban.deleteList(index)" class="text-red-600">🗑</button>
      </div>

      <div class="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <input v-model="newListName" class="border p-2 rounded w-full md:w-auto" placeholder="New list name" />
        <button @click="addList" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Name
        </button>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import { useKanban } from '../stores/kanban'

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
