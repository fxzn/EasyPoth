<template>
  <div class="pt-4 px- md:px- xl:px-0">
    <HeroMobileLayout
      :stats="heroStats"
      :grid-labels="heroGridLabelsMobile"
      :hero-image="heroImage"
      @open-frame="openFrameModal"
    />
  </div>

  <HeroDesktopLayout
    :stats="heroStats"
    :grid-labels="heroGridLabelsDesktop"
    :hero-image="heroImage"
    @open-frame="openFrameModal"
  />

  <FrameSelectionModal
    :is-open="isFrameModalOpen"
    :selected-grid="selectedGrid"
    :grid-options="gridOptions"
    @update:selected-grid="selectedGrid = $event"
    @start="startCamera"
    @close="isFrameModalOpen = false"
  />

  <PreviewFrameBrowseModal
    :is-open="isPreviewFrameModalOpen"
    :selected-grid="selectedGrid"
    :selected-template-url="
      selectedTemplateMetaByGrid[selectedGrid]?.url ?? null
    "
    @close="closePreviewFrameModal"
    @apply="applyPreviewFrameSelection"
  />

  <dialog ref="cameraModalRef" class="modal modal-middle">
    <div
      class="modal-box w-[360px] max-w-[92vw] p-0 rounded-[18px] bg-[#0B0B12] overflow-hidden shadow-2xl"
    >
      <div class="relative aspect-[9/16] bg-black">
        <video
          ref="videoEl"
          autoplay
          playsinline
          muted
          class="absolute inset-0 w-full h-full object-cover"
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

        <div
          class="absolute top-0 inset-x-0 px-5 pt-4 pb-12 bg-gradient-to-b from-black/70 to-transparent"
        >
          <div class="flex items-center justify-between text-white">
            <button
              @click="stopCamera"
              class="text-sm font-medium hover:text-white/80 transition-colors"
            >
              ← Kembali
            </button>
            <p class="text-sm font-medium">{{ activeGrid?.id }}</p>
          </div>
        </div>

        <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 scale-150"
          leave-active-class="transition-all duration-200 ease-in"
          leave-to-class="opacity-0 scale-150"
        >
          <div
            v-if="countdown > 0"
            class="absolute inset-0 flex items-center justify-center bg-black/40"
          >
            <span class="text-white text-8xl font-bold tabular-nums">{{
              countdown
            }}</span>
          </div>
        </Transition>

        <Transition
          enter-active-class="transition-opacity duration-75 ease-out"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-300 ease-in"
          leave-to-class="opacity-0"
        >
          <div
            v-if="showFlash"
            class="absolute inset-0 bg-white pointer-events-none"
          ></div>
        </Transition>

        <div
          class="absolute bottom-0 inset-x-0 px-5 pb-5 pt-14 bg-gradient-to-t from-black/70 to-transparent"
        >
          <div class="flex items-center justify-between">
            <button
              @click="toggleTimer"
              class="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-white hover:bg-white/35 transition-colors relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
                />
              </svg>
              <span
                v-if="timerSeconds > 0"
                class="absolute -top-1.5 -right-1.5 bg-[#7C3AED] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
              >
                {{ timerSeconds }}
              </span>
            </button>

            <button
              @click="takePhoto"
              :disabled="isCapturing"
              class="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg active:scale-95 transition-transform disabled:opacity-50"
            >
              <div
                class="w-16 h-16 rounded-full border-[5px] border-gray-300 bg-white"
              ></div>
            </button>

            <button
              @click="openUploadPicker"
              class="px-4 h-10 rounded-full bg-[#7C3AED] text-white text-sm font-medium hover:bg-[#6D28D9] transition-colors"
            >
              Unggah foto
            </button>
          </div>
        </div>
      </div>
    </div>
  </dialog>
  <input
    ref="uploadInputEl"
    type="file"
    accept="image/*"
    class="hidden"
    @change="handleUploadPhoto"
  />

  <dialog ref="previewModalRef" class="modal modal-middle">
    <div
      class="modal-box w-[500px] max-w-[92vw] max-h-[90vh] rounded-[18px] p-5 md:p-6 bg-white shadow-2xl overflow-x-hidden overflow-y-auto"
    >
      <h3
        class="mb-4 text-[24px] leading-[1.05] font-medium tracking-[-0.01em] text-[#0B132B]"
      >
        Lihat hasil foto
      </h3>

      <div class="">
        <div class="relative" :style="getPreviewContainerStyle()">
          <template v-if="activeGrid">
            <img
              v-if="isTemplateOverlayMode && capturedPhotos[0]"
              :src="capturedPhotos[0]"
              class="absolute inset-0 z-0 w-full h-full object-cover"
              alt="hasil foto"
            />

            <div
              v-else
              class="absolute"
              :style="getPreviewPhotoAreaStyle(activeGrid.id)"
            >
              <div
                :class="[
                  'grid w-full h-full',
                  activeGrid.colsClass,
                  activeGrid.rowsClass,
                ]"
                :style="{ gap: getPreviewGap(activeGrid.id) }"
              >
                <div
                  v-for="(photo, i) in capturedPhotos"
                  :key="i"
                  class="overflow-hidden"
                  :style="{ borderRadius: getPreviewPhotoRadius() }"
                >
                  <img :src="photo" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </template>

          <img
            v-if="activeGrid && activeFrameUrl"
            :src="activeFrameUrl"
            class="absolute inset-0 z-10 w-full h-full object-contain pointer-events-none"
            alt="frame"
          />

          <button
            @click="retakeAll"
            class="absolute z-20 right-4 bottom-4 h-10 rounded-full bg-white text-[#101828] inline-flex items-center gap-1.5 px-4 text-sm font-semibold hover:bg-gray-100 transition-colors shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
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
            Ulang
          </button>
        </div>
      </div>

      <div class="mt-4 flex flex-col gap-3">
        <button
          @click="handlePreviewPrimaryAction"
          class="w-full h-14 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:brightness-95 active:scale-[0.995] transition-all"
        >
          {{ previewPrimaryButtonLabel }}
        </button>
        <button
          @click="closeAll"
          class="w-full h-14 rounded-full text-base font-semibold border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 active:scale-[0.995] transition-all"
        >
          Tutup
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import heroImage from "../../assets/images/heroImage.svg";
import frame3x2Template from "../../assets/templates/3x2-frame.png";
import FrameSelectionModal from "./components/FrameSelectionModal.vue";
import HeroDesktopLayout from "./components/HeroDesktopLayout.vue";
import HeroMobileLayout from "./components/HeroMobileLayout.vue";
import PreviewFrameBrowseModal from "./components/PreviewFrameBrowseModal.vue";
import {
  frameSlots,
  gridOptions,
  heroGridLabelsDesktop,
  heroGridLabelsMobile,
  heroStats,
} from "./hero.data";

