<script></script>

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
          <p class="text-2xl md:text-4xl font-semibold text-gray-900 leading-none">
            {{ item.value }}
          </p>
          <p class="text-xs md:text-base text-gray-500 mt-2">{{ item.label }}</p>
        </div>
      </div>

      <p class="text-gray-600 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl">
        Pilih frame favoritmu, unggah fotomu, dan simpan momen spesial seketika
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-14">
        <Button
          class="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-full py-4 px-8 text-sm md:text-base transition-all w-full"
          @click="openFrameModal"
        >
          Coba sekarang
        </Button>

        <Button
          class="bg-white border border-gray-200 text-gray-800 font-medium rounded-full py-4 px-8 text-sm md:text-base flex items-center justify-center gap-2 hover:bg-gray-50 transition-all w-full"
        >
          Gabung sebagai contributor
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="md:w-5 md:h-5">
            <path d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z" fill="currentColor"/>
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
        <div class="overflow-hidden shadow-2xl w-[92%] md:w-[80%] max-w-[600px] aspect-[9/16] md:aspect-[3/4] max-h-[500px] md:max-h-[700px] rounded-t-[40px] md:rounded-t-[52px] border-x border-t border-gray-100">
          <img
            :src="heroImage"
            alt="Contoh hasil photobooth online dengan berbagai pilihan grid frame estetik"
            class="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>

    <div class="hidden xl:grid grid-cols-[1fr_320px_1fr] gap-12 items-start"></div>
  </div>

  <div class="hidden xl:grid grid-cols-[1fr_320px_1fr] gap-12 items-start">
    <div class="space-y-16">
      <h1 class="text-6xl font-medium leading-tight text-gray-900 mb-66">
        Abadikan dengan <br />sempurna setiap <br />momenmu
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
        <img :src="heroImage" alt="Koleksi frame foto photobooth EasyPoth" class="w-full h-full object-cover object-top"/>
      </div>
    </div>

    <div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="grid in ['1x1 Grid', '2x1 Grid', '3x1 Grid', '3x2 Grid']" :key="grid" class="h-[194px] rounded-2xl bg-gray-200 p-4">
          {{ grid }}
        </div>
      </div>
      <div class="mt-16">
        <p class="font-medium text-gray-600">
          Pilih frame favoritmu, unggah fotomu, dan simpan momen spesial seketika
        </p>
        <div class="flex items-center gap-4 mt-4">
          <Button
            class="bg-violet-600 font-medium text-white"
            variant="btn-primary"
            size="md"
            @click="openFrameModal"
          >
            Coba sekarang
          </Button>
          <Button class="font-medium" size="md">
            Gabung sebagai contributor
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.7809 7.33327L7.2049 3.75726L8.1477 2.81445L13.3332 7.99993L8.1477 13.1853L7.2049 12.2425L10.7809 8.6666H2.6665V7.33327H10.7809Z" fill="black"/>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  </div>

  <!-- ─── MODAL 1: Pilih Frame ─────────────────────────────────────────── -->
  <dialog ref="frameModalRef" class="modal modal-middle">
    <div class="modal-box max-w-md p-5 rounded-[16px] bg-white shadow-2xl">
      <h3 class="text-2xl font-medium text-gray-900 mb-8 text-center">
        Pilih frame yang tersedia
      </h3>

      <div class="grid grid-cols-2 gap-x-4 gap-y-8">
        <div
          v-for="grid in gridOptions"
          :key="grid.id"
          class="space-y-3 cursor-pointer"
          @click="selectedGrid = grid.id"
        >
          <p class="text-[15px] font-medium text-gray-900">{{ grid.label }}</p>
          <div
            :class="[
              'aspect-[3/4] rounded-[12px] border-2 transition-all p-4',
              selectedGrid === grid.id
                ? 'bg-[#F5EFFF] border-[#DDD6FE]'
                : 'bg-[#F3F4F6] border-gray-100',
            ]"
          >
            <div
              :class="[
                'w-full h-full bg-white rounded-xl shadow-sm p-3 grid gap-1.5',
                grid.colsClass,
                grid.rowsClass,
              ]"
            >
              <div v-for="i in grid.cells" :key="i" class="bg-gray-100 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-action mt-10 flex flex-col gap-2">
        <button
          :disabled="!selectedGrid"
          @click="startCamera"
          :class="[
            'w-full rounded-full py-4 font-bold text-base transition-all',
            selectedGrid
              ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed',
          ]"
        >
          Mulai Foto
        </button>
        <button
          @click="frameModalRef?.close()"
          class="bg-white hover:bg-gray-50 border border-gray-200 w-full rounded-full py-4 font-bold text-base text-gray-900"
        >
          Tutup
        </button>
      </div>
    </div>
    <div class="modal-backdrop bg-black/50 backdrop-blur-sm" @click="frameModalRef?.close()"></div>
  </dialog>

  <!-- ─── MODAL 2: Kamera ──────────────────────────────────────────────── -->
  <dialog ref="cameraModalRef" class="modal modal-middle">
    <div class="modal-box max-w-md p-0 rounded-[20px] bg-[#0F0F13] overflow-hidden shadow-2xl">
      <!-- Header -->
      <div class="flex items-center justify-between px-5 py-4">
        <button @click="stopCamera" class="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <div class="text-center">
          <p class="text-white font-semibold text-sm">{{ activeGrid?.label }}</p>
          <p class="text-gray-400 text-xs mt-0.5">
            Foto {{ capturedPhotos.length + 1 }} dari {{ activeGrid?.cells }}
          </p>
        </div>
        <div class="w-6"></div>
      </div>

      <!-- Progress dots -->
      <div class="flex justify-center gap-2 pb-3">
        <div
          v-for="i in (activeGrid?.cells ?? 0)"
          :key="i"
          :class="[
            'rounded-full transition-all duration-300',
            i <= capturedPhotos.length ? 'bg-[#7C3AED] w-4 h-2' :
            i === capturedPhotos.length + 1 ? 'bg-white w-4 h-2' : 'bg-gray-600 w-2 h-2',
          ]"
        ></div>
      </div>

      <!-- Viewfinder -->
      <div class="relative mx-4 mb-4 rounded-xl overflow-hidden bg-black">
        <video
          ref="videoEl"
          autoplay
          playsinline
          muted
          class="w-full aspect-[3/4] object-cover"
          :class="{ 'scale-x-[-1]': isFrontCamera }"
        ></video>

        <!-- Captured thumbnails overlay -->
        <div
          v-if="activeGrid && capturedPhotos.length > 0"
          :class="['absolute inset-0 grid gap-0.5', activeGrid.colsClass, activeGrid.rowsClass]"
        >
          <div v-for="i in (activeGrid?.cells ?? 0)" :key="i" class="relative overflow-hidden">
            <img
              v-if="capturedPhotos[i - 1]"
              :src="capturedPhotos[i - 1]"
              class="w-full h-full object-cover opacity-70"
            />
            <div
              v-else-if="i === capturedPhotos.length + 1"
              class="absolute inset-0 border-2 border-[#7C3AED] animate-pulse bg-[#7C3AED]/10"
            ></div>
          </div>
        </div>

        <!-- Countdown -->
        <Transition name="countdown">
          <div v-if="countdown > 0" class="absolute inset-0 flex items-center justify-center bg-black/40">
            <span class="text-white text-8xl font-bold tabular-nums">{{ countdown }}</span>
          </div>
        </Transition>

        <!-- Flash -->
        <Transition name="flash">
          <div v-if="showFlash" class="absolute inset-0 bg-white pointer-events-none"></div>
        </Transition>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-between px-8 pb-6">
        <button
          @click="flipCamera"
          class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
        </button>

        <button
          @click="takePhoto"
          :disabled="isCapturing"
          class="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg active:scale-95 transition-transform disabled:opacity-50"
        >
          <div class="w-16 h-16 rounded-full border-4 border-gray-300"></div>
        </button>

        <button
          @click="toggleTimer"
          class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span
            v-if="timerSeconds > 0"
            class="absolute -top-1 -right-1 bg-[#7C3AED] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
          >
            {{ timerSeconds }}
          </span>
        </button>
      </div>
    </div>
  </dialog>

  <!-- ─── MODAL 3: Preview Hasil ───────────────────────────────────────── -->
  <dialog ref="previewModalRef" class="modal modal-middle">
    <div class="modal-box max-w-md p-5 rounded-[20px] bg-white shadow-2xl">
      <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">Preview Hasil</h3>

      <canvas ref="canvasEl" class="hidden"></canvas>

      <div class="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 p-3">
        <div
          v-if="activeGrid"
          :class="['grid gap-1.5 w-full', activeGrid.colsClass, activeGrid.rowsClass]"
          style="aspect-ratio: 3/4"
        >
          <div v-for="(photo, i) in capturedPhotos" :key="i" class="rounded-lg overflow-hidden bg-gray-200">
            <img :src="photo" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 mt-5">
        <button
          @click="downloadResult"
          class="w-full rounded-full py-3.5 font-semibold text-base bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-md transition-colors"
        >
          Unduh Foto
        </button>
        <button
          @click="retakeAll"
          class="w-full rounded-full py-3.5 font-semibold text-base bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors"
        >
          Foto Ulang
        </button>
        <button
          @click="closeAll"
          class="w-full rounded-full py-3.5 font-semibold text-base text-gray-400 hover:text-gray-600 transition-colors"
        >
          Selesai
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import heroImage from "../../assets/images/heroImage.svg";
import Button from "../../components/ui/Button.vue";

