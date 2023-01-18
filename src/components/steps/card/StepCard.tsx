import React, { FC } from "react";
import styles from "./steps-card.module.scss";
import { Step } from "@/types/Step";

const StepCard: FC<Step> = (props) => {
  return (
    <div className={styles.body}>
      <h4>{props.step}</h4>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default StepCard;
