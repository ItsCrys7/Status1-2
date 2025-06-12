<template>
  <Navbar/>
    <main class="max-w-2xl mx-auto bg-white p-8 mt-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-6 text-gray-800">Formular fără titlu</h1>
      <form action="#" method="POST" class="space-y-6">
        <div>
          <label for="songs" class="block text-sm font-medium text-gray-700"
            >Ce piese vor fi cantate?</label
          >
          <select
            id="songs"
            name="songs"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option>Alege</option>
            <option>Piesa 1</option>
            <option>Piesa 2</option>
            <option>Piesa 3</option>
          </select>
        </div>

        <div>
          <label
            for="event-date"
            class="block text-sm font-medium text-gray-700"
            >În ce data va fi evenimentul?</label
          >
          <input
            type="date"
            id="event-date"
            name="event-date"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label
            for="event-time"
            class="block text-sm font-medium text-gray-700"
            >Care va fi intervalul de timp în care se va desfășura
            evenimentul?</label
          >
          <input
            type="time"
            id="event-time"
            name="event-time"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
        >
          Salvare
        </button>
      </form>
  </main>

  <Footer/>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

</script>
  