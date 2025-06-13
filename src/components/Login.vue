<template>
  <main class="flex-grow flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Sign Up to Planify with E-mail</h2>
      <form class="space-y-4" @submit.prevent="submitSignup" >
        <input
          v-model="email"
          type="email"
          placeholder="E-mail"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-4">or sign up with</p>
      <div class="flex justify-center space-x-4 mt-4">
        <button
          class="flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200"
        >
          <img
            src="https://img.icons8.com/color/24/facebook-new.png"
            class="mr-2"
            alt="Facebook Logo"
          />
          Facebook
        </button>
        <button
          class="flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200"
        >
          <img
            src="https://img.icons8.com/color/24/google-logo.png"
            class="mr-2"
            alt="Google Logo"
          />
          Google
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'

const password = ref('')
const email = ref('')

const authStore = useAuthStore()

const submitSignup = async () => {
  try {
    await authStore.signup(email.value, password.value)

    alert('Account created successfully!')
    password.value = ''
    email.value = ''
  } catch (e) {
    console.error('Signup failed:', e)
    alert(authStore.error)
  }
}
</script>


