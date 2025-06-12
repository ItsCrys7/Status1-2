<template>
  
  <Navbar/>
  <main>
    <div class="container mx-auto mt-24 px-4">
      <!-- Page Header -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-800">Proiectele Mele</h1>
        <!-- <router-link :to="links.find(link => link.name === 'Temp 1').path" class="bg-teal-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-teal-600">
          <i class="bi bi-file-earmark-plus-fill"></i>
          <span>Proiect nou</span>
        </router-link> -->
        <a
          href="temp1"
          class="bg-teal-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-teal-600"
        >
          <i class="bi bi-file-earmark-plus-fill"></i>
          <span>Proiect nou</span>
        </a>
      </div>

      <p class="text-gray-600 text-center mb-8">
        Aici poți vizualiza proiectele tale existente. Dă clic pe un proiect pentru a-l accesa.
      </p>

      <!-- Project List -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Example Project -->
        <a
          href="project1.html"
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 class="text-xl font-bold text-gray-800">
            Eveniment Team Building
          </h2>
          <p class="text-gray-600 mt-2">Creat pe: 21 Noiembrie 2024</p>
        </a>

        <a
          href="project2.html"
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 class="text-xl font-bold text-gray-800">
            Conferință Planificare
          </h2>
          <p class="text-gray-600 mt-2">Creat pe: 10 Noiembrie 2024</p>
        </a>

        <a
          href="project3.html"
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 class="text-xl font-bold text-gray-800">Petrecere de Crăciun</h2>
          <p class="text-gray-600 mt-2">Creat pe: 5 Decembrie 2023</p>
        </a>

        <!-- Add More Projects -->
        <a
          href="project4.html"
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 class="text-xl font-bold text-gray-800">Prezentare Finală</h2>
          <p class="text-gray-600 mt-2">Creat pe: 3 Octombrie 2024</p>
        </a>

        <a
          href="project6.html"
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h2 class="text-xl font-bold text-gray-800">
            Eveniment Social Media
          </h2>
          <p class="text-gray-600 mt-2">Creat pe: 20 August 2024</p>
        </a>
      </div>
    </div>
  </main>
  <Footer/>
  </template>
  
  <script setup>
  import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';
  </script>