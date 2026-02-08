<template>
  <div class="relative rounded-3xl overflow-hidden px-12 py-20 mb-20">
    <!-- Gradient Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600"
    ></div>

    <!-- Geometric Pattern Overlay -->
    <div class="absolute inset-0 opacity-20">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              stroke-width="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <!-- Blur circles for depth -->
    <div
      class="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-30"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-80 h-80 bg-purple-700 rounded-full blur-3xl opacity-40"
    ></div>

    <!-- Content -->
    <div class="relative z-10 text-center text-white max-w-4xl mx-auto">
      <!-- Title -->
      <h2 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
        Ubah Desainmu Jadi Penghasilan
      </h2>

      <!-- Description -->
      <p class="text-lg lg:text-xl mb-10 text-purple-50 leading-relaxed">
        Ubah ide kreatifmu jadi frame menarik dan mulai hasilkan<br
          class="hidden lg:block"
        />
        uang sekarang.
      </p>

      <!-- CTA Button -->
      <button
        class="inline-flex items-center gap-3 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 hover:shadow-xl transition-all shadow-lg transform hover:scale-105"
      >
        <span>Gabung sebagai contributor</span>
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
