<template>
  <div class="py-12 px md:px- lg:px-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 items-end">
      <div>
        <h2
          class="text-3xl md:text-4xl lg:text-[42px] font-medium text-gray-900 leading-tight"
        >
          Kenapa ini sangat mudah?
        </h2>
      </div>

      <div
        class="flex flex-col md:flex-row md:justify-between lg:justify-end items-start md:items-center gap-4 md:gap-6"
      >
        <p
          class="text-gray-600 font-normal text-sm md:text-base max-w-sm text-left lg:text-right"
        >
          Cepat, simpel, dan hasilnya langsung bisa dipamerin
        </p>

        <button
          class="bg-[#7C3AED] text-white font-medium px-8 py-3 rounded-full transition-colors w-full md:w-max whitespace-nowrap"
        >
          Coba sekarang
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="step in steps"
        :key="step.id"
        :class="[
          'relative rounded-2xl p-8 transition-all duration-300',
          step.isActive
            ? 'bg-[#7C3AED] text-white shadow-lg'
            : 'bg-gray-100 hover:bg-gray-200',
        ]"
      >
        <div
          :class="[
            'w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mb-10',
            step.isActive
              ? 'bg-white/20 text-white'
              : 'bg-white text-gray-800 shadow-sm',
          ]"
        >
          {{ step.number }}
        </div>

        <div>
          <h3
            :class="[
              'text-xl font-semibold mb-3',
              step.isActive ? 'text-white' : 'text-gray-900',
            ]"
          >
            {{ step.title }}
          </h3>

          <p
            :class="[
              'text-sm leading-relaxed',
              step.isActive ? 'text-purple-100' : 'text-gray-500',
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
