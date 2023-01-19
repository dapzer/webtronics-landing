import React, { FC } from "react";
import styles from "./reviews-controls.module.scss";
import Image from "next/image";

interface Props {
  nextReview: () => void;
  prevReview: () => void;
  activeReview: number;
  reviewsQuantity: number;
}

const ReviewsControls: FC<Props> = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.position}>
        <span>{props.activeReview + 1}/</span>
        <p>{props.reviewsQuantity}</p>
      </div>
      <div className={styles.navigation}>
        <button onClick={props.prevReview} disabled={props.activeReview === 0}>
          <Image src={"/icons/arrow.svg"} width={10} height={19} alt={""} />
        </button>
        <button onClick={props.nextReview}>
          <Image src={"/icons/arrow.svg"} width={10} height={19} alt={""} />
        </button>
      </div>
    </div>
  );
};

export default ReviewsControls;
