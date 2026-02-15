<template>
  <div class="pt-4 px- md:px- xl:px-0">
    <div class="flex flex-col xl:hidden mx-auto xl:max-w-none">
      <h1
        class="text-[40px] md:text-6xl font-medium leading-[1.1] text-gray-900 mb-6 md:mb-8"
      >
        Abadikan dengan sempurna setiap momenmu
      </h1>

      <div class="flex gap-8 md:gap-16 mb-8 md:mb-10">
        <div v-for="item in stats" :key="item.label">
          <p
            class="text-2xl md:text-4xl font-semibold text-gray-900 leading-none"
          >
            {{ item.value }}
          </p>
          <p class="text-xs md:text-base text-gray-500 mt-2">
            {{ item.label }}
          </p>
        </div>
      </div>

      <p
        class="text-gray-600 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl"
      >
        Pilih frame favoritmu, unggah fotomu, dan simpan momen spesial seketika
      </p>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-14"
      >
        <Button
          class="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-full py-4 px-8 text-sm md:text-base transition-all w-full"
          onclick="my_modal_1.showModal()"
        >
          Coba sekarang
        </Button>
        <!-- <button class="btn" onclick="my_modal_1.showModal()">
            open modal
          </button> -->
        <dialog id="my_modal_1" class="modal modal-middle">
          <div
            class="modal-box max-w-md p-5 rounded-[16px] bg-white shadow-2xl"
          >
            <h3 class="text-2xl font-medium text-gray-900 mb-8 text-center">
              Pilih frame yang tersedia
            </h3>

            <div class="grid grid-cols-2 gap-x-4 gap-y-8">
              <div
                v-for="grid in ['1x1 Grid', '2x2 Grid', '3x1 Grid', '3x2 Grid']"
                :key="grid"
                class="space-y-3"
              >
                <p class="text-[15px] font-medium text-gray-900">{{ grid }}</p>
                <div
                  :class="[
                    'aspect-[3/4] rounded-[12px] border transition-all',
                    grid === '3x2 Grid'
                      ? 'bg-[#F5EFFF] border-[#DDD6FE] border-2 p-4'
                      : 'bg-[#F3F4F6] border-gray-100',
                  ]"
                >
                  <div
                    v-if="grid === '3x2 Grid'"
                    class="w-full h-full bg-white rounded-xl shadow-sm p-3 grid grid-cols-2 gap-1.5"
                  >
                    <div
                      v-for="i in 6"
                      :key="i"
                      class="bg-gray-50 border border-gray-100 rounded-sm"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-action mt-10">
              <form method="dialog" class="w-full">
                <Button
                  class="bg-white hover:bg-gray-50 border border-gray-200 w-full rounded-full py-4 font-bold text-base text-gray-900"
                >
                  Tutup
                </Button>
              </form>
            </div>
          </div>

          <form
            method="dialog"
            class="modal-backdrop bg-black/50 backdrop-blur-sm"
          >
            <button>close</button>
          </form>
        </dialog>

        <Button
          class="bg-white border border-gray-200 text-gray-800 font-medium rounded-full py-4 px-8 text-sm md:text-base flex items-center justify-center gap-2 hover:bg-gray-50 transition-all w-full"
        >
          Gabung sebagai contributor
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            class="md:w-5 md:h-5"
          >
            <path
              d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>

      <div class="grid grid-cols-4 gap-2 md:gap-4 mb-10 md:mb-16">
        <div
          v-for="grid in ['1×1 Grid', '2×1 Grid', '3×1 Grid', '3×2 Grid']"
          :key="grid"
          class="aspect-[4/5] rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[10px] md:text-sm font-medium text-gray-500 text-center px-2 border border-gray-100"
        >
          {{ grid }}
        </div>
      </div>

      <div class="flex justify-center mt-auto">
        <div
          class="overflow-hidden shadow-2xl /* 1. Lebar yang konsisten tidak menempel pinggir */ w-[92%] md:w-[80%] max-w-[600px] /* 2. Gunakan Aspect Ratio agar tinggi mengikuti lebar secara otomatis */ aspect-[9/16] md:aspect-[3/4] /* 3. Batasi tinggi maksimal agar tidak menenggelamkan konten di iPad */ max-h-[500px] md:max-h-[700px] /* 4. Styling Lengkungan */ rounded-t-[40px] md:rounded-t-[52px] border-x border-t border-gray-100"
        >
          <img
            :src="heroImage"
            alt="Hero Image"
            class="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>

    <div
      class="hidden xl:grid grid-cols-[1fr_320px_1fr] gap-12 items-start"
    ></div>
  </div>

  <div class="hidden xl:grid grid-cols-[1fr_320px_1fr] gap-12 items-start">
    <div class="space-y-16">
      <h1 class="text-6xl font-medium leading-tight text-gray-900 mb-66">
        Abadikan dengan <br />
        sempurna setiap <br />
        momenmu
      </h1>

      <div class="flex gap-12">
        <div v-for="item in stats" :key="item.label">
          <p class="text-3xl font-medium text-gray-900">{{ item.value }}</p>
          <p class="text-base text-gray-500">{{ item.label }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="w-[360px] h-[620px] overflow-hidden rounded-t-3xl">
        <img :src="heroImage" class="w-full h-full object-cover object-top" />
      </div>
    </div>

    <div>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="grid in ['1x1 Grid', '2x1 Grid', '3x1 Grid', '3x2 Grid']"
          :key="grid"
          class="h-[194px] rounded-2xl bg-gray-200 p-4"
        >
          {{ grid }}
        </div>
      </div>

      <div class="mt-16">
        <p class="font-medium text-gray-600">
          Pilih frame favoritmu, unggah fotomu, dan simpan momen spesial
          seketika
        </p>
        <div class="flex items-center gap-4 mt-4">
          <Button
            class="bg-violet-600 font-medium text-white"
            variant="btn-primary"
            size="md"
            onclick="my_modal_2.showModal()"
          >
            Coba sekarang
          </Button>

          <dialog id="my_modal_2" class="modal modal-bottom sm:modal-middle">
            <div
              class="modal-box max-w-md p-6 rounded-[16px] bg-white overflow-hidden max-h-[90vh]"
            >
              <h3 class="text-2xl font-medium text-gray-900 mb-4">
                Pilih frame yang tersedia
              </h3>

              <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                <div class="space-y-2">
                  <p class="text-[15px] font-medium text-gray-900">1x1 Grid</p>
                  <div
                    class="aspect-[3/4] bg-[#F3F4F6] rounded-[12px] border border-gray-100"
                  ></div>
                </div>

                <div class="space-y-2">
                  <p class="text-[15px] font-medium text-gray-900">2x2 Grid</p>
                  <div
                    class="aspect-[3/4] bg-[#F3F4F6] rounded-[12px] border border-gray-100"
                  ></div>
                </div>

                <div class="space-y-3">
                  <p class="text-[15px] font-medium text-gray-900">3x1 Grid</p>
                  <div
                    class="aspect-[3/4] bg-[#F3F4F6] rounded-[12px] border border-gray-100"
                  ></div>
                </div>

                <div class="space-y-3">
                  <p class="text-[15px] font-medium text-gray-900">3x2 Grid</p>
                  <div
                    class="aspect-[3/4] bg-[#F5EFFF] rounded-[12px] border-2 border-[#DDD6FE] flex items-center justify-center p-4"
                  >
                    <div
                      class="w-full h-full bg-white rounded-xl shadow-sm p-3 grid grid-cols-2 gap-1.5"
                    >
                      <div
                        v-for="i in 6"
                        :key="i"
                        class="bg-gray-50 border border-gray-100 rounded-sm"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-action mt-4">
                <form method="dialog" class="w-full">
                  <Button
                    class="btn btn-lg bg-white hover:bg-gray-50 border border-gray-200 w-full rounded-full normal-case font-bold text-base text-gray-900"
                  >
                    Tutup
                  </Button>
                  <!-- <button
                      class="btn btn-lg bg-white hover:bg-gray-50 border border-gray-200 w-full rounded-full normal-case font-bold text-base text-gray-900"
                    >
                      Tutup
                    </button> -->
                </form>
              </div>
            </div>

            <form method="dialog" class="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

          <Button class="font-medium" size="md">
            Gabung sebagai contributor
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z"
                fill="black"
              />
            </svg>
          </Button>
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
