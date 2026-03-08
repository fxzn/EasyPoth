<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch py-20">
    <!-- Left: Image -->
    <ImageTestimoni :current-testimonial="currentTestimonial" />

    <!-- Right: Testimonial Card -->
    <TestimonialCard
      :current-testimonial="currentTestimonial"
      :is-at-start="isAtStart"
      :is-at-end="isAtEnd"
      @next="nextTestimonial"
      @previous="previousTestimonial"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import ImageTestimoni from "./components/ImageTestimoni.vue";
import TestimonialCard from "./components/TestimonialCard.vue";
import testiImage1 from "../../assets/images/testi1.svg";
import testiImage2 from "../../assets/images/testi2.svg";
import testiImage3 from "../../assets/images/testi3.svg";
import type { Testimonial } from "../../lib/types/testimoni";

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: "Kevin",
    role: "Mahasiswa",
    quote:
      "Prosesnya cepat dan gampang, frame-nya lucu, hasil fotonya langsung bisa diunduh dan dibagikan.",
    image: testiImage1,
  },
  {
    id: 2,
    name: "Jack O'wi",
    role: "Freelancer",
    quote:
      "Sangat membantu untuk kebutuhan konten sosial media. Frame-nya aesthetic banget!",
    image: testiImage2,
  },
  {
    id: 3,
    name: "Subiantoro",
    role: "Fotografer",
    quote:
      "Aplikasi yang simpel tapi powerful. Klien saya suka banget dengan hasilnya.",
    image: testiImage3,
  },
]);

const currentIndex = ref(0);

const currentTestimonial = computed<Testimonial>(() => {
  const item = testimonials.value[currentIndex.value];

  if (!item) {
    return {
      id: 0,
      name: "No Data",
      role: "",
      quote: "Belum ada testimoni.",
      image: "",
    };
  }

  return item;
});

const nextTestimonial = () => {
  if (currentIndex.value < testimonials.value.length - 1) {
    currentIndex.value++;
  }
};

const previousTestimonial = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(
  () => currentIndex.value === testimonials.value.length - 1,
);
</script>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
