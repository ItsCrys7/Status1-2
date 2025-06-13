<template>
<Navbar/>

<section class="text-center p-[2rem] bg-gray-100">
      <h2 class="text-[2.5rem] font-bold mb-[1.5rem]">Organize Your Life, Stress-Free</h2>
      <p class="text-gray-600 mb-[1rem]">Set up your events as you want them</p>
    </section>

    <!-- Features -->
    <section id="features" class="p-[2rem]">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-[2rem] font-bold mb-[1.5rem]">
          Choose what you want to start with
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[1rem]">
          <router-link :to="links.find(link => link.name === 'Temp 1').path" class="p-[1rem] bg-white shadow rounded hover:bg-teal-500 hover:text-white">
            <h4 class="text-[1.25rem] font-semibold">TEMPLATE I</h4>
            <p class="text-gray-600">Already set up for you.</p>
          </router-link>
          
          <router-link :to="links.find(link => link.name === 'Temp 2').path" class="p-[1rem] bg-white shadow rounded hover:bg-teal-500 hover:text-white">
            <h4 class="text-[1.25rem] font-semibold">TEMPLATE II</h4>
            <p class="text-gray-600">Customize it as you want it.</p>
          </router-link>
          
        </div>
      </div>
    </section>

    <!-- About you page -->
    <section id="AboutYou" class="bg-teal-500 text-white text-center p-[2rem]">
      <h3 class="text-[2rem] font-bold mb-[1rem]">Ready to Start?</h3>
      <p class="mb-[1rem]">Start today, while it's free! Tomorrow it might not be.</p>
      <a
        href="AboutYou"
        class="bg-white text-teal-500 px-[2rem] py-[1rem] rounded hover:bg-teal-200 hover:text-black"
        >Tell us about yourself</a
      >
    </section>

<Footer/>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { useRouter } from 'vue-router';
const links= useRouter().getRoutes();

</script>