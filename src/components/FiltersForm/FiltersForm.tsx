"use client";

import { useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { BsMap } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { getFilters } from "@/lib/api";
import {
  EMPTY_FILTERS,
  type CampersFilters,
} from "@/types/camper";

import css from "./FiltersForm.module.css";

interface Props {
  onSearch: (filters: CampersFilters) => void;
  onClear: () => void;
}

const labels: Record<string, string> = {
  alcove: "Alcove",
  panel_van: "Panel Van",
  integrated: "Integrated",
  semi_integrated: "Semi Integrated",
  diesel: "Diesel",
  petrol: "Petrol",
  hybrid: "Hybrid",
  electric: "Electric",
  automatic: "Automatic",
  manual: "Manual",
};

export default function FiltersForm({
  onSearch,
  onClear,
}: Props) {
  const [draft, setDraft] = useState<CampersFilters>({
    ...EMPTY_FILTERS,
  });

  const { data } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });

  const set = (key: keyof CampersFilters, value: string) => {
    setDraft((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch({
      ...draft,
      location: draft.location.trim(),
    });
  };

  const handleClear = () => {
    setDraft({ ...EMPTY_FILTERS });
    onClear();
  };

  const renderGroup = (
    title: string,
    key: "form" | "engine" | "transmission",
    options: string[] = []
  ) => (
    <fieldset className={css.group}>
      <legend className={css.legend}>{title}</legend>

      {options.map((option) => (
        <label key={option} className={css.radio}>
          <input
            type="radio"
            name={key}
            value={option}
            checked={draft[key] === option}
            onChange={() => set(key, option)}
          />

          <span>{labels[option] ?? option}</span>
        </label>
      ))}
    </fieldset>
  );

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.location}>
        Location

        <span className={css.inputWrap}>
          <BsMap aria-hidden="true" />

          <input
            type="text"
            name="location"
            value={draft.location}
            onChange={(event) =>
              set("location", event.target.value)
            }
            placeholder="City"
          />
        </span>
      </label>

      <h2 className={css.title}>Filters</h2>

      {renderGroup("Camper form", "form", data?.forms)}

      {renderGroup("Engine", "engine", data?.engines)}

      {renderGroup(
        "Transmission",
        "transmission",
        data?.transmissions
      )}

      <button type="submit" className={css.search}>
        Search
      </button>

      <button type="button" className={css.clear} onClick={handleClear}>
        <IoCloseOutline size={24} aria-hidden="true" />
        Clear filters
      </button>
    </form>
  );
}
