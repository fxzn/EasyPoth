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
          @click="openFrameModal"
        >
          Coba sekarang
        </Button>
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
          class="overflow-hidden shadow-2xl w-[92%] md:w-[80%] max-w-[600px] aspect-[9/16] md:aspect-[3/4] max-h-[500px] md:max-h-[700px] rounded-t-[40px] md:rounded-t-[52px] border-x border-t border-gray-100"
        >
          <img
            :src="heroImage"
            alt="Contoh hasil photobooth online dengan berbagai pilihan grid frame estetik"
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
        <img
          :src="heroImage"
          alt="Koleksi frame foto photobooth EasyPoth"
          class="w-full h-full object-cover object-top"
        />
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
            @click="openFrameModal"
          >
            Coba sekarang
          </Button>
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

  <!-- ─── MODAL 1: Pilih Frame ─────────────────────────────────────────── -->
  <dialog ref="frameModalRef" class="modal modal-middle">
    <div class="modal-box max-w-lg p-5 rounded-[16px] bg-white shadow-2xl">
      <h3 class="text-2xl font-medium text-gray-900 mb-6 text-center">
        Pilih frame yang tersedia
      </h3>

      <!-- ── Pilih Tema ── -->
      <div class="mb-6">
        <p
          class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3"
        >
          Tema Motif
        </p>
        <div class="grid grid-cols-4 gap-2">
          <button
            v-for="theme in themeOptions"
            :key="theme.id"
            @click="selectedTheme = theme.id"
            :class="[
              'flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 transition-all text-xs font-medium',
              selectedTheme === theme.id
                ? 'border-violet-400 bg-violet-50 text-violet-700'
                : 'border-gray-100 bg-gray-50 text-gray-500 hover:bg-gray-100',
            ]"
          >
            <span class="text-xl">{{ theme.icon }}</span>
            <span class="leading-tight text-center">{{ theme.name }}</span>
          </button>
        </div>
      </div>

      <!-- ── Pilih Grid ── -->
      <div class="mb-2">
        <p
          class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3"
        >
          Tipe Grid
        </p>
        <div class="grid grid-cols-2 gap-x-4 gap-y-6">
          <div
            v-for="grid in gridOptions"
            :key="grid.id"
            class="space-y-3 cursor-pointer"
            @click="selectedGrid = grid.id"
          >
            <p class="text-[15px] font-medium text-gray-900">
              {{ grid.label }}
            </p>
            <div
              :class="[
                'aspect-[3/4] rounded-[12px] border-2 transition-all p-4',
                selectedGrid === grid.id
                  ? 'bg-[#F5EFFF] border-[#DDD6FE]'
                  : 'bg-[#F3F4F6] border-gray-100',
              ]"
            >
              <!-- Mini preview frame motif -->
              <div
                class="relative w-full h-full rounded-xl overflow-hidden shadow-sm"
              >
                <canvas
                  :ref="
                    (el) => setMiniCanvasRef(el as HTMLCanvasElement, grid.id)
                  "
                  class="w-full h-full"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-action mt-8 flex flex-col gap-2">
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
    <div
      class="modal-backdrop bg-black/50 backdrop-blur-sm"
      @click="frameModalRef?.close()"
    ></div>
  </dialog>

  <!-- ─── MODAL 2: Kamera ──────────────────────────────────────────────── -->
  <dialog ref="cameraModalRef" class="modal modal-middle">
    <div
      class="modal-box max-w-md p-0 rounded-[20px] bg-[#0F0F13] overflow-hidden shadow-2xl"
    >
      <div class="flex items-center justify-between px-5 py-4">
        <button
          @click="stopCamera"
          class="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div class="text-center">
          <p class="text-white font-semibold text-sm">
            {{ activeGrid?.label }}
          </p>
          <p class="text-gray-400 text-xs mt-0.5">
            Foto {{ capturedPhotos.length + 1 }} dari {{ activeGrid?.cells }}
          </p>
        </div>
        <div class="w-6"></div>
      </div>

      <div class="flex justify-center gap-2 pb-3">
        <div
          v-for="i in activeGrid?.cells ?? 0"
          :key="i"
          :class="[
            'rounded-full transition-all duration-300',
            i <= capturedPhotos.length
              ? 'bg-[#7C3AED] w-4 h-2'
              : i === capturedPhotos.length + 1
                ? 'bg-white w-4 h-2'
                : 'bg-gray-600 w-2 h-2',
          ]"
        ></div>
      </div>

      <div class="relative mx-4 mb-4 rounded-xl overflow-hidden bg-black">
        <video
          ref="videoEl"
          autoplay
          playsinline
          muted
          class="w-full aspect-[3/4] object-cover"
          :class="{ 'scale-x-[-1]': isFrontCamera }"
        ></video>

        <div
          v-if="activeGrid && capturedPhotos.length > 0"
          :class="[
            'absolute inset-0 grid gap-0.5',
            activeGrid.colsClass,
            activeGrid.rowsClass,
          ]"
        >
          <div
            v-for="i in activeGrid?.cells ?? 0"
            :key="i"
            class="relative overflow-hidden"
          >
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

        <Transition name="countdown">
          <div
            v-if="countdown > 0"
            class="absolute inset-0 flex items-center justify-center bg-black/40"
          >
            <span class="text-white text-8xl font-bold tabular-nums">{{
              countdown
            }}</span>
          </div>
        </Transition>

        <Transition name="flash">
          <div
            v-if="showFlash"
            class="absolute inset-0 bg-white pointer-events-none"
          ></div>
        </Transition>
      </div>

      <div class="flex items-center justify-between px-8 pb-6">
        <button
          @click="flipCamera"
          class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
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
      <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">
        Preview Hasil
      </h3>

      <canvas ref="canvasEl" class="hidden"></canvas>

      <div
        class="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 p-3"
      >
        <div
          v-if="activeGrid"
          :class="[
            'grid gap-1.5 w-full',
            activeGrid.colsClass,
            activeGrid.rowsClass,
          ]"
          style="aspect-ratio: 3/4"
        >
          <div
            v-for="(photo, i) in capturedPhotos"
            :key="i"
            class="rounded-lg overflow-hidden bg-gray-200"
          >
            <img :src="photo" class="w-full h-full object-cover" />
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
import { ref, computed, watch, nextTick } from "vue";
import heroImage from "../../assets/images/heroImage.svg";
import Button from "../../components/ui/Button.vue";

