<template>
  <div class="w-full overflow-hidden bg-violet-600 py-8">
    <!-- MARQUEE ATAS -->
    <MarqueeItem from="0%" to="-100%">
      <div
        v-for="i in 8"
        :key="'top-' + i"
        class="flex items-center gap-10 pr-10"
      >
        <EasypothLogo />
        <StarIcon />
      </div>
    </MarqueeItem>
  </div>
</template>

<script setup lang="ts">
import EasypothLogo from './components/EasypothLogo.vue';
import MarqueeItem from './components/MarqueeItem.vue';
import StarIcon from './components/StarIcon.vue';

</script>

<style scoped></style>
