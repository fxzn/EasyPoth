<template>
  <dialog ref="dialogRef" class="modal modal-middle" @close="emit('close')">
    <div
      class="modal-box w-[430px] max-w-[88vw] max-h-[90vh] rounded-[18px] p-4 md:p-5 bg-white shadow-2xl overflow-x-hidden overflow-y-auto"
    >
      <h3
        class="mb-4 text-[22px] leading-[1.05] font-medium tracking-[-0.01em] text-[#0B132B] text-center"
      >
        Pilih frame yang tersedia
      </h3>

      <div class="grid grid-cols-2 gap-x-4 gap-y-6">
        <div
          v-for="grid in gridOptions"
          :key="grid.id"
          class="space-y-3 cursor-pointer"
          @click="handleGridClick(grid.id)"
        >
          <p class="text-[15px] font-medium text-gray-900">{{ grid.label }}</p>
          <div
            :class="[
              'aspect-[3/4] rounded-[12px] border-2 transition-all p-4',
              selectedGrid === grid.id ? 'bg-[#F5EFFF] border-[#DDD6FE]' : 'bg-[#F3F4F6] border-gray-100',
            ]"
          >
            <div :class="['w-full h-full bg-white rounded-xl shadow-sm p-3 grid gap-1.5', grid.colsClass, grid.rowsClass]">
              <div
                v-for="i in grid.cells"
                :key="i"
                class="bg-gray-100 rounded-md flex items-center justify-center text-[10px] font-medium text-gray-400"
              >
                image here
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-action mt-4 flex flex-col gap-2">
        <button
          @click="emit('close')"
          class="w-full h-10 rounded-full text-xs font-semibold border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:scale-[0.995] transition-all"
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
  (e: "start", value: string): void;
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);

function handleGridClick(gridId: string) {
  emit("update:selectedGrid", gridId);
  emit("start", gridId);
}

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
