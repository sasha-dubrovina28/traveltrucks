"use client";

import { useCampersQuery } from "@/hooks/useCampersQuery";
import CamperCard from "@/components/CamperCard/CamperCard";
import EmptyState from "@/components/EmptyState/EmptyState";
import Loader from "@/components/Loader/Loader";
import type { CampersFilters } from "@/types/camper";
import css from "./CampersList.module.css";

interface Props {
  filters: CampersFilters;
  onClear: () => void;
}

export default function CampersList({ filters, onClear }: Props) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCampersQuery(filters);

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (isLoading) return <Loader />;
  if (isError) return <p className={css.error}>Something went wrong. Try again later.</p>;
  if (campers.length === 0) return <EmptyState onClear={onClear} />;

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>

      {hasNextPage && (
        <button
          type="button"
          className={css.loadMore}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}