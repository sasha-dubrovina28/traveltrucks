import StarRating from "@/components/StarRating/StarRating";
import type { Review } from "@/types/camper";
import css from "./Reviews.module.css";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.id} className={css.item}>
          <div className={css.head}>
            <span className={css.avatar}>{review.reviewer_name[0]}</span>
            <div>
              <p>{review.reviewer_name}</p>
              <StarRating value={review.reviewer_rating} />
            </div>
          </div>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}