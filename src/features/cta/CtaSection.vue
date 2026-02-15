<template>
  <div class="relative rounded-3xl overflow-hidden px-16 py-24 mb-20">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-[#7C3AED]"></div>

    <!-- Pattern Image Overlay -->
    <img
      src="/src/assets/icons/vector.svg"
      alt="pattern"
      class="absolute inset-0 w-full h-full pointer-events-none"
    />

    <!-- Content -->
    <div class="relative z-10 text-center text-white max-w-5xl mx-auto">
      <!-- Title -->
      <h2 class="text-5xl lg:text-6xl font-medium mb-4 leading-tight">
        Ubah Desainmu Jadi Penghasilan
      </h2>

      <!-- Description -->
      <p
        class="text-xl lg:text-2xl text-purple-100 mb-12 leading-[1.3] font-normal max-w-3xl mx-auto"
      >
        Ubah ide kreatifmu jadi frame menarik dan mulai hasilkan uang sekarang.
      </p>

      <!-- CTA Button -->
      <button
        class="group inline-flex items-center gap-3 bg-white text-gray-900 font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:bg-gray-100"
      >
        <span>Gabung sebagai contributor</span>

        <svg
          class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
