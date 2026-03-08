import type { GridOption, HeroStat, SlotPercent } from "../../lib/types/hero";

export const heroStats: HeroStat[] = [
  { value: "5.2rb+", label: "Pengguna aktif" },
  { value: "100+", label: "Frame tersedia" },
  { value: "50+", label: "Contributor" },
];

export const gridOptions: GridOption[] = [
  {
    id: "1x1 Grid",
    label: "1×1 Grid",
    cells: 1,
    colsClass: "grid-cols-1",
    rowsClass: "grid-rows-1",
    cols: 1,
    rows: 1,
  },
  {
    id: "2x2 Grid",
    label: "2×2 Grid",
    cells: 4,
    colsClass: "grid-cols-2",
    rowsClass: "grid-rows-2",
    cols: 2,
    rows: 2,
  },
  {
    id: "3x1 Grid",
    label: "3×1 Grid",
    cells: 3,
    colsClass: "grid-cols-1",
    rowsClass: "grid-rows-3",
    cols: 1,
    rows: 3,
  },
  {
    id: "3x2 Grid",
    label: "3×2 Grid",
    cells: 6,
    colsClass: "grid-cols-2",
    rowsClass: "grid-rows-3",
    cols: 2,
    rows: 3,
  },
];

export const heroGridLabelsMobile = [
  "1×1 Grid",
  "2×1 Grid",
  "3×1 Grid",
  "3×2 Grid",
];

export const heroGridLabelsDesktop = [
  "1x1 Grid",
  "2x1 Grid",
  "3x1 Grid",
  "3x2 Grid",
];

export const frameSlots: Record<string, SlotPercent> = {
  "1x1 Grid": { top: "4%", left: "4%", width: "92%", height: "84%", gap: "0%" },
  "2x2 Grid": {
    top: "4%",
    left: "4%",
    width: "92%",
    height: "84%",
    gap: "1.5%",
  },
  "3x1 Grid": {
    top: "4%",
    left: "4%",
    width: "92%",
    height: "84%",
    gap: "1.5%",
  },
  "3x2 Grid": {
    top: "3.5%",
    left: "4%",
    width: "68%",
    height: "84%",
    gap: "1.5%",
  },
};
