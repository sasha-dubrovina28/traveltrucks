import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BsMap } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { getCamper, getReviews } from "@/lib/api";
import {
  formatAmenity,
  formatLabel,
  formatLocation,
  formatMeasure,
} from "@/lib/formatters";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import Reviews from "@/components/Reviews/Reviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import css from "./page.module.css";

type Props = { params: Promise<{ camperId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { camperId } = await params;
  try {
    const camper = await getCamper(camperId);
    return {
      title: `${camper.name} | TravelTrucks`,
      description: camper.description.slice(0, 150),
    };
  } catch {
    return { title: "Camper | TravelTrucks" };
  }
}

export default async function CamperPage({ params }: Props) {
  const { camperId } = await params;

  let camper, reviews;
  try {
    [camper, reviews] = await Promise.all([
      getCamper(camperId),
      getReviews(camperId),
    ]);
  } catch {
    notFound();
  }

  const details = [
    ["Form", formatLabel(camper.form)],
    ["Length", formatMeasure(camper.length)],
    ["Width", formatMeasure(camper.width)],
    ["Height", formatMeasure(camper.height)],
    ["Tank", formatMeasure(camper.tank)],
    ["Consumption", formatMeasure(camper.consumption)],
  ];

  const badges = [
    camper.transmission,
    camper.engine,
    ...camper.amenities,
  ].map(formatAmenity);

  return (
    <div className={css.page}>
      <div className={css.top}>
        <CamperGallery images={camper.gallery} name={camper.name} />

        <div className={css.info}>
          <section className={css.card}>
            <h1 className={css.name}>{camper.name}</h1>
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
            <p className={css.price}>€{camper.price}</p>
            <p className={css.description}>{camper.description}</p>
          </section>

          <section className={css.card}>
            <h2 className={css.subtitle}>Vehicle details</h2>
            <ul className={css.badges}>
              {badges.map((item) => (
                <li key={item} className={css.badge}>
                  {item}
                </li>
              ))}
            </ul>
            <dl className={css.table}>
              {details.map(([label, value]) => (
                <div key={label} className={css.row}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

    <section className={css.bottom}>
  <h2 className={css.sectionTitle}>Reviews</h2>
  <div className={css.bottomGrid}>
    <Reviews reviews={reviews} />
    <BookingForm camperId={camper.id} />
  </div>
</section>
    </div>
  );
}