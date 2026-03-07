<template>
  <div
    class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8"
  >
    <div class="flex items-center gap-8">
      <h1 class="text-[42px] font-medium">Koleksi frame</h1>

      <!-- View Toggle Buttons -->
      <div class="flex items-center gap-2">
        <button
          class="group w-10 h-10 rounded-full border border-[#C8C8C8] hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all duration-200"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V15C0 15.3978 0.158035 15.7794 0.43934 16.0607C0.720644 16.342 1.10218 16.5 1.5 16.5H15C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V1.5C16.5 1.10218 16.342 0.720644 16.0607 0.43934C15.7794 0.158035 15.3978 0 15 0ZM15 7.5H9V1.5H15V7.5ZM7.5 1.5V7.5H1.5V1.5H7.5ZM1.5 9H7.5V15H1.5V9ZM15 15H9V9H15V15Z"
              class="fill-[#232323] group-hover:fill-white transition-colors duration-200"
            />
          </svg>
        </button>

        <button
          class="group w-10 h-10 rounded-full border border-[#C8C8C8] hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all duration-200"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V15C0 15.3978 0.158035 15.7794 0.43934 16.0607C0.720644 16.342 1.10218 16.5 1.5 16.5H15C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V1.5C16.5 1.10218 16.342 0.720644 16.0607 0.43934C15.7794 0.158035 15.3978 0 15 0ZM15 7.5H9V1.5H15V7.5ZM7.5 1.5V7.5H1.5V1.5H7.5ZM1.5 9H7.5V15H1.5V9ZM15 15H9V9H15V15Z"
              class="fill-[#232323] group-hover:fill-white transition-colors duration-200"
            />
          </svg>
        </button>

        <button
          class="group w-10 h-10 rounded-full border border-[#C8C8C8] hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all duration-200"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V15C0 15.3978 0.158035 15.7794 0.43934 16.0607C0.720644 16.342 1.10218 16.5 1.5 16.5H15C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V1.5C16.5 1.10218 16.342 0.720644 16.0607 0.43934C15.7794 0.158035 15.3978 0 15 0ZM15 7.5H9V1.5H15V7.5ZM7.5 1.5V7.5H1.5V1.5H7.5ZM1.5 9H7.5V15H1.5V9ZM15 15H9V9H15V15Z"
              class="fill-[#232323] group-hover:fill-white transition-colors duration-200"
            />
          </svg>
        </button>

        <button
          class="group w-10 h-10 rounded-full border border-[#C8C8C8] hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all duration-200"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V15C0 15.3978 0.158035 15.7794 0.43934 16.0607C0.720644 16.342 1.10218 16.5 1.5 16.5H15C15.3978 16.5 15.7794 16.342 16.0607 16.0607C16.342 15.7794 16.5 15.3978 16.5 15V1.5C16.5 1.10218 16.342 0.720644 16.0607 0.43934C15.7794 0.158035 15.3978 0 15 0ZM15 7.5H9V1.5H15V7.5ZM7.5 1.5V7.5H1.5V1.5H7.5ZM1.5 9H7.5V15H1.5V9ZM15 15H9V9H15V15Z"
              class="fill-[#232323] group-hover:fill-white transition-colors duration-200"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Bar -->
    <div
      class="flex items-center justify-between border-b border-gray-900 pb-1 w-full md:w-auto md:min-w-[280px]"
    >
      <input
        id="search"
        name="search"
        type="text"
        placeholder="CARI DISINI"
        autocomplete="off"
        class="outline-none bg-transparent text-sm tracking-wider"
        v-model="searchQuery"
      />
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.476 13.6801L10.9555 10.1602C11.9759 8.93518 12.4847 7.36389 12.3761 5.77325C12.2675 4.1826 11.5498 2.69505 10.3724 1.62005C9.19496 0.545056 7.64842 -0.0346239 6.05448 0.00160103C4.46054 0.0378259 2.94192 0.687167 1.81454 1.81454C0.687167 2.94192 0.0378259 4.46054 0.00160103 6.05448C-0.0346239 7.64842 0.545056 9.19496 1.62005 10.3724C2.69505 11.5498 4.1826 12.2675 5.77325 12.3761C7.36389 12.4847 8.93518 11.9759 10.1602 10.9555L13.6801 14.476C13.7323 14.5283 13.7944 14.5697 13.8627 14.598C13.9309 14.6263 14.0041 14.6409 14.078 14.6409C14.152 14.6409 14.2251 14.6263 14.2934 14.598C14.3617 14.5697 14.4237 14.5283 14.476 14.476C14.5283 14.4237 14.5697 14.3617 14.598 14.2934C14.6263 14.2251 14.6409 14.152 14.6409 14.078C14.6409 14.0041 14.6263 13.9309 14.598 13.8627C14.5697 13.7944 14.5283 13.7323 14.476 13.6801ZM1.14054 6.20304C1.14054 5.20177 1.43745 4.22299 1.99373 3.39047C2.55 2.55794 3.34066 1.90907 4.26571 1.5259C5.19076 1.14273 6.20866 1.04248 7.19069 1.23782C8.17271 1.43315 9.07477 1.91531 9.78277 2.62331C10.4908 3.33132 10.9729 4.23337 11.1683 5.2154C11.3636 6.19743 11.2634 7.21533 10.8802 8.14038C10.497 9.06543 9.84814 9.85608 9.01562 10.4124C8.18309 10.9686 7.20431 11.2655 6.20304 11.2655C4.86084 11.2641 3.57404 10.7302 2.62496 9.78113C1.67588 8.83205 1.14203 7.54524 1.14054 6.20304Z"
          fill="#232323"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const searchQuery = ref("");
</script>

<style scoped></style>
