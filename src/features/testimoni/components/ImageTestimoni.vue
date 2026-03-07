<template>
  <div class="rounded-3xl overflow-hidden h-[600px]">
    <Transition name="fade" mode="out-in">
      <img
        :key="currentTestimonial.id"
        :src="currentTestimonial.image"
        :alt="currentTestimonial.name"
        class="w-full h-full object-cover"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
};

const props = defineProps<{
  currentTestimonial: Testimonial;
}>();

const fallbackTestimonial: Testimonial = {
  id: 0,
  name: "No Data",
  role: "",
  quote: "Belum ada testimoni.",
  image: "",
};

const currentTestimonial = computed<Testimonial>(() => {
  return props.currentTestimonial ?? fallbackTestimonial;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
