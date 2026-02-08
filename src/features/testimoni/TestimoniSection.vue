<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch py-20">
    <!-- Left: Image -->
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

    <!-- Right: Testimonial Card -->
    <div
      class="bg-gray-900 rounded-3xl p-12 text-white h-[600px] flex flex-col justify-between"
    >
      <!-- Top Section: Quote Icon & Navigation Buttons -->
      <div class="flex items-start justify-between mb-8">
        <!-- Quote Icon -->
        <svg
          class="w-16 h-16 text-purple-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>

        <!-- Navigation Buttons -->
        <div class="flex items-center gap-3">
          <button
            @click="previousTestimonial"
            class="w-12 h-12 rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click="nextTestimonial"
            class="w-12 h-12 rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Middle Section: Testimonial Text -->
      <Transition name="fade" mode="out-in">
        <div :key="currentTestimonial.id" class="flex-1">
          <p class="text-3xl lg:text-4xl font-medium leading-relaxed">
            {{ currentTestimonial.quote }}
          </p>
        </div>
      </Transition>

      <!-- Bottom Section: Author Info (2 Grid) -->
      <Transition name="fade" mode="out-in">
        <div :key="currentTestimonial.id" class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-xl font-semibold">{{ currentTestimonial.name }}</p>
          </div>
          <div class="text-right">
            <p class="text-gray-500 text-xl">{{ currentTestimonial.role }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import testiImage from "../../assets/images/photo.svg";

const testimonials = ref([
  {
    id: 1,
    name: "Kevin",
    role: "Mahasiswa",
    quote:
      "Prosesnya cepat dan gampang, frame-nya lucu, hasil fotonya langsung bisa diunduh dan dibagikan.",
    image: testiImage,
  },
  {
    id: 2,
    name: "Sarah",
    role: "Freelancer",
    quote:
      "Sangat membantu untuk kebutuhan konten sosial media. Frame-nya aesthetic banget!",
    image: testiImage,
  },
  {
    id: 3,
    name: "Budi",
    role: "Fotografer",
    quote:
      "Aplikasi yang simpel tapi powerful. Klien saya suka banget dengan hasilnya.",
    image: testiImage,
  },
]);

const currentIndex = ref(0);

const currentTestimonial = computed(
  () => testimonials.value[currentIndex.value],
);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const previousTestimonial = () => {
  currentIndex.value =
    currentIndex.value === 0
      ? testimonials.value.length - 1
      : currentIndex.value - 1;
};
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
