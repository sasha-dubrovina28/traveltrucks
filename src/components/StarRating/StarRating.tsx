import { FaStar } from "react-icons/fa";

export default function StarRating({ value }: { value: number }) {
  return (
    <div
      aria-label={`Rating ${value} of 5`}
      style={{ display: "flex", gap: 4, marginTop: 4 }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          size={16}
          color={i < Math.round(value) ? "var(--star)" : "var(--border)"}
        />
      ))}
    </div>
  );
}