type PreviewOverlayStyle = {
  top: string;
  left: string;
  width: string;
  height: string;
  gap: string;
};

type TemplatePreviewPreset = {
  match: string;
  aspectRatio: string;
  photoRadius: string;
  slot: PreviewOverlayStyle;
};

type SelectedTemplateMeta = {
  url: string;
  priceLabel: string;
  sourcePath: string | null;
};

const selectedGrid = ref("3x2 Grid");
const capturedPhotos = ref<string[]>([]);
const isFrontCamera = ref(true);
const isCapturing = ref(false);
const countdown = ref(0);
const showFlash = ref(false);
const timerSeconds = ref(3);
const isFrameModalOpen = ref(false);
const isPreviewFrameModalOpen = ref(false);
const selectedTemplateMetaByGrid = ref<Record<string, SelectedTemplateMeta>>(
  {},
);

const activeGrid = computed(
  () => gridOptions.find((g) => g.id === selectedGrid.value) ?? null,
);
const isTemplateOverlayMode = computed(() => {
  if (!activeGrid.value) return false;
  return Boolean(selectedTemplateMetaByGrid.value[activeGrid.value.id]?.url);
});
const currentTemplateMeta = computed(() => {
  if (!activeGrid.value) return null;
  return selectedTemplateMetaByGrid.value[activeGrid.value.id] ?? null;
});
const hasSelectedTemplate = computed(() =>
  Boolean(currentTemplateMeta.value?.url),
);
const isCurrentFramePaid = computed(() => {
  const price = currentTemplateMeta.value?.priceLabel ?? "Gratis";
  return !/gratis/i.test(price);
});
const previewPrimaryButtonLabel = computed(() => {
  if (!hasSelectedTemplate.value) return "Pilih frame";
  return isCurrentFramePaid.value ? "Lanjut ke pembayaran" : "Unduh foto";
});