// ─── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "5.2rb+", label: "Pengguna aktif" },
  { value: "100+", label: "Frame tersedia" },
  { value: "50+", label: "Contributor" },
];

// ─── Theme Options ─────────────────────────────────────────────────────────────
const themeOptions = [
  { id: "floral", icon: "🌸", name: "Floral Pink" },
  { id: "botanical", icon: "🌿", name: "Botanical" },
  { id: "gold", icon: "✨", name: "Glitter Gold" },
  { id: "kawaii", icon: "🎀", name: "Y2K Kawaii" },
];

// ─── Grid Options ──────────────────────────────────────────────────────────────
const gridOptions = [
  {
    id: "1x1",
    label: "1×1 Grid",
    cells: 1,
    colsClass: "grid-cols-1",
    rowsClass: "grid-rows-1",
    cols: 1,
    rows: 1,
  },
  {
    id: "2x2",
    label: "2×2 Grid",
    cells: 4,
    colsClass: "grid-cols-2",
    rowsClass: "grid-rows-2",
    cols: 2,
    rows: 2,
  },
  {
    id: "3x1",
    label: "3×1 Grid",
    cells: 3,
    colsClass: "grid-cols-1",
    rowsClass: "grid-rows-3",
    cols: 1,
    rows: 3,
  },
  {
    id: "3x2",
    label: "3×2 Grid",
    cells: 6,
    colsClass: "grid-cols-2",
    rowsClass: "grid-rows-3",
    cols: 2,
    rows: 3,
  },
];

// ─── State ─────────────────────────────────────────────────────────────────────
const selectedTheme = ref<string>("floral");
const selectedGrid = ref<string>("3x1");
const capturedPhotos = ref<string[]>([]);
const isFrontCamera = ref(true);
const isCapturing = ref(false);
const countdown = ref(0);
const showFlash = ref(false);
const timerSeconds = ref(3);

