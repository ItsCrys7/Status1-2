<template>
  <Navbar/>

  <section class="text-center p-8 bg-gray-100">
    <h2 class="text-3xl font-bold mb-4">Your Profile</h2>
    <p class="text-gray-600">Manage your account details and preferences</p>
  </section>

  <section class="max-w-4xl mx-auto p-6">
    <!-- Profile Card -->
    <div class="bg-white shadow rounded p-6 flex flex-col md:flex-row items-center gap-6">
      <div class="flex-shrink-0">
        <i class="bi bi-person-circle text-[4rem] text-teal-500"></i>
      </div>
      <div class="flex-1 text-center md:text-left">
        <h3 class="text-xl font-semibold">John Doe</h3>
        <p class="text-gray-600">john.doe@example.com</p>
        <button class="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
          <i class="bi bi-pencil-square mr-2"></i>Edit Profile
        </button>
      </div>
    </div>

    <!-- Account Settings -->
    <div class="mt-8">
      <h4 class="text-lg font-bold mb-4">Account Settings</h4>
      <ul class="space-y-4">
        <li class="bg-gray-100 p-4 rounded flex items-center justify-between">
          <span><i class="bi bi-lock-fill mr-2 text-teal-500"></i>Change Password</span>
          <button class="text-teal-600 hover:underline">Update</button>
        </li>
        <li class="bg-gray-100 p-4 rounded flex items-center justify-between">
          <span><i class="bi bi-bell-fill mr-2 text-teal-500"></i>Notifications</span>
          <button class="text-teal-600 hover:underline">Manage</button>
        </li>
        <li class="bg-gray-100 p-4 rounded flex items-center justify-between">
          <span><i class="bi bi-box-arrow-right mr-2 text-teal-500"></i>Log Out</span>
          <button class="text-red-600 hover:underline">Logout</button>
        </li>
      </ul>
    </div>
  </section>

  <Footer/>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
</style>
