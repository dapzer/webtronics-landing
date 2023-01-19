import { useEffect, useState } from "react";
import { Review } from "@/types/Review";

export const useReviews = (reviewsList: Review[]) => {
  const [activeReview, setActiveReview] = useState<number>(0);
  const [sortedReviews, setSortedReviews] = useState<Review[]>([]);

  useEffect(() => {
    const copy = reviewsList.filter((_, index) => index !== activeReview);
    setSortedReviews([reviewsList[activeReview], ...copy]);
  }, [activeReview, reviewsList]);

  const nextReview = () => {
    if (activeReview < sortedReviews.length - 1) {
      setActiveReview(prevState => prevState + 1);
    } else {
      setActiveReview(0);
    }
  };

  const prevReview = () => {
    setActiveReview(prevState => prevState - 1);
  };

  return {
    activeReview,
    sortedReviews,
    nextReview,
    prevReview
  };
};
