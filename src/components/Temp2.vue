<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <main class="flex-grow flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Name your Planify project</h2>

        <form class="space-y-4" @submit.prevent="handleSubmit" >
          <input
            v-model="projectName"
            type="text"
            placeholder="Project name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            v-model="projectDescription"
            type="text"
            placeholder="Project description"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            :disabled="loading"
          >
            {{ loading ? "Creating..." : "Create Project" }}
          </button>
        </form>

        <!-- Success or Error Message -->
        <div v-if="successMessage" class="mt-4 text-green-600 text-center">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mt-4 text-red-600 text-center">
          {{ errorMessage }}
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTemp2Store } from '../stores/temp2Store'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const temp2Store = useTemp2Store()

const projectName = ref('')
const projectDescription = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await temp2Store.createProject(projectName.value, projectDescription.value)
    successMessage.value = 'Project created successfully!'
    projectName.value = ''
    projectDescription.value = ''
  } catch (error) {
    errorMessage.value = temp2Store.error || 'Something went wrong!'
  } finally {
    loading.value = false
  }
}
</script>
