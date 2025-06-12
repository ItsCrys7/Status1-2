<template>
  <Navbar />
    <main class="flex-grow flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Nice to meet you here at Planify</h2>
        <form action="#" class="space-y-4">
          <input
            type="name"
            placeholder="Your name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="description"
            placeholder="A few words about you"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
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
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';


</script>