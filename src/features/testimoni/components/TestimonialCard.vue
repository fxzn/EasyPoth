<template>
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
          :disabled="props.isAtStart"
          :class="[
            'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all',
            props.isAtStart
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
          :disabled="props.isAtEnd"
          :class="[
            'w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all',
            props.isAtEnd
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
  isAtStart: boolean;
  isAtEnd: boolean;
}>();

const emit = defineEmits<{
  (e: "next"): void;
  (e: "previous"): void;
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

const nextTestimonial = () => {
  if (!props.isAtEnd) {
    emit("next");
  }
};

const previousTestimonial = () => {
  if (!props.isAtStart) {
    emit("previous");
  }
};
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
