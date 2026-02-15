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
      class="bg-[#232323] rounded-3xl p-12 text-white h-[600px] flex flex-col justify-between"
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
          <!-- LEFT -->
          <button
            @click="previousTestimonial"
            :disabled="isAtStart"
            :class="[
              'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all',
              isAtStart
                ? 'border-gray-600 text-gray-600 cursor-not-allowed'
                : 'border-white hover:bg-white hover:text-gray-900',
            ]"
          >
            <!-- <svg
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
            </svg> -->
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0835 12.4584L21.0836 10.5418H5.58544L9.37058 6.75665L8.0153 5.40137L1.9165 11.5002L8.0153 17.599L9.37058 16.2436L5.58539 12.4585L21.0835 12.4584Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <!-- RIGHT -->
          <button
            @click="nextTestimonial"
            :disabled="isAtEnd"
            :class="[
              'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all',
              isAtEnd
                ? 'border-gray-600 text-gray-600 cursor-not-allowed'
                : 'border-white hover:bg-white hover:text-gray-900',
            ]"
          >
            <!-- <svg
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
            </svg> -->

            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.91664 12.4584L1.9165 10.5418H17.4146L13.6294 6.75665L14.9847 5.40137L21.0836 11.5002L14.9847 17.599L13.6294 16.2436L17.4147 12.4585L1.91664 12.4584Z"
                fill="currentColor"
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
            <p class="text-xl font-light">{{ currentTestimonial.name }}</p>
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
import testiImage1 from "../../assets/images/testi1.svg";
import testiImage2 from "../../assets/images/testi2.svg";
import testiImage3 from "../../assets/images/testi3.svg";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
};

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

// const currentTestimonial = computed<Testimonial>( () => {
//   return testimonials.value[currentIndex.value] ?? testimonials.value[0];
// });

const currentTestimonial = computed<Testimonial>(() => {
  const list = testimonials.value;

  const item = list[currentIndex.value];

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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
