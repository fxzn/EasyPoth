<template>
  <div class="py-12">
    <!-- Header Section with Grid -->
    <div class="grid grid-cols-2 gap-8 mb-12">
      <!-- Left: Title -->
      <div>
        <h2 class="text-[42px] font-medium text-gray-900">
          Kenapa ini sangat mudah?
        </h2>
      </div>

      <!-- Right: Description & Button (nested grid) -->
      <div class="flex items-center justify-end gap-6 text-right">
        <!-- Description -->
        <p class="text-gray-600 font-normal max-w-sm">
          Cepat, simpel, dan hasilnya langsung bisa dipamerin
        </p>

        <!-- Button -->
        <button
          class="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-colors"
        >
          Coba sekarang
        </button>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="step in steps"
        :key="step.id"
        :class="[
          'rounded-3xl p-8 min-h-[280px] flex flex-col justify-between transition-colors cursor-pointer',
          step.isActive
            ? 'bg-gradient-to-br from-purple-600 to-purple-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200',
        ]"
      >
        <span
          :class="[
            'text-5xl font-bold',
            step.isActive ? 'opacity-90' : 'text-gray-800',
          ]"
        >
          {{ step.number }}
        </span>
        <div>
          <h3
            :class="[
              'text-2xl font-bold mb-3',
              step.isActive ? 'text-white' : 'text-gray-900',
            ]"
          >
            {{ step.title }}
          </h3>
          <p
            :class="[
              'leading-relaxed',
              step.isActive ? 'text-purple-100' : 'text-gray-600',
            ]"
          >
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const steps = ref([
  {
    id: 1,
    number: "01",
    title: "Pilih Frame Favoritmu",
    description:
      "Jelajahi berbagai frame seru dan pilih yang paling cocok dengan momenmu.",
    isActive: true,
  },
  {
    id: 2,
    number: "02",
    title: "Selesaikan Pembayaran",
    description: "Lakukan pembayaran dengan cepat dan aman.",
    isActive: false,
  },
  {
    id: 3,
    number: "03",
    title: "Unggah Atau Ambil Foto",
    description: "Unggah fotomu atau gunakan kamera untuk berfoto langsung",
    isActive: false,
  },
  {
    id: 4,
    number: "04",
    title: "Unduh & Bagikan",
    description:
      "Foto kamu siap diunduh dan dibagikan ke media sosial favoritmu.",
    isActive: false,
  },
]);
</script>

<style scoped></style>
