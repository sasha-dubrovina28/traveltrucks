import type { Metadata } from "next";
import CatalogView from "@/components/CatalogView/CatalogView";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description: "Browse and filter available campers.",
};

export default function CatalogPage() {
  return <CatalogView />;
}