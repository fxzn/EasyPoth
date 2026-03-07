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
    <ContentSection/>
  </div>
</template>

<script setup lang="ts">
import ContentSection from './components/ContentSection.vue';

</script>

<style scoped></style>
