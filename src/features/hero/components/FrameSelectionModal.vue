<template>
  <dialog ref="dialogRef" class="modal modal-middle" @close="emit('close')">
    <div class="modal-box max-w-md p-5 rounded-[16px] bg-white shadow-2xl">
      <h3 class="text-2xl font-medium text-gray-900 mb-8 text-center">Pilih frame yang tersedia</h3>

      <div class="grid grid-cols-2 gap-x-4 gap-y-8">
        <div
          v-for="grid in gridOptions"
          :key="grid.id"
          class="space-y-3 cursor-pointer"
          @click="emit('update:selectedGrid', grid.id)"
        >
          <p class="text-[15px] font-medium text-gray-900">{{ grid.label }}</p>
          <div
            :class="[
              'aspect-[3/4] rounded-[12px] border-2 transition-all p-4',
              selectedGrid === grid.id ? 'bg-[#F5EFFF] border-[#DDD6FE]' : 'bg-[#F3F4F6] border-gray-100',
            ]"
          >
            <div :class="['w-full h-full bg-white rounded-xl shadow-sm p-3 grid gap-1.5', grid.colsClass, grid.rowsClass]">
              <div v-for="i in grid.cells" :key="i" class="bg-gray-100 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-action mt-10 flex flex-col gap-2">
        <button
          :disabled="!selectedGrid"
          @click="emit('start')"
          :class="[
            'w-full rounded-full py-4 font-bold text-base transition-all',
            selectedGrid ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed',
          ]"
        >
          Mulai Foto
        </button>
        <button
          @click="emit('close')"
          class="bg-white hover:bg-gray-50 border border-gray-200 w-full rounded-full py-4 font-bold text-base text-gray-900"
        >
          Tutup
        </button>
      </div>
    </div>
    <div class="modal-backdrop bg-black/50 backdrop-blur-sm" @click="emit('close')"></div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import type { GridOption } from "../../../lib/types/hero";

const props = defineProps<{
  isOpen: boolean;
  selectedGrid: string;
  gridOptions: GridOption[];
}>();

const emit = defineEmits<{
  (e: "update:selectedGrid", value: string): void;
  (e: "close"): void;
  (e: "start"): void;
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);

watch(
  () => props.isOpen,
  (isOpen) => {
    if (!dialogRef.value) return;
    if (isOpen && !dialogRef.value.open) {
      dialogRef.value.showModal();
    }
    if (!isOpen && dialogRef.value.open) {
      dialogRef.value.close();
    }
  },
  { immediate: true },
);
</script>

<style scoped></style>