// ─── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "5.2rb+", label: "Pengguna aktif" },
  { value: "100+", label: "Frame tersedia" },
  { value: "50+", label: "Contributor" },
];

// ─── Grid Options ──────────────────────────────────────────────────────────────
const gridOptions = [
  { id: "1x1 Grid", label: "1×1 Grid", cells: 1, colsClass: "grid-cols-1", rowsClass: "grid-rows-1", cols: 1, rows: 1 },
  { id: "2x2 Grid", label: "2×2 Grid", cells: 4, colsClass: "grid-cols-2", rowsClass: "grid-rows-2", cols: 2, rows: 2 },
  { id: "3x1 Grid", label: "3×1 Grid", cells: 3, colsClass: "grid-cols-1", rowsClass: "grid-rows-3", cols: 1, rows: 3 },
  { id: "3x2 Grid", label: "3×2 Grid", cells: 6, colsClass: "grid-cols-2", rowsClass: "grid-rows-3", cols: 2, rows: 3 },
];

// ─── State ─────────────────────────────────────────────────────────────────────
const selectedGrid = ref("3x2 Grid");
const capturedPhotos = ref<string[]>([]);
const isFrontCamera = ref(true);
const isCapturing = ref(false);
const countdown = ref(0);
const showFlash = ref(false);
const timerSeconds = ref(3);

