
import Image from "next/image";
import css from "./EmptyState.module.css";

interface EmptyStateProps {
  onClear: () => void;
}

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div className={css.imageWrapper}>
          <Image
            src="/images/empty-camper.svg"
            alt="Camper in the mountains"
            width={420}
            height={260}
            className={css.image}
            priority
          />
        </div>

        <h2 className={css.title}>No campers found</h2>

        <p className={css.text}>
          We couldn&apos;t find any campers that match your filters.
          <br />
          Try adjusting your search or clearing some filters.
        </p>

        <div className={css.actions}>
          <button
            type="button"
            className={css.clearButton}
            onClick={onClear}
          >
            <span aria-hidden="true">×</span>
            Clear filters
          </button>

          <button
            type="button"
            className={css.viewButton}
            onClick={onClear}
          >
            View all campers
          </button>
        </div>
      </div>
    </div>
  );
}
