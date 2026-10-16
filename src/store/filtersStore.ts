
import { create } from "zustand";
import {
  EMPTY_FILTERS,
  type CampersFilters,
} from "@/types/camper";

interface FiltersState {
  filters: CampersFilters;
  draftFilters: CampersFilters;

  setDraftFilter: (
    key: keyof CampersFilters,
    value: string
  ) => void;

  setDraftFilters: (filters: CampersFilters) => void;
  applyFilters: () => void;
  setFilters: (filters: CampersFilters) => void;
  clearFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  filters: { ...EMPTY_FILTERS },
  draftFilters: { ...EMPTY_FILTERS },

  setDraftFilter: (key, value) =>
    set((state) => ({
      draftFilters: {
        ...state.draftFilters,
        [key]: value,
      },
    })),

  setDraftFilters: (filters) =>
    set({
      draftFilters: { ...filters },
    }),

  applyFilters: () =>
    set((state) => ({
      filters: {
        ...state.draftFilters,
        location: state.draftFilters.location.trim(),
      },
    })),

  setFilters: (filters) =>
    set({
      filters: { ...filters },
      draftFilters: { ...filters },
    }),

  clearFilters: () =>
    set({
      filters: { ...EMPTY_FILTERS },
      draftFilters: { ...EMPTY_FILTERS },
    }),
}));
