<template>
  <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    <div
      v-for="item in frames"
      :key="item.id"
      class="group cursor-pointer space-y-8"
    >
      <!-- Card 1 -->
      <div class="bg-white overflow-hidden">
        <!-- Info di Atas -->
        <div class="p-4 pb-3">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <span class="text-sm text-gray-500">{{ item.author }}</span>
          </div>
          <h3 class="font-medium text-gray-900 text-xl mb-1 line-clamp-1">
            {{ item.title }}
          </h3>
          <p class="text-base text-gray-900 font-medium">
            {{ item.price }}
          </p>
        </div>

        <!-- Gambar di Bawah -->
        <div class="aspect-[4/5] overflow-hidden bg-gray-100 rounded-xl">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <!-- Card 2 -->
      <div class="bg-white overflow-hidden">
        <!-- Info di Atas -->
        <div class="p-4 pb-3">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <span class="text-sm text-gray-500">{{ item.author }}</span>
          </div>
          <h3 class="font-medium text-gray-900 text-xl mb-1 line-clamp-1">
            {{ item.title }}
          </h3>
          <p class="text-base text-gray-900 font-medium">
            {{ item.price }}
          </p>
        </div>

        <!-- Gambar di Bawah -->
        <div class="aspect-[4/5] overflow-hidden bg-gray-100 rounded-xl">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <!-- Card 3 -->
      <div class="bg-white overflow-hidden">
        <!-- Info di Atas -->
        <div class="p-4 pb-3">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
            <span class="text-sm text-gray-500">{{ item.author }}</span>
          </div>
          <h3 class="font-medium text-gray-900 text-xl mb-1 line-clamp-1">
            {{ item.title }}
          </h3>
          <p class="text-base text-gray-900 font-medium">
            {{ item.price }}
          </p>
        </div>

        <!-- Gambar di Bawah -->
        <div class="aspect-[4/5] overflow-hidden bg-gray-100 rounded-xl">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import productOne from "../../../assets/images/ProductOne.svg";
import productTwoe from "../../../assets/images/ProductTwoe.svg";
import productThree from "../../../assets/images/ProductThree.svg";
import productFour from "../../../assets/images/ProductFour.svg";

const frames = ref([
  {
    id: 1,
    author: "John Doe",
    title: "Cute & Playful",
    price: "Rp15.000",
    image: productOne,
  },
  {
    id: 2,
    author: "John Doe",
    title: "Classic Photobooth Vib...",
    price: "Rp15.000",
    image: productTwoe,
  },
  {
    id: 3,
    author: "John Doe",
    title: "Aesthetic & Soft",
    price: "Rp15.000",
    image: productThree,
  },
  {
    id: 4,
    author: "John Doe",
    title: "Aesthetic & Soft",
    price: "Rp15.000",
    image: productFour,
  },
  // Add more items as needed
]);
</script>

<style scoped></style>
