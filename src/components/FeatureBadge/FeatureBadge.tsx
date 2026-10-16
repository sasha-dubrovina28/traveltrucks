
import type { IconType } from "react-icons";
import {
  BsFuelPump,
  BsGear,
  BsTruck,
  BsSnow,
  BsCupHot,
  BsTv,
  BsMusicNote,
  BsDroplet,
  BsLightning,
} from "react-icons/bs";

import css from "./FeatureBadge.module.css";

interface FeatureBadgeProps {
  feature: string;
}

const labels: Record<string, string> = {
  petrol: "Petrol",
  diesel: "Diesel",
  hybrid: "Hybrid",
  electric: "Electric",
  automatic: "Automatic",
  manual: "Manual",
  alcove: "Alcove",
  panel_van: "Panel Van",
  integrated: "Integrated",
  semi_integrated: "Semi Integrated",
  AC: "AC",
  kitchen: "Kitchen",
  bathroom: "Bathroom",
  TV: "TV",
  radio: "Radio",
  refrigerator: "Refrigerator",
  microwave: "Microwave",
  gas: "Gas",
  water: "Water",
};

const icons: Record<string, IconType> = {
  petrol: BsFuelPump,
  diesel: BsFuelPump,
  hybrid: BsFuelPump,
  electric: BsLightning,
  automatic: BsGear,
  manual: BsGear,
  alcove: BsTruck,
  panel_van: BsTruck,
  integrated: BsTruck,
  semi_integrated: BsTruck,
  AC: BsSnow,
  kitchen: BsCupHot,
  bathroom: BsDroplet,
  TV: BsTv,
  radio: BsMusicNote,
  refrigerator: BsSnow,
  microwave: BsCupHot,
  gas: BsFuelPump,
  water: BsDroplet,
};

export default function FeatureBadge({
  feature,
}: FeatureBadgeProps) {
  const label = labels[feature] ?? feature;
  const Icon = icons[feature] ?? BsGear;

  return (
    <span className={css.badge}>
      <Icon className={css.icon} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
