import React, { FC } from "react";
import styles from "./steps.module.scss";
import steps from "@/mocks/steps.json";
import StepItem from "@/components/steps/item/StepItem";

interface Props {
  id?: string
}

const Steps: FC<Props> = (props) => {
  return (
    <section className={styles.body} id={props.id}>
      <h2 className={styles.title}>Steps</h2>
      <div className={styles.list}>
        {steps.list.map((el, index) => (
          <StepItem key={index} item={el} rotated={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Steps;
