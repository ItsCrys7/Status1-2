
<template>
    <div
    class="bg-gray-900 text-white h-screen w-full flex items-center justify-center overflow-hidden"
  >
    <!-- Container -->
    <div class="relative h-screen w-full flex items-center justify-center">

      <!-- Content -->
      <div class="relative z-10 text-center px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Track your daily activity and
          <span class="text-teal-400">increase productivity</span>
        </h1>
        <p class="text-gray-300 mb-8 text-lg md:text-xl">
          Get started with a simple, user-friendly tracker to stay ahead.
        </p>

        <!-- Sliding Button -->
        <button
          id="start-button"
          class="relative right-3 bg-teal-500 border border-teal-400 text-white font-semibold text-lg px-6 py-3 w-36 rounded-full hover:bg-teal-400 hover:text-black transition-all duration-300"
          onclick="slideButton()" @click="Homepage"
        >
          <span class="relative">Start!</span>
          <span
            class="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-50 text-2xl group-hover:opacity-100 transition-opacity duration-300">
          </span>
        </button>
      </div>
    </div>
</div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';
import Homepage from './HomePage.vue';

const router = useRouter();

const goToAbout = () => {
  router.push('/about');
};
</script>

  
  <style>
   /* Animația pentru glisare */
   @keyframes slide-right {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(220%);
        }
      }

      .slide-right {
        animation: slide-right 0.4s forwards;
      } 

      /* decoratiuni */
      .circle {
        position: absolute;
        border-radius: 50%;
      }

      .circle-1 {
        width: 150px;
        height: 150px;
        background-color: #6ee7b7;
        top: 10%;
        left: 10%;
      }

      .circle-2 {
        width: 200px;
        height: 200px;
        background-color: #a78bfa;
        top: 25%;
        right: 15%;
      }

      .circle-3 {
        width: 100px;
        height: 100px;
        background-color: #facc15;
        bottom: 15%;
        left: 20%;
      }

      .circle-4 {
        width: 180px;
        height: 180px;
        background-color: #f87171;
        bottom: 10%;
        right: 10%;
      } 
  </style>
  
  