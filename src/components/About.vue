<template>
    
  <Navbar/>
  

  
<main class="flex-grow container mx-auto p-6">
      <h1 class="text-4xl font-bold text-teal-600 text-center mb-6">
        About Us
      </h1>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <p class="text-gray-700 text-lg leading-relaxed">
          Welcome to <span class="text-teal-600 font-bold">Planify</span>, your
          ultimate time management tool! Our mission is to help you organize
          your life, meet your goals, and achieve a balance between productivity
          and personal well-being.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          With <span class="font-bold">Planify</span>, you can:
        </p>
        <ul class="list-disc pl-6 mt-4 text-gray-700 text-lg">
          <li>Create daily, weekly, or monthly schedules.</li>
          <li>Set reminders for important tasks and deadlines.</li>
          <li>Track your progress and stay motivated with insights.</li>
          <li>Collaborate with others on shared projects and plans.</li>
        </ul>
        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          We believe that effective planning is the key to success, and we’re
          committed to providing you with tools that make it easy and intuitive.
          Whether you're managing work tasks, school assignments, or personal
          goals, <span class="font-bold">Planify</span> has you covered.
        </p>
      </div>
  </main>

  <Footer/>
  </template>
  
  <script setup>
  import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';
  </script>