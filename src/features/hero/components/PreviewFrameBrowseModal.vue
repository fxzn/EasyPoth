<template>
  <dialog ref="dialogRef" class="modal modal-middle" @close="emit('close')">
    <div class="modal-box w-[390px] max-w-[92vw] max-h-[88vh] p-0 rounded-[14px] bg-white shadow-2xl overflow-hidden">
      <div class="px-5 pt-5 pb-4 border-b border-gray-200">
        <div class="flex items-start justify-between gap-3">
          <h3 class="text-[24px] leading-none font-medium text-[#1F2937]">Pilih frame</h3>
          <label class="w-[180px] pt-1">
            <div class="flex items-center gap-2 border-b border-gray-600 pb-1">
              <input
                id="frame-search-input"
                v-model="searchQuery"
                type="text"
                name="frame_search"
                placeholder="CARI DISINI"
                class="w-full bg-transparent text-[12px] uppercase tracking-wide text-gray-800 placeholder:text-gray-800/70 focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.35-5.15a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
              </svg>
            </div>
          </label>
        </div>
      </div>

      <div class="px-5 py-4 overflow-y-auto max-h-[60vh]">
        <div v-if="pagedCards.length > 0" class="grid grid-cols-2 gap-x-3 gap-y-4">
          <button
            v-for="item in pagedCards"
            :key="item.key"
            class="text-left group"
            @click="selectTemplate(item.templateUrl ?? null, item.price, item.sourcePath ?? null)"
          >
            <div class="mb-1.5">
              <p class="text-xs text-gray-500 flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-gray-200 inline-block"></span>
                {{ item.author }}
              </p>
              <p class="text-[13px] leading-tight font-semibold text-gray-900 truncate">{{ item.title }}</p>
              <p class="text-[13px] leading-tight text-gray-800">{{ item.price }}</p>
            </div>
            <div
              :class="[
                getFrameCardAspectClass(),
                'rounded-[10px] overflow-hidden border transition-all bg-[#F7F7F8]',
                localSelectedTemplateUrl === item.templateUrl
                  ? 'border-[#8B5CF6] ring-2 ring-[#8B5CF6]/20'
                  : 'border-gray-200 group-hover:border-gray-300',
              ]"
            >
              <img :src="item.thumbnail" :alt="item.title" class="w-full h-full object-contain" />
            </div>
          </button>
        </div>
        <div v-else class="h-40 rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-sm text-gray-500">
          Template tidak ditemukan.
        </div>
      </div>

      <div class="px-5 pb-5 pt-3 border-t border-gray-200 flex items-center justify-between">
        <button
          @click="emit('close')"
          class="btn btn-sm h-9 min-h-0 rounded-full px-6 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 shadow-none"
        >
          Kembali
        </button>

        <div class="flex items-center gap-2">
          <button
            @click="goPrevPage"
            :disabled="isFirstPage"
            :class="[
              'group btn btn-sm btn-circle h-9 min-h-0 w-9 border transition-all duration-200 shadow-none',
              isFirstPage
                ? 'border-gray-300 bg-white text-gray-700 cursor-not-allowed'
                : 'border-[#ebe5f6] bg-[#ebe5f6] text-[#7C3AED] hover:bg-[#ebe5f6] hover:border-[#ebe5f6]',
            ]"
          >
            <svg class="w-5 h-5 md:w-[23px] md:h-[23px]" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                :class="[
                  'transition-colors duration-200',
                  isFirstPage ? 'fill-[#232323]' : 'fill-[#7C3AED]',
                ]"
                d="M21.0835 12.4584L21.0836 10.5418H5.58544L9.37058 6.75665L8.0153 5.40137L1.9165 11.5002L8.0153 17.599L9.37058 16.2436L5.58539 12.4585L21.0835 12.4584Z"
              />
            </svg>
          </button>
          <button
            @click="goNextPage"
            :disabled="isLastPage"
            :class="[
              'group btn btn-sm btn-circle h-9 min-h-0 w-9 border transition-all duration-200 shadow-none',
              isLastPage
                ? 'border-gray-300 bg-white text-gray-700 cursor-not-allowed'
                : 'border-[#ebe5f6] bg-[#ebe5f6] text-[#7C3AED] hover:bg-[#ebe5f6] hover:border-[#ebe5f6]',
            ]"
          >
            <svg class="w-5 h-5 md:w-[23px] md:h-[23px]" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                :class="[
                  'transition-colors duration-200',
                  isLastPage ? 'fill-[#232323]' : 'fill-[#7C3AED]',
                ]"
                d="M1.91664 12.4584L1.9165 10.5418H17.4146L13.6294 6.75665L14.9847 5.40137L21.0836 11.5002L14.9847 17.599L13.6294 16.2436L17.4147 12.4585L1.91664 12.4584Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="modal-backdrop bg-black/50 backdrop-blur-sm" @click="emit('close')"></div>
  </dialog>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  isOpen: boolean;
  selectedGrid: string;
  selectedTemplateUrl: string | null;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (
    e: "apply",
    payload: { templateUrl: string | null; priceLabel: string; sourcePath: string | null },
  ): void;
}>();

