<template>
  <div class="flex flex-col xl:hidden mx-auto xl:max-w-none">
    <h1 class="text-[40px] md:text-6xl font-medium leading-[1.1] text-gray-900 mb-6 md:mb-8">
      Abadikan dengan sempurna setiap momenmu
    </h1>

    <div class="flex gap-8 md:gap-16 mb-8 md:mb-10">
      <div v-for="item in stats" :key="item.label">
        <p class="text-2xl md:text-4xl font-semibold text-gray-900 leading-none">{{ item.value }}</p>
        <p class="text-xs md:text-base text-gray-500 mt-2">{{ item.label }}</p>
      </div>
    </div>

    <p class="text-gray-600 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl">
      Pilih frame favoritmu, unggah fotomu, dan simpan momen spesial seketika
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-14">
      <Button
        class="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-full py-4 px-8 text-sm md:text-base transition-all w-full"
        @click="emit('open-frame')"
      >
        Coba sekarang
      </Button>
      <Button
        class="bg-white border border-gray-200 text-gray-800 font-medium rounded-full py-4 px-8 text-sm md:text-base flex items-center justify-center gap-2 hover:bg-gray-50 transition-all w-full"
      >
        Gabung sebagai contributor
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="md:w-5 md:h-5">
          <path
            d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
            fill="currentColor"
          />
        </svg>
      </Button>
    </div>

    <div class="grid grid-cols-4 gap-2 md:gap-4 mb-10 md:mb-16">
      <div
        v-for="grid in gridLabels"
        :key="grid"
        class="aspect-[4/5] rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[10px] md:text-sm font-medium text-gray-500 text-center px-2 border border-gray-100"
      >
        {{ grid }}
      </div>
    </div>

    <div class="flex justify-center mt-auto">
      <div class="overflow-hidden shadow-2xl w-[92%] md:w-[80%] max-w-[600px] aspect-[9/16] md:aspect-[3/4] max-h-[500px] md:max-h-[700px] rounded-t-[40px] md:rounded-t-[52px] border-x border-t border-gray-100">
        <img :src="heroImage" alt="Contoh hasil photobooth online dengan berbagai pilihan grid frame estetik" class="w-full h-full object-cover object-top" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../../../components/ui/Button.vue";
import type { HeroStat } from "../hero.data";

defineProps<{
  stats: HeroStat[];
  gridLabels: string[];
  heroImage: string;
}>();

const emit = defineEmits<{
  (e: "open-frame"): void;
}>();
</script>

<style scoped></style>