const cameraModalRef = ref<HTMLDialogElement | null>(null);
const previewModalRef = ref<HTMLDialogElement | null>(null);
const videoEl = ref<HTMLVideoElement | null>(null);
const uploadInputEl = ref<HTMLInputElement | null>(null);
let stream: MediaStream | null = null;

const templatePreviewPresets: TemplatePreviewPreset[] = [
  {
    match: "/potrait1x1/",
    aspectRatio: "9 / 16",
    photoRadius: "22px",
    slot: {
      top: "5.2%", // was 6.3%
      left: "9.24%", // was 9.8%
      width: "81.42%", // was 80.4%
      height: "85.5%", // was 79.2% ← INI PENYEBAB UTAMA
      gap: "0",
    },
  },
];

function getTemplatePreviewPreset() {
  const sourcePath = currentTemplateMeta.value?.sourcePath ?? "";
  if (!activeFrameUrl.value && !sourcePath) return null;
  return (
    templatePreviewPresets.find(
      (preset) =>
        (sourcePath && sourcePath.includes(preset.match)) ||
        (!!activeFrameUrl.value && activeFrameUrl.value.includes(preset.match)),
    ) ?? null
  );
}

function getFrameUrl(gridId: string): string | null {
  const pickedTemplate = selectedTemplateMetaByGrid.value[gridId]?.url;
  if (pickedTemplate) return pickedTemplate;

  const frameMap: Record<string, string | null> = {
    "1x1 Grid": null,
    "2x2 Grid": null,
    "3x1 Grid": null,
    "3x2 Grid": frame3x2Template,
  };
  return frameMap[gridId] ?? null;
}

function getPreviewOverlayStyle(gridId: string): PreviewOverlayStyle {
  const preset = getTemplatePreviewPreset();
  if (preset) return preset.slot;

  const defaultSlot: PreviewOverlayStyle = {
    top: "3.5%",
    left: "4%",
    width: "68%",
    height: "84%",
    gap: "1.5%",
  };
  const s = frameSlots[gridId] ?? frameSlots["3x2 Grid"];
  return {
    top: s?.top ?? defaultSlot.top,
    left: s?.left ?? defaultSlot.left,
    width: s?.width ?? defaultSlot.width,
    height: s?.height ?? defaultSlot.height,
    gap: s?.gap ?? defaultSlot.gap,
  };
}

function getPreviewPhotoAreaStyle(gridId: string): Record<string, string> {
  if (!activeFrameUrl.value) {
    return {
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    };
  }

  const s: PreviewOverlayStyle = getPreviewOverlayStyle(gridId);
  return {
    top: s.top,
    left: s.left,
    width: s.width,
    height: s.height,
  };
}

function getPreviewGap(gridId: string): string {
  if (!activeFrameUrl.value) return "0";
  return getPreviewOverlayStyle(gridId).gap;
}

function getPreviewContainerStyle(): Record<string, string> {
  const preset = getTemplatePreviewPreset();
  if (preset) return { aspectRatio: preset.aspectRatio };
  return { aspectRatio: "3 / 4" };
}

function getPreviewPhotoRadius(): string {
  if (!activeFrameUrl.value) return "0px";
  const preset = getTemplatePreviewPreset();
  if (preset) return preset.photoRadius;
  return "6px";
}

const activeFrameUrl = computed(() => {
  if (!activeGrid.value) return null;
  return getFrameUrl(activeGrid.value.id);
});

function openFrameModal() {
  // Mulai ulang flow dari awal saat user membuka flow utama dari hero section
  selectedTemplateMetaByGrid.value = {};
  capturedPhotos.value = [];
  isPreviewFrameModalOpen.value = false;
  isFrameModalOpen.value = true;
}

async function startCamera() {
  if (!activeGrid.value) return;
  capturedPhotos.value = [];

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: isFrontCamera.value ? "user" : "environment",
        aspectRatio: 3 / 4,
      },
      audio: false,
    });

    isFrameModalOpen.value = false;
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
  stream?.getTracks().forEach((t) => t.stop());
  stream = null;
  cameraModalRef.value?.close();
  isFrameModalOpen.value = true;
}

function openUploadPicker() {
  uploadInputEl.value?.click();
}

async function handleUploadPhoto(event: Event) {
  if (!activeGrid.value) return;
  const input = event.target as HTMLInputElement | null;
  const file = input?.files?.[0];
  if (!file) return;

  const dataUrl = await readFileAsDataUrl(file);
  capturedPhotos.value.push(dataUrl);
  if (input) input.value = "";
  await finalizeCaptureIfComplete();
}