const dialogRef = ref<HTMLDialogElement | null>(null);
const searchQuery = ref("");
const localSelectedTemplateUrl = ref<string | null>(null);
const currentPage = ref(1);
const cardsPerPage = 4;

const gridFolderMap: Record<string, string> = {
  "1x1 Grid": "potrait1x1",
  "2x2 Grid": "potrait2x2",
  "3x1 Grid": "potrait3x1",
  "3x2 Grid": "potrait3x2",
};

const templateAssets = import.meta.glob("../../../assets/templates/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function titleFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "Template";
  const raw = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim();
  return raw.length ? raw : "Template";
}

function getPriceLabel(_path: string): string {
  return "Gratis";
}

function getFrameCardAspectClass(): string {
  if (props.selectedGrid === "1x1 Grid") return "aspect-[9/16]";
  return "aspect-[3/4]";
}

const cards = computed(() => {
  const folder = gridFolderMap[props.selectedGrid];
  const templates = Object.entries(templateAssets)
    .filter(([path]) => (folder ? path.includes(`/${folder}/`) : false))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, thumbnail], idx) => ({
      key: `${props.selectedGrid}-${idx}`,
      author: "EasyPoth",
      title: titleFromPath(path),
      price: getPriceLabel(path),
      thumbnail,
      templateUrl: thumbnail,
      sourcePath: path,
    }));

  if (templates.length > 0) return templates;

  if (props.selectedGrid === "3x2 Grid") {
    const fallbackPath = Object.keys(templateAssets).find((path) => path.endsWith("/3x2-frame.png"));
    if (fallbackPath) {
          return [
        {
          key: `${props.selectedGrid}-fallback`,
          author: "EasyPoth",
          title: titleFromPath(fallbackPath),
          price: "Gratis",
          thumbnail: templateAssets[fallbackPath],
          templateUrl: templateAssets[fallbackPath],
          sourcePath: fallbackPath,
        },
      ];
    }
  }

  return [];
});

const filteredCards = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase();
  if (!keyword) return cards.value;
  return cards.value.filter((item) => item.title.toLowerCase().includes(keyword) || item.author.toLowerCase().includes(keyword));
});

const totalPages = computed(() => {
  const count = Math.ceil(filteredCards.value.length / cardsPerPage);
  return Math.max(1, count);
});

const isFirstPage = computed(() => currentPage.value <= 1);
const isLastPage = computed(() => currentPage.value >= totalPages.value);

const pagedCards = computed(() => {
  const start = (currentPage.value - 1) * cardsPerPage;
  return filteredCards.value.slice(start, start + cardsPerPage);
});

function selectTemplate(templateUrl: string | null, priceLabel: string, sourcePath: string | null) {
  localSelectedTemplateUrl.value = templateUrl;
  emit("apply", { templateUrl, priceLabel, sourcePath });
}

function goPrevPage() {
  if (isFirstPage.value) return;
  currentPage.value -= 1;
}

function goNextPage() {
  if (isLastPage.value) return;
  currentPage.value += 1;
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
    if (isOpen) {
      searchQuery.value = "";
      currentPage.value = 1;
      localSelectedTemplateUrl.value = props.selectedTemplateUrl ?? cards.value[0]?.templateUrl ?? null;
    }
  },
  { immediate: true },
);

watch(
  () => searchQuery.value,
  () => {
    currentPage.value = 1;
  },
);

watch(
  () => props.selectedGrid,
  () => {
    currentPage.value = 1;
  },
);
</script>
