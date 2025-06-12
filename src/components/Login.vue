<template>
    <main class="flex-grow flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6">Sign Up to Planify with E-mail</h2>
        <form action="#" class="space-y-4">
          <input
            type="email"
            placeholder="E-mail"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button
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

<script>

</script>