function toggleTimer() {
  const options: number[] = [0, 3, 10];
  const idx = options.findIndex((value) => value === timerSeconds.value);
  const nextIdx = idx >= 0 ? (idx + 1) % options.length : 0;
  timerSeconds.value = options[nextIdx] ?? options[0] ?? 0;
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
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    isCapturing.value = false;
    return;
  }

  if (isFrontCamera.value) {
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(video, 0, 0);

  capturedPhotos.value.push(canvas.toDataURL("image/jpeg", 0.92));
  isCapturing.value = false;
  await finalizeCaptureIfComplete();
}

async function finalizeCaptureIfComplete() {
  if (!activeGrid.value) return;
  if (capturedPhotos.value.length >= activeGrid.value.cells) {
    await new Promise((r) => setTimeout(r, 250));
    stream?.getTracks().forEach((t) => t.stop());
    stream = null;
    cameraModalRef.value?.close();
    previewModalRef.value?.showModal();
  }
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () =>
      reject(reader.error ?? new Error("Gagal membaca file"));
    reader.readAsDataURL(file);
  });
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

function openFrameFromPreview() {
  previewModalRef.value?.close();
  isPreviewFrameModalOpen.value = true;
}

function closePreviewFrameModal() {
  isPreviewFrameModalOpen.value = false;
  previewModalRef.value?.showModal();
}

function applyPreviewFrameSelection(payload: {
  templateUrl: string | null;
  priceLabel: string;
  sourcePath: string | null;
}) {
  if (payload.templateUrl) {
    selectedTemplateMetaByGrid.value[selectedGrid.value] = {
      url: payload.templateUrl,
      priceLabel: payload.priceLabel,
      sourcePath: payload.sourcePath,
    };
  }
  isPreviewFrameModalOpen.value = false;
  previewModalRef.value?.showModal();
}

function handlePreviewPrimaryAction() {
  if (!activeGrid.value || capturedPhotos.value.length === 0) return;
  if (!hasSelectedTemplate.value) {
    openFrameFromPreview();
    return;
  }
  if (isCurrentFramePaid.value) {
    alert(
      "Lanjut ke pembayaran (sementara belum terhubung ke halaman payment).",
    );
    return;
  }
  void downloadPreviewResult();
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Gagal memuat gambar: ${src}`));
    img.src = src;
  });
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: CanvasImageSource,
  x: number,
  y: number,
  w: number,
  h: number,
  sw: number,
  sh: number,
) {
  const ratio = Math.max(w / sw, h / sh);
  const nw = sw * ratio;
  const nh = sh * ratio;
  const dx = x + (w - nw) / 2;
  const dy = y + (h - nh) / 2;
  ctx.drawImage(img, dx, dy, nw, nh);
}

async function downloadPreviewResult() {
  if (!activeGrid.value) return;
  const firstPhoto = capturedPhotos.value[0];
  if (!firstPhoto) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  try {
    const photoImg = await loadImage(firstPhoto);

    if (activeFrameUrl.value) {
      const frameImg = await loadImage(activeFrameUrl.value);
      canvas.width = frameImg.naturalWidth;
      canvas.height = frameImg.naturalHeight;

      if (isTemplateOverlayMode.value) {
        drawCover(
          ctx,
          photoImg,
          0,
          0,
          canvas.width,
          canvas.height,
          photoImg.naturalWidth,
          photoImg.naturalHeight,
        );
      } else {
        const slot = getPreviewOverlayStyle(activeGrid.value.id);
        const sx = (parseFloat(slot.left) / 100) * canvas.width;
        const sy = (parseFloat(slot.top) / 100) * canvas.height;
        const sw = (parseFloat(slot.width) / 100) * canvas.width;
        const sh = (parseFloat(slot.height) / 100) * canvas.height;
        drawCover(
          ctx,
          photoImg,
          sx,
          sy,
          sw,
          sh,
          photoImg.naturalWidth,
          photoImg.naturalHeight,
        );
      }

      ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
    } else {
      canvas.width = photoImg.naturalWidth;
      canvas.height = photoImg.naturalHeight;
      ctx.drawImage(photoImg, 0, 0, canvas.width, canvas.height);
    }

    const link = document.createElement("a");
    link.download = `easypoth-${activeGrid.value.id.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.jpg`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (e) {
    console.error(e);
    alert("Gagal mengunduh foto. Coba lagi.");
  }
}
</script>
