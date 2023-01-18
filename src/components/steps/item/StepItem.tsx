import React, { FC } from "react";
import { Step } from "@/types/Step";
import StepCard from "@/components/steps/card/StepCard";
import styles from "./step-item.module.scss";
import Image from "next/image";

interface Props {
  item: Step;
  rotated: boolean;
}

const StepItem: FC<Props> = (props) => {
  return (
    <div className={`${styles.body} ${props.rotated && styles.rotated}`}>
      <StepCard step={props.item.step} title={props.item.title} description={props.item.description} />

      <div className={styles.overlay}>
        <div className={styles.frame}>
          <Image src={"/steps/frame.svg"} width={146} height={228} alt={"frame"} />
        </div>
        <div className={styles.line}>
          <Image src={"/steps/line.svg"} width={76} height={6} alt={"frame"} />
        </div>
      </div>

    </div>
  );
};

export default StepItem;
