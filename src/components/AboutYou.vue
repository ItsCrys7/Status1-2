<template>
  <Navbar />
  <main class="flex-grow flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">
        Nice to meet you here at Planify
      </h2>
      <form class="space-y-4" @submit.prevent="submitForm" >
        <input
          v-model="name"
          type="text"
          placeholder="Your name"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          v-model="text"
          type="text"
          placeholder="A few words about you"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  </main>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const name = ref('')
const text = ref('')

const submitForm = async () => {
  try {
    await axios.post('http://localhost:3000/about-you/add-new-aboutYou', {
      name: name.value,
      text: text.value,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    // Resetare formular + eventual feedback
    name.value = ''
    text.value = ''
    alert('Thank you! Your info was submitted.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Oops! Something went wrong.')
  }
}
</script>