const activeGrid = computed(
  () => gridOptions.find((g) => g.id === selectedGrid.value)!,
);

// ─── Refs ──────────────────────────────────────────────────────────────────────
const frameModalRef = ref<HTMLDialogElement | null>(null);
const cameraModalRef = ref<HTMLDialogElement | null>(null);
const previewModalRef = ref<HTMLDialogElement | null>(null);
const videoEl = ref<HTMLVideoElement | null>(null);
const canvasEl = ref<HTMLCanvasElement | null>(null);

// Map: gridId → canvas element (untuk mini preview di modal)
const miniCanvasMap = ref<Record<string, HTMLCanvasElement>>({});

function setMiniCanvasRef(el: HTMLCanvasElement | null, gridId: string) {
  if (el) miniCanvasMap.value[gridId] = el;
}

// ─── Frame Drawing Engine ──────────────────────────────────────────────────────

type ThemeKey = "floral" | "botanical" | "gold" | "kawaii";

interface ThemeDef {
  colors: string[];
  accent: string;
  dark: string;
}

const THEMES: Record<ThemeKey, ThemeDef> = {
  floral: {
    colors: ["#fde8ef", "#f5dde8", "#fef0f5"],
    accent: "#e8a0b4",
    dark: "#c05070",
  },
  botanical: {
    colors: ["#e4f0de", "#d8eccc", "#eef6e8"],
    accent: "#72b85a",
    dark: "#3a7830",
  },
  gold: {
    colors: ["#fdf4e0", "#faeac8", "#fef9ec"],
    accent: "#d4a820",
    dark: "#8c6808",
  },
  kawaii: {
    colors: ["#f4e4fc", "#ecd8f8", "#f8f0fe"],
    accent: "#c070e0",
    dark: "#8030b0",
  },
};

function rrect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawFloralMotif(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  t: ThemeDef,
) {
  const corners: [number, number, number, number][] = [
    [0, 0, 0, 1.4],
    [W, 0, Math.PI / 2, 1.3],
    [0, H, -Math.PI / 2, 1.3],
    [W, H, Math.PI, 1.4],
    [W / 2, 0, 0, 0.75],
    [W / 2, H, Math.PI, 0.75],
    [0, H / 2, -Math.PI / 2, 0.6],
    [W, H / 2, Math.PI / 2, 0.6],
  ];
  corners.forEach(([x, y, rot, sc]) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.scale(sc, sc);
    drawFloralCluster(ctx, t.accent, t.dark);
    ctx.restore();
  });
}