const activeGrid = computed(() => gridOptions.find((g) => g.id === selectedGrid.value) ?? null);

// ─── Refs ──────────────────────────────────────────────────────────────────────
const frameModalRef = ref<HTMLDialogElement | null>(null);
const cameraModalRef = ref<HTMLDialogElement | null>(null);
const previewModalRef = ref<HTMLDialogElement | null>(null);
const videoEl = ref<HTMLVideoElement | null>(null);
const canvasEl = ref<HTMLCanvasElement | null>(null);
let stream: MediaStream | null = null;

// ─── Grid helper (kept for backward compat if used elsewhere) ──────────────────
function gridConfig(grid: string) {
  const config: Record<string, { cols: string; rows: string; count: number }> = {
    "1x1 Grid": { cols: "grid-cols-1", rows: "grid-rows-1", count: 1 },
    "2x2 Grid": { cols: "grid-cols-2", rows: "grid-rows-2", count: 4 },
    "3x1 Grid": { cols: "grid-cols-1", rows: "grid-rows-3", count: 3 },
    "3x2 Grid": { cols: "grid-cols-2", rows: "grid-rows-3", count: 6 },
  };
  return config[grid] ?? { cols: "grid-cols-1", rows: "grid-rows-1", count: 1 };
}

// ─── Modal helpers ─────────────────────────────────────────────────────────────
function openFrameModal() {
  frameModalRef.value?.showModal();
}

