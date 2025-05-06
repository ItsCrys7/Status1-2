<template>
    
  <Navbar/>
<main>
  <div class="container mx-auto mt-24 px-4">
      <div class="bg-teal-100 p-6 rounded-lg shadow-lg text-center">
        <h1 class="text-2xl font-bold text-gray-800">Contactează-ne rapid</h1>
        <p class="text-gray-600 mt-2">
          Dacă întâmpini probleme, suntem aici să te ajutăm!
        </p>
        <div class="mt-4 flex justify-center space-x-8">
           <!-- Phone -->
           <div class="flex items-center">
            <i class="bi bi-telephone-inbound-fill text-teal-600 text-lg"></i>
            <p class="ml-2 text-gray-800 font-semibold">+40 123 456 789</p>
          </div>
          <!-- Email -->
          <div class="flex items-center">
            <i class="bi bi-envelope-fill text-teal-600 text-lg"></i>
            <a href="mailto:help@planify.com" class="ml-2 text-teal-600 underline">help@planify.com</a>
          </div>
          
          </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto mt-12 px-4">
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Help Center
      </h1>
      <p class="text-gray-600 text-center mb-8">
        Bine ai venit în pagina de ajutor a aplicației <span class="font-bold">PLANIFY</span>. Aici vei
        găsi răspunsuri la cele mai frecvente întrebări despre organizarea
        evenimentelor și gestionarea timpului tău personal.
      </p>

      <!-- FAQ Section -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Întrebări frecvente
        </h2>
        <div class="mb-6">
          <h3 class="font-semibold text-gray-800">
            Cum îmi creez un eveniment?
          </h3>
          <p class="text-gray-600">
            După ce te-ai conectat, mergi la secțiunea "Create Event",
            completează detaliile evenimentului (nume, dată, locație) și apasă
            butonul "Save".
          </p>
        </div>
        <div class="mb-6">
          <h3 class="font-semibold text-gray-800">
            Pot să partajez evenimentele mele?
          </h3>
          <p class="text-gray-600">
            Da! În pagina evenimentului, vei găsi un buton de partajare. Copiază
            link-ul generat și trimite-l prietenilor tăi.
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-gray-800">
            Cum îmi gestionez lista de activități?
          </h3>
          <p class="text-gray-600">
            În dashboard-ul principal, ai o secțiune dedicată task-urilor. Poți
            adăuga, edita sau șterge activități direct din aceasta.
          </p>
        </div>
      </div>

      <!-- Contact Support Section -->
      <div class="bg-teal-100 p-6 rounded-lg shadow-lg mt-8 mb-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Ai nevoie de ajutor suplimentar?
        </h2>
        <p class="text-gray-600 mb-4">
          Dacă nu ai găsit răspunsul căutat, ne poți contacta direct. Suntem
          aici să te ajutăm!
        </p>
        <a
          href="contact.html"
          class="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700"
        >
          Contactează Suportul
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