export function formatLabel(value: string): string {
  return value
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatLocation(location: string): string {
  return location
    .split(",")
    .map((part) => part.trim())
    .reverse()
    .join(", ");
}
export function formatAmenity(value: string): string {
  return value.toLowerCase() === "ac" ? "AC" : formatLabel(value);
}

export function formatMeasure(value: string): string {
  return value.replace(/(\d)(m|l)(?![a-z])/gi, "$1 $2").replace("/", " / ");
}