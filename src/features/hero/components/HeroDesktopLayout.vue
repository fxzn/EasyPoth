<template>
  <div class="hidden xl:grid grid-cols-[1fr_320px_1fr] gap-12 items-start">
    <div class="space-y-16">
      <h1 class="text-6xl font-medium leading-tight text-gray-900 mb-66">
        Abadikan dengan <br />sempurna setiap <br />momenmu
      </h1>
      <div class="flex gap-12">
        <div v-for="item in stats" :key="item.label">
          <p class="text-3xl font-medium text-gray-900">{{ item.value }}</p>
          <p class="text-base text-gray-500">{{ item.label }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="w-[360px] h-[620px] overflow-hidden rounded-t-3xl">
        <img :src="heroImage" alt="Koleksi frame foto photobooth EasyPoth" class="w-full h-full object-cover object-top" />
      </div>
    </div>

    <div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="grid in gridLabels" :key="grid" class="h-[194px] rounded-2xl bg-gray-200 p-4">
          {{ grid }}
        </div>
      </div>
      <div class="mt-16">
        <p class="font-medium text-gray-600">
          Pilih frame favoritmu, unggah fotomu, dan simpan momen spesial seketika
        </p>
        <div class="flex items-center gap-4 mt-4">
          <Button class="bg-violet-600 font-medium text-white" variant="btn-primary" size="md" @click="emit('open-frame')">
            Coba sekarang
          </Button>
          <Button class="font-medium" size="md">
            Gabung sebagai contributor
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
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
