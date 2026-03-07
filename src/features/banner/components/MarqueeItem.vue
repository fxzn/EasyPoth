<template>
  <div class="relative w-full overflow-hidden">
    <Motion
      class="flex w-max items-center"
      :animate="{ x: ['0%', '-50%'] }"
      :transition="{
        duration,
        repeat: Infinity,
        ease: 'linear',
        // easing: 'linear',
      }"
      style="will-change: transform"
    >
      <!-- content asli -->
      <div class="flex items-center">
        <slot />
      </div>

      <!-- duplikat buat seamless -->
      <div class="flex items-center">
        <slot />
      </div>
    </Motion>
  </div>
</template>

<script setup lang="ts">
import { Motion } from "motion-v";

withDefaults(
  defineProps<{
    duration?: number
  }>(),
  {
    duration: 60, // makin besar = makin smooth
  }
)

</script>

<style scoped></style>
