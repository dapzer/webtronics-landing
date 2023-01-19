import React from "react";
import styles from "./reviews.module.scss";
import reviews from "@/mocks/reviews.json";
import { useReviews } from "@/hooks/useReviews";
import ReviewsControls from "@/components/review/controls/ReviewsControls";
import ReviewsGallery from "@/components/review/gallery/ReviewsGallery";

const Reviews = () => {
  const { sortedReviews, activeReview, nextReview, prevReview } = useReviews(reviews.list);

  return (
    <>
      {sortedReviews.length > 0 && (
        <section>
          <h2 className={styles.title}>Review</h2>
          <div className={styles.block}>
            <div className={styles.info}>
              <h4>{sortedReviews[0].title}</h4>
              <p>{sortedReviews[0].description}</p>
            </div>
            <div>
              <ReviewsControls activeReview={activeReview} nextReview={nextReview} prevReview={prevReview}
                               reviewsQuantity={sortedReviews.length} />
              <ReviewsGallery reviews={sortedReviews} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Reviews;
