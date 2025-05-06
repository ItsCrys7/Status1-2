<template>
<header class="bg-teal-500 text-white p-[1rem]">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <a href="/" class="text-[2rem] font-bold">Planify</a>
        <nav>
          <!-- Burger menu button for small screens -->
          <button
            id="burger-menu"
            class="block md:hidden text-[2rem] focus:outline-none"
            aria-label="Toggle menu" @click="toggleClass"
          >
            ☰
          </button>
          <!-- Nav links -->
          <ul
            id="nav-links"
            class="hidden md:flex flex-col md:flex-row gap-[1rem] items-center bg-teal-500 md:bg-transparent p-[1rem] md:p-0 absolute md:static top-[3.5rem] left-0 w-full md:w-auto shadow md:shadow-none z-10"
          > 
<!-- Asta e un ciclu care parcurge array si pune informatiile din el direct in html -->
            <li v-for="(rand, index) in links" :key="index" class="hover:underline">  
                <router-link :to="rand.path">
                  {{ rand.name }}
                </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script setup>

import { onMounted } from 'vue';  //pt a adauga o actiune, elemente in burger
import { useRouter } from 'vue-router';
const links= useRouter().getRoutes();

onMounted(() => {
  const burgerMenuButton = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");

  if (burgerMenuButton && navLinks) {
    burgerMenuButton.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });
  }
});
</script> 