"use client";

import { useState } from "react";

import FiltersForm from "@/components/FiltersForm/FiltersForm";
import CampersList from "@/components/CampersList/CampersList";

import {
  EMPTY_FILTERS,
  type CampersFilters,
} from "@/types/camper";

import css from "./CatalogView.module.css";

export default function CatalogView() {
  const [filters, setFilters] = useState<CampersFilters>({
    ...EMPTY_FILTERS,
  });

  const [resetKey, setResetKey] = useState(0);

  const handleSearch = (newFilters: CampersFilters) => {
    setFilters({ ...newFilters });
  };

  const handleClear = () => {
    setFilters({ ...EMPTY_FILTERS });
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className={css.wrapper}>
      <FiltersForm
        key={resetKey}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      <CampersList
        filters={filters}
        onClear={handleClear}
      />
    </div>
  );
}
