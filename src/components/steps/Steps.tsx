import React from "react";
import styles from "./steps.module.scss";
import { steps } from "@/mocks/steps.json";
import StepItem from "@/components/steps/item/StepItem";

const Steps = () => {
  return (
    <section className={styles.body}>
      <h2 className={styles.title}>Steps</h2>
      <div className={styles.list}>
        {steps.map((el, index) => (
          <StepItem key={index} item={el} rotated={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Steps;