// ─── Camera ────────────────────────────────────────────────────────────────────
async function startCamera() {
  if (!activeGrid.value) return;
  capturedPhotos.value = [];

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: isFrontCamera.value ? "user" : "environment", aspectRatio: 3 / 4 },
      audio: false,
    });

    frameModalRef.value?.close();
    cameraModalRef.value?.showModal();

    await new Promise((r) => setTimeout(r, 100));
    if (videoEl.value) videoEl.value.srcObject = stream;
  } catch (e) {
    alert("Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.");
    console.error(e);
  }
}

function stopCamera() {
  stream?.getTracks().forEach((t) => t.stop());
  stream = null;
  cameraModalRef.value?.close();
  frameModalRef.value?.showModal();
}

async function flipCamera() {
  isFrontCamera.value = !isFrontCamera.value;
  if (stream) {
    stream.getTracks().forEach((t) => t.stop());
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: isFrontCamera.value ? "user" : "environment", aspectRatio: 3 / 4 },
      audio: false,
    });
    if (videoEl.value) videoEl.value.srcObject = stream;
  }
}

function toggleTimer() {
  const options = [0, 3, 10];
  const idx = options.indexOf(timerSeconds.value);
  timerSeconds.value = options[(idx + 1) % options.length];
}

async function takePhoto() {
  if (isCapturing.value || !videoEl.value || !activeGrid.value) return;
  isCapturing.value = true;

  if (timerSeconds.value > 0) {
    countdown.value = timerSeconds.value;
    while (countdown.value > 0) {
      await new Promise((r) => setTimeout(r, 1000));
      countdown.value--;
    }
  }

  showFlash.value = true;
  setTimeout(() => (showFlash.value = false), 300);

  const video = videoEl.value;
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d")!;

  if (isFrontCamera.value) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(video, 0, 0);

  capturedPhotos.value.push(canvas.toDataURL("image/jpeg", 0.92));
  isCapturing.value = false;

  if (capturedPhotos.value.length >= activeGrid.value.cells) {
    await new Promise((r) => setTimeout(r, 400));
    stream?.getTracks().forEach((t) => t.stop());
    stream = null;
    cameraModalRef.value?.close();
    previewModalRef.value?.showModal();
  }
}

// ─── Download ──────────────────────────────────────────────────────────────────
async function downloadResult() {
  if (!canvasEl.value || !activeGrid.value) return;
  const grid = activeGrid.value;

  const CELL_W = 400;
  const CELL_H = Math.round(CELL_W * (4 / 3));
  const GAP = 8;
  const PAD = 16;

  const canvasW = PAD * 2 + grid.cols * CELL_W + (grid.cols - 1) * GAP;
  const canvasH = PAD * 2 + grid.rows * CELL_H + (grid.rows - 1) * GAP;

  const canvas = canvasEl.value;
  canvas.width = canvasW;
  canvas.height = canvasH;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#F3F4F6";
  ctx.beginPath();
  ctx.roundRect(0, 0, canvasW, canvasH, 16);
  ctx.fill();

  for (let i = 0; i < capturedPhotos.value.length; i++) {
    const col = i % grid.cols;
    const row = Math.floor(i / grid.cols);
    const x = PAD + col * (CELL_W + GAP);
    const y = PAD + row * (CELL_H + GAP);

    await new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(x, y, CELL_W, CELL_H, 10);
        ctx.clip();
        ctx.drawImage(img, x, y, CELL_W, CELL_H);
        ctx.restore();
        resolve();
      };
      img.src = capturedPhotos.value[i];
    });
  }

  const link = document.createElement("a");
  link.download = `easypoth-${grid.id}-${Date.now()}.jpg`;
  link.href = canvas.toDataURL("image/jpeg", 0.95);
  link.click();
}

function retakeAll() {
  previewModalRef.value?.close();
  capturedPhotos.value = [];
  startCamera();
}

function closeAll() {
  previewModalRef.value?.close();
  capturedPhotos.value = [];
}
</script>

<style scoped>
.countdown-enter-active,
.countdown-leave-active {
  transition: all 0.2s ease;
}
.countdown-enter-from,
.countdown-leave-to {
  opacity: 0;
  transform: scale(1.5);
}

.flash-enter-active {
  transition: opacity 0.05s ease;
}
.flash-leave-active {
  transition: opacity 0.25s ease;
}
.flash-enter-from,
.flash-leave-to {
  opacity: 0;
}
</style>