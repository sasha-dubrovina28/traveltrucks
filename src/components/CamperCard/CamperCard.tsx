import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { BsMap, BsFuelPump, BsDiagram3, BsCarFront } from "react-icons/bs";
import { formatLabel, formatLocation } from "@/lib/formatters";
import type { CamperListItem } from "@/types/camper";
import css from "./CamperCard.module.css";

export default function CamperCard({ camper }: { camper: CamperListItem }) {
  return (
    <article className={css.card}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={220}
        height={240}
        className={css.image}
      />
      <div className={css.content}>
        <div className={css.heading}>
          <div className={css.top}>
            <h3 className={css.name}>{camper.name}</h3>
            <p className={css.price}>€{camper.price}</p>
          </div>
          <p className={css.meta}>
            <span className={css.metaItem}>
              <FaStar color="var(--star)" />
              {camper.rating}({camper.totalReviews} Reviews)
            </span>
            <span className={css.metaItem}>
              <BsMap />
              {formatLocation(camper.location)}
            </span>
          </p>
        </div>

        <ul className={css.badges}>
          <li className={css.badge}>
            <BsFuelPump size={20} /> {formatLabel(camper.engine)}
          </li>
          <li className={css.badge}>
            <BsDiagram3 size={20} /> {formatLabel(camper.transmission)}
          </li>
          <li className={css.badge}>
            <BsCarFront size={20} /> {formatLabel(camper.form)}
          </li>
        </ul>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.button}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}