function drawFloralCluster(
  ctx: CanvasRenderingContext2D,
  accent: string,
  dark: string,
) {
  const leaves: [number, number, number, number][] = [
    [25, 70, 55, 35],
    [55, 95, 95, 55],
    [8, 115, -18, 72],
    [70, 55, 100, 25],
  ];
  leaves.forEach(([x1, y1, x2, y2]) => {
    ctx.fillStyle = dark + "70";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x1 + 28, y1 - 28, x2 + 18, y2 - 18, x2, y2);
    ctx.bezierCurveTo(x2 - 12, y2 + 12, x1 + 8, y1 + 12, x1, y1);
    ctx.fill();
  });
  const flowers = [
    { x: 55, y: 32, r: 30 },
    { x: 105, y: 65, r: 23 },
    { x: 22, y: 72, r: 19 },
    { x: 82, y: 100, r: 17 },
  ];
  flowers.forEach(({ x, y, r }) => {
    for (let p = 0; p < 6; p++) {
      const a = (p / 6) * Math.PI * 2;
      ctx.fillStyle = accent + "d0";
      ctx.beginPath();
      ctx.ellipse(
        x + Math.cos(a) * r * 0.75,
        y + Math.sin(a) * r * 0.75,
        r * 0.52,
        r * 0.3,
        a,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
    ctx.fillStyle = "#fffae0";
    ctx.beginPath();
    ctx.arc(x, y, r * 0.34, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(x, y, r * 0.16, 0, Math.PI * 2);
    ctx.fill();
  });
  const dots: [number, number][] = [
    [40, 48],
    [92, 38],
    [112, 88],
    [28, 98],
  ];
  dots.forEach(([x, y]) => {
    ctx.fillStyle = dark + "cc";
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawBotanicalMotif(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  t: ThemeDef,
) {
  const configs: [number, number, number, number][] = [
    [0, 0, 0, 1.5],
    [W, 0, Math.PI / 2, 1.4],
    [0, H, -Math.PI / 2, 1.4],
    [W, H, Math.PI, 1.5],
    [W * 0.45, 0, 0.1, 0.7],
    [W * 0.55, H, Math.PI + 0.1, 0.7],
    [0, H * 0.38, -Math.PI / 3, 0.65],
    [W, H * 0.62, (Math.PI * 2) / 3, 0.65],
  ];
  configs.forEach(([x, y, rot, sc]) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.scale(sc, sc);
    drawLeafFan(ctx, t.accent, t.dark);
    ctx.restore();
  });
}

function drawLeafFan(
  ctx: CanvasRenderingContext2D,
  accent: string,
  dark: string,
) {
  const leaves = [
    { cx: 55, cy: 55, rx: 85, ry: 22, a: -0.25 },
    { cx: 38, cy: 88, rx: 72, ry: 19, a: 0.38 },
    { cx: 80, cy: 78, rx: 95, ry: 21, a: -0.75 },
    { cx: 28, cy: 48, rx: 62, ry: 17, a: 0.08 },
    { cx: 72, cy: 112, rx: 68, ry: 17, a: 0.55 },
    { cx: 95, cy: 42, rx: 58, ry: 15, a: -1.1 },
  ];
  leaves.forEach(({ cx, cy, rx, ry, a }) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(a);
    const g = ctx.createLinearGradient(-rx, 0, rx, 0);
    g.addColorStop(0, accent + "cc");
    g.addColorStop(0.45, dark + "ee");
    g.addColorStop(1, accent + "88");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(-rx, 0);
    ctx.bezierCurveTo(-rx / 2, -ry * 1.6, rx / 2, -ry * 1.6, rx, 0);
    ctx.bezierCurveTo(rx / 2, ry * 1.6, -rx / 2, ry * 1.6, -rx, 0);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-rx + 12, 0);
    ctx.lineTo(rx - 12, 0);
    ctx.stroke();
    ctx.restore();
  });
}

function drawGoldMotif(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  t: ThemeDef,
) {
  const layers = [
    { off: 30, lw: 1, dash: [12, 8] },
    { off: 55, lw: 2, dash: [] },
    { off: 72, lw: 1, dash: [6, 6] },
  ];
  layers.forEach(({ off, lw, dash }) => {
    ctx.strokeStyle = t.accent + "88";
    ctx.lineWidth = lw;
    ctx.setLineDash(dash);
    rrect(ctx, off, off, W - off * 2, H - off * 2, 20);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  const corners: [number, number, number][] = [
    [0, 0, 0],
    [W, 0, Math.PI / 2],
    [0, H, -Math.PI / 2],
    [W, H, Math.PI],
  ];

  corners.forEach(([x, y, rot]) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    drawGoldCorner(ctx, t.accent, t.dark);
    ctx.restore();
  });

  const pts: [number, number][] = [
    [W / 2, 65],
    [W / 2, H - 65],
    [W / 4, 90],
    [(3 * W) / 4, 90],
    [W / 4, H - 90],
    [(3 * W) / 4, H - 90],
  ];
  pts.forEach(([x, y], i) => {
    i % 2 === 0
      ? drawStar(ctx, x, y, 16, 5, t.accent, t.dark)
      : drawDiamond(ctx, x, y, 18, t.accent + "cc", t.dark);
  });
}

function drawGoldCorner(
  ctx: CanvasRenderingContext2D,
  accent: string,
  dark: string,
) {
  for (let i = 0; i < 7; i++) {
    const a = (i / 6) * (Math.PI / 2),
      len = 90 + i * 22;
    ctx.strokeStyle = i % 2 === 0 ? accent : dark + "88";
    ctx.lineWidth = i === 3 ? 3 : 1.5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
    ctx.stroke();
  }
  const points: [number, number][] = [
    [45, 45],
    [78, 22],
    [22, 78],
  ];

  points.forEach(([x, y]) => {
    drawDiamond(ctx, x, y, 12, accent + "cc", dark);
  });

  ctx.strokeStyle = accent + "aa";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(0, 0, 100, 0, Math.PI / 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 78, 0, Math.PI / 2);
  ctx.stroke();
}
function drawDiamond(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  s: number,
  fill: string,
  stroke: string,
) {
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x, y - s);
  ctx.lineTo(x + s * 0.6, y);
  ctx.lineTo(x, y + s);
  ctx.lineTo(x - s * 0.6, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  pts: number,
  fill: string,
  stroke: string,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  for (let i = 0; i < pts * 2; i++) {
    const a = (i / (pts * 2)) * Math.PI * 2 - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.38;
    i === 0
      ? ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad)
      : ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
}

function drawKawaiiMotif(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  t: ThemeDef,
) {
  const corners: [number, number, number][] = [
    [0, 0, 0],
    [W, 0, Math.PI / 2],
    [0, H, -Math.PI / 2],
    [W, H, Math.PI],
  ];

  corners.forEach(([x, y, rot]) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    drawKawaiiCorner(ctx, t.accent, t.dark);
    ctx.restore();
  });
  const deco = [
    { x: W / 2, y: 52, type: "heart", sz: 28 },
    { x: W / 2, y: H - 52, type: "heart", sz: 28 },
    { x: 58, y: H / 2, type: "star", sz: 22 },
    { x: W - 58, y: H / 2, type: "star", sz: 22 },
    { x: W / 3, y: 85, type: "bow" },
    { x: (2 * W) / 3, y: 85, type: "bow" },
    { x: W / 3, y: H - 85, type: "bow" },
    { x: (2 * W) / 3, y: H - 85, type: "bow" },
  ];
  deco.forEach(({ x, y, type, sz = 20 }) => {
    ctx.save();
    ctx.translate(x, y);
    if (type === "heart") drawHeart(ctx, sz, t.accent);
    else if (type === "star")
      drawStar(ctx, 0, 0, sz, 4, t.accent + "cc", t.dark);
    else drawBow(ctx, t.accent, t.dark);
    ctx.restore();
  });
}

function drawKawaiiCorner(
  ctx: CanvasRenderingContext2D,
  accent: string,
  dark: string,
) {
  ctx.fillStyle = accent + "44";
  ctx.beginPath();
  ctx.arc(45, 45, 58, 0, Math.PI * 2);
  ctx.arc(85, 28, 44, 0, Math.PI * 2);
  ctx.arc(108, 68, 38, 0, Math.PI * 2);
  ctx.fill();

  // ⭐ FIX 1 — kasih type tuple
  const stars: [number, number, number][] = [
    [32, 30, 16],
    [82, 18, 13],
    [110, 58, 11],
  ];

  stars.forEach(([x, y, r]) => {
    drawStar(ctx, x, y, r, 4, accent + "dd", dark);
  });

  // ⭐ FIX 2 — kasih type tuple
  const dots: [number, number][] = [
    [60, 80],
    [92, 90],
    [25, 72],
  ];

  dots.forEach(([x, y]) => {
    ctx.fillStyle = dark + "99";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}
function drawHeart(ctx: CanvasRenderingContext2D, size: number, color: string) {
  ctx.fillStyle = color + "e0";
  ctx.beginPath();
  ctx.moveTo(0, size * 0.32);
  ctx.bezierCurveTo(
    -size * 0.55,
    -size * 0.28,
    -size,
    size * 0.12,
    -size * 0.48,
    size * 0.62,
  );
  ctx.lineTo(0, size);
  ctx.lineTo(size * 0.48, size * 0.62);
  ctx.bezierCurveTo(
    size,
    size * 0.12,
    size * 0.55,
    -size * 0.28,
    0,
    size * 0.32,
  );
  ctx.fill();
}

function drawBow(ctx: CanvasRenderingContext2D, accent: string, dark: string) {
  ctx.fillStyle = accent + "dd";
  ctx.strokeStyle = dark;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(-22, 0, 24, 13, -0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(22, 0, 24, 13, 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = dark + "cc";
  ctx.beginPath();
  ctx.ellipse(0, 0, 9, 9, 0, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Core: render frame ke canvas.
 * @param canvas  target canvas
 * @param themeId tema yang dipilih
 * @param gridId  grid yang dipilih
 * @param photos  array data-URL foto user (kosong = tampilkan placeholder)
 */

function renderFrame(
  canvas: HTMLCanvasElement,
  themeId: string,
  gridId: string,
  photos: string[] = [],
) {
  const W = 1080,
    H = 1920;
  canvas.width = W;
  canvas.height = H;

  const ctx = canvas.getContext("2d")!;
  const t = THEMES[themeId as ThemeKey] ?? THEMES.floral;
  const g = gridOptions.find((x) => x.id === gridId);

  if (!g) {
    console.warn("Grid tidak ditemukan:", gridId);
    return; // WAJIB supaya TypeScript narrow type
  }

  // Background
  ctx.fillStyle = t.colors[0] ?? "#000000";
  ctx.fillRect(0, 0, W, H);

  // Noise texture
  for (let i = 0; i < 600; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.045})`;
    ctx.beginPath();
    ctx.arc(
      Math.random() * W,
      Math.random() * H,
      Math.random() * 2.5 + 0.5,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  // Motif
  ctx.save();
  if (themeId === "floral") drawFloralMotif(ctx, W, H, t);
  if (themeId === "botanical") drawBotanicalMotif(ctx, W, H, t);
  if (themeId === "gold") drawGoldMotif(ctx, W, H, t);
  if (themeId === "kawaii") drawKawaiiMotif(ctx, W, H, t);
  ctx.restore();

  // Photo slot layout
  const PAD = 55,
    BORD = 85,
    GAP = 18,
    HEAD = 130,
    FOOT = 130;
  const aX = PAD + BORD,
    aY = PAD + BORD + HEAD;
  const aW = W - 2 * (PAD + BORD),
    aH = H - 2 * (PAD + BORD) - HEAD - FOOT;
  const cW = (aW - (g.cols - 1) * GAP) / g.cols;
  const cH = (aH - (g.rows - 1) * GAP) / g.rows;

  for (let r = 0; r < g.rows; r++) {
    for (let c = 0; c < g.cols; c++) {
      const x = aX + c * (cW + GAP),
        y = aY + r * (cH + GAP);

      // Shadow + card
      ctx.shadowColor = "rgba(0,0,0,0.13)";
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;
      ctx.fillStyle = "rgba(255,255,255,0.96)";
      rrect(ctx, x, y, cW, cH, 22);
      ctx.fill();
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      // Photo or placeholder
      const photoIdx = r * g.cols + c;

      // Pastikan selalu string
      const baseColor: string = t.colors[0] ?? "#000000";

      // Cek dengan boolean conversion agar jelas
      const hasPhoto = Boolean(photos[photoIdx]);

      ctx.fillStyle = hasPhoto
        ? `${baseColor}00` // transparan kalau ada foto
        : `${baseColor}aa`; // placeholder kalau kosong

      rrect(ctx, x + 14, y + 14, cW - 28, cH - 28, 14);
      ctx.fill();

      // Dashed inner border
      ctx.strokeStyle = t.accent + "55";
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 7]);
      rrect(ctx, x + 14, y + 14, cW - 28, cH - 28, 14);
      ctx.stroke();
      ctx.setLineDash([]);

      // Camera icon placeholder (hanya saat tidak ada foto)
      if (!photos[photoIdx]) {
        const cx2 = x + cW / 2,
          cy2 = y + cH / 2,
          cs = Math.min(cW, cH) * 0.13;
        ctx.fillStyle = t.dark + "35";
        rrect(
          ctx,
          cx2 - cs * 1.6,
          cy2 - cs * 1.0,
          cs * 3.2,
          cs * 2.2,
          cs * 0.3,
        );
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx2, cy2 + cs * 0.05, cs * 0.7, 0, Math.PI * 2);
        ctx.fill();
        rrect(
          ctx,
          cx2 - cs * 0.6,
          cy2 - cs * 1.0,
          cs * 1.2,
          cs * 0.4,
          cs * 0.1,
        );
        ctx.fill();
      }

      // Outer glow border
      ctx.strokeStyle = t.accent + "44";
      ctx.lineWidth = 2.5;
      rrect(ctx, x + 5, y + 5, cW - 10, cH - 10, 24);
      ctx.stroke();
    }
  }

  // Watermark
  ctx.fillStyle = t.dark + "90";
  ctx.font = `600 32px Georgia, serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("EasyPoth", W / 2, H - PAD - BORD * 0.5);
  ctx.strokeStyle = t.accent + "88";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 90, H - PAD - BORD * 0.5 + 22);
  ctx.lineTo(W / 2 + 90, H - PAD - BORD * 0.5 + 22);
  ctx.stroke();
  [-100, 100].forEach((dx) => {
    ctx.fillStyle = t.accent;
    ctx.beginPath();
    ctx.arc(W / 2 + dx, H - PAD - BORD * 0.5 + 22, 3.5, 0, Math.PI * 2);
    ctx.fill();
  });
}

// ─── Mini preview renderer ─────────────────────────────────────────────────────

function renderMiniPreviews() {
  nextTick(() => {
    gridOptions.forEach((grid) => {
      const canvas = miniCanvasMap.value[grid.id];
      if (!canvas) return;
      // Render pada ukuran kecil (200×267) untuk performa
      const W = 200,
        H = 267;
      const offscreen = document.createElement("canvas");
      renderFrame(offscreen, selectedTheme.value, grid.id, []);
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(offscreen, 0, 0, W, H);
    });
  });
}

// Re-render mini previews saat tema berubah
watch(selectedTheme, renderMiniPreviews);
watch(miniCanvasMap, renderMiniPreviews, { deep: true });

// ─── frameLayouts — dibangun secara dinamis ────────────────────────────────────

function getFrameLayout(gridId: string) {
  const W = 1080,
    H = 1920;
  const PAD = 55,
    BORD = 85,
    GAP = 18,
    HEAD = 130,
    FOOT = 130;
  const g = gridOptions.find((x) => x.id === gridId)!;
  const aX = PAD + BORD,
    aY = PAD + BORD + HEAD;
  const aW = W - 2 * (PAD + BORD),
    aH = H - 2 * (PAD + BORD) - HEAD - FOOT;
  const cW = (aW - (g.cols - 1) * GAP) / g.cols;
  const cH = (aH - (g.rows - 1) * GAP) / g.rows;

  const positions: { x: number; y: number; w: number; h: number }[] = [];
  for (let r = 0; r < g.rows; r++) {
    for (let c = 0; c < g.cols; c++) {
      positions.push({
        x: aX + c * (cW + GAP) + 14,
        y: aY + r * (cH + GAP) + 14,
        w: cW - 28,
        h: cH - 28,
      });
    }
  }
  return { width: W, height: H, positions };
}

// ─── Modal helpers ─────────────────────────────────────────────────────────────
function openFrameModal() {
  frameModalRef.value?.showModal();
  // render previews setelah modal terbuka
  setTimeout(renderMiniPreviews, 80);
}

// ─── Camera ────────────────────────────────────────────────────────────────────
async function startCamera() {
  if (!activeGrid.value) return;
  capturedPhotos.value = [];
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: isFrontCamera.value ? "user" : "environment",
        aspectRatio: 3 / 4,
      },
      audio: false,
    });
    (frameModalRef.value as any)._stream = stream;
    frameModalRef.value?.close();
    cameraModalRef.value?.showModal();
    await new Promise((r) => setTimeout(r, 100));
    if (videoEl.value) videoEl.value.srcObject = stream;
  } catch (e) {
    alert(
      "Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.",
    );
    console.error(e);
  }
}

function stopCamera() {
  const stream = (frameModalRef.value as any)?._stream as
    | MediaStream
    | undefined;
  stream?.getTracks().forEach((t) => t.stop());
  if (videoEl.value?.srcObject) {
    (videoEl.value.srcObject as MediaStream)
      .getTracks()
      .forEach((t) => t.stop());
    videoEl.value.srcObject = null;
  }
  cameraModalRef.value?.close();
  frameModalRef.value?.showModal();
  setTimeout(renderMiniPreviews, 80);
}

async function flipCamera() {
  isFrontCamera.value = !isFrontCamera.value;
  if (videoEl.value?.srcObject) {
    const oldStream = videoEl.value.srcObject as MediaStream;
    oldStream.getTracks().forEach((t) => t.stop());
    const newStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: isFrontCamera.value ? "user" : "environment",
        aspectRatio: 3 / 4,
      },
      audio: false,
    });
    videoEl.value.srcObject = newStream;
  }
}

