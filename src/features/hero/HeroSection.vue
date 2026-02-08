<template>
  <div class="pt-8">
    <div
      class="grid grid-cols-1 lg:grid-cols-[1fr_320px_1fr] gap-12 items-start"
    >
      <!-- LEFT COLUMN -->
      <div class="space-y-72">
        <h1 class="text-6xl font-medium leading-tight text-gray-900">
          Abadikan dengan <br />
          sempurna setiap <br />
          momenmu
        </h1>

        <div class="flex gap-12">
          <div v-for="item in stats" :key="item.label">
            <p class="text-3xl font-medium text-gray-900">
              {{ item.value }}
            </p>
            <p class="text-base font-normal text-gray-500">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- CENTER COLUMN (PHOTOBOOTH PREVIEW) -->
      <div class="flex justify-center">
  <div class="w-[360px] h-[620px] relative overflow-hidden rounded-t-3xl">
    <img 
      :src="heroImage" 
      alt="Photobooth" 
      class="w-full h-full object-cover object-top"
    />
    
    <!-- <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div> -->
  </div>
</div>

      <!-- RIGHT COLUMN -->
      <div>
        <!-- Frame Grid -->
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="grid in ['1x1 Grid', '2x2 Grid', '3x1 Grid', '3x2 Grid']"
              :key="grid"
              class="h-[194px] rounded-2xl bg-gray-200 p-4 flex items-start justify-start text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-300 transition"
            >
              {{ grid }}
            </div>
          </div>
        </div>
        <div class="mt-16">
          <p class="font-medium text-gray-600">
            Pilih frame favoritmu, unggah fotomu, dan simpan momen spesial
            seketika
          </p>
          <div class="flex items-center gap-4 mt-4">
            <Button
              class="bg-violet-600 font-bold text-white"
              variant="btn-primary"
              size="md"
            >
              Coba sekarang
            </Button>
            <div>
              <Button class="font-bold" size="md">
                Gabung sebagai contributor
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
                    fill="black"
                  />
                </svg>
              </Button>

              <!-- <button class="text-gray-900 font-medium hover:underline">Gabung sebagai contributor</button> -->
              <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
                fill="black"
              />
            </svg> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import heroImage from "../../assets/images/heroImage.svg";
import Button from "../../components/ui/Button.vue";

const stats = [
  { value: "5.2rb+", label: "Pengguna aktif" },
  { value: "100+", label: "Frame tersedia" },
  { value: "50+", label: "Contributor" },
];
</script>

<style scoped></style>
