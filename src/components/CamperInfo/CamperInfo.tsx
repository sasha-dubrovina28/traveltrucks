
import type { CamperDetails } from "@/types/camper";
import FeatureBadge from "@/components/FeatureBadge/FeatureBadge";

import css from "./CamperInfo.module.css";

interface CamperInfoProps {
  camper: CamperDetails;
}

const formLabels: Record<string, string> = {
  alcove: "Alcove",
  panel_van: "Panel Truck",
  integrated: "Fully Integrated",
  semi_integrated: "Semi Integrated",
};

export default function CamperInfo({
  camper,
}: CamperInfoProps) {
  const features = [
    camper.transmission,
    camper.engine,
    camper.form,
    ...camper.amenities,
  ].filter(Boolean);

  const uniqueFeatures = [...new Set(features)];

  const vehicleDetails = [
    {
      label: "Form",
      value: formLabels[camper.form] ?? camper.form,
    },
    {
      label: "Length",
      value: camper.length,
    },
    {
      label: "Width",
      value: camper.width,
    },
    {
      label: "Height",
      value: camper.height,
    },
    {
      label: "Tank",
      value: camper.tank,
    },
    {
      label: "Consumption",
      value: camper.consumption,
    },
  ];

  return (
    <div className={css.wrapper}>
      <section className={css.descriptionSection}>
        <p className={css.description}>
          {camper.description}
        </p>
      </section>

      <section className={css.detailsSection}>
        <h2 className={css.title}>
          Vehicle details
        </h2>

        <div className={css.features}>
          {uniqueFeatures.map((feature) => (
            <FeatureBadge
              key={feature}
              feature={feature}
            />
          ))}
        </div>

        <dl className={css.detailsList}>
          {vehicleDetails.map(({ label, value }) => (
            <div className={css.detailsRow} key={label}>
              <dt className={css.label}>{label}</dt>
              <dd className={css.value}>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
