import React, { FC } from "react";
import { Review } from "@/types/Review";
import styles from "./review-gallery.module.scss";
import Image from "next/image";

interface Props {
  reviews: Review[];
}

const ReviewsGallery: FC<Props> = (props) => {
  return (
    <div className={styles.body}>
      {props.reviews.map((el, index) => (
        <div key={index} className={styles.item}>
          <Image src={el.authorImage} width={392} height={422} alt={""} />
        </div>
      ))}
    </div>
  );
};

export default ReviewsGallery;