function toggleTimer() {
  const options = [0, 3, 10];
  const idx = options.indexOf(timerSeconds.value);
  timerSeconds.value = options[(idx + 1) % options.length] ?? 0;
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
    (videoEl.value?.srcObject as MediaStream)
      ?.getTracks()
      .forEach((t) => t.stop());
    if (videoEl.value) videoEl.value.srcObject = null;
    cameraModalRef.value?.close();
    previewModalRef.value?.showModal();
  }
}

// ─── Download ──────────────────────────────────────────────────────────────────
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  const ratio = Math.max(w / img.width, h / img.height);
  const nw = img.width * ratio,
    nh = img.height * ratio;
  const dx = x - (nw - w) / 2,
    dy = y - (nh - h) / 2;
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  ctx.drawImage(img, dx, dy, nw, nh);
  ctx.restore();
}

async function downloadResult() {
  if (!canvasEl.value || !activeGrid.value) return;

  const layout = getFrameLayout(activeGrid.value.id);
  const canvas = canvasEl.value;
  canvas.width = layout.width;
  canvas.height = layout.height;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Render frame motif (tanpa foto dulu)
  renderFrame(canvas, selectedTheme.value, activeGrid.value.id, []);

  // 2. Gambar foto user di atas frame
  for (let i = 0; i < capturedPhotos.value.length; i++) {
    const photo = capturedPhotos.value[i];
    if (!photo) continue; // 🔥 penting

    const pos = layout.positions[i];
    if (!pos) continue;

    await new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        drawCover(ctx, img, pos.x, pos.y, pos.w, pos.h);
        resolve();
      };

      img.src = photo; // ✅ sekarang pasti string
    });
  }

  // 3. Re-render motif overlay (agar motif di atas foto)
  // Kita perlu re-draw hanya layer motif, bukan slot
  // Solusi: composite dengan offscreen yang hanya motif
  const motifCanvas = document.createElement("canvas");
  motifCanvas.width = layout.width;
  motifCanvas.height = layout.height;
  const mctx = motifCanvas.getContext("2d")!;
  const t = THEMES[selectedTheme.value as ThemeKey] ?? THEMES.floral;
  if (selectedTheme.value === "floral")
    drawFloralMotif(mctx, layout.width, layout.height, t);
  if (selectedTheme.value === "botanical")
    drawBotanicalMotif(mctx, layout.width, layout.height, t);
  if (selectedTheme.value === "gold")
    drawGoldMotif(mctx, layout.width, layout.height, t);
  if (selectedTheme.value === "kawaii")
    drawKawaiiMotif(mctx, layout.width, layout.height, t);
  ctx.drawImage(motifCanvas, 0, 0);

  // 4. Re-draw watermark di atas segalanya
  const PAD = 55,
    BORD = 85;
  ctx.fillStyle = t.dark + "90";
  ctx.font = "600 32px Georgia,serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("EasyPoth", layout.width / 2, layout.height - PAD - BORD * 0.5);

  // 5. Download
  const link = document.createElement("a");
  link.download = `easypoth-${selectedTheme.value}-${activeGrid.value.id}-${Date.now()}.png`;
  link.href = canvas.toDataURL("image/png");
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
