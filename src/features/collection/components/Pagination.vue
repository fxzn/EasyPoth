<template>
  <div class="flex items-center justify-between mt-12">
    <div class="flex items-center gap-1 md:gap-2">
      <button
        class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#7C3AED] text-white font-medium text-xs md:text-sm"
      >
        01
      </button>
      <button
        class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 hover:border-gray-400 font-medium text-xs md:text-sm transition-colors"
      >
        02
      </button>
      <button
        class="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 hover:border-gray-400 font-medium text-xs md:text-sm transition-colors"
      >
        03
      </button>

      <button
        class="hidden md:flex w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 items-center justify-center font-medium text-sm transition-colors"
      >
        04
      </button>
      <button
        class="hidden md:flex w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 items-center justify-center font-medium text-sm transition-colors"
      >
        05
      </button>
      <span class="hidden md:block px-2 text-gray-400">...</span>
      <button
        class="hidden md:flex w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 items-center justify-center font-medium text-sm transition-colors"
      >
        10
      </button>
    </div>

    <div class="flex items-center gap-2">
      <button
        class="group w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 hover:bg-[#ebe5f6] hover:border-[#ebe5f6] flex items-center justify-center transition-all duration-200"
      >
        <svg
          class="w-5 h-5 md:w-[23px] md:h-[23px]"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-[#232323] group-hover:fill-[#7C3AED] transition-colors duration-200"
            d="M21.0835 12.4584L21.0836 10.5418H5.58544L9.37058 6.75665L8.0153 5.40137L1.9165 11.5002L8.0153 17.599L9.37058 16.2436L5.58539 12.4585L21.0835 12.4584Z"
          />
        </svg>
      </button>

      <button
        class="group w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 hover:bg-[#ebe5f6] hover:border-[#ebe5f6] flex items-center justify-center transition-all duration-200"
      >
        <svg
          class="w-5 h-5 md:w-[23px] md:h-[23px]"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-[#232323] group-hover:fill-[#7C3AED] transition-colors duration-200"
            d="M1.91664 12.4584L1.9165 10.5418H17.4146L13.6294 6.75665L14.9847 5.40137L21.0836 11.5002L14.9847 17.599L13.6294 16.2436L17.4147 12.4585L1.91664 12.4584Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
