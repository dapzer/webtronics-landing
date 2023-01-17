import React, { FC } from "react";
import styles from "./mentors-card.module.scss"
import Image from "next/image";

interface Props {
  name: string;
  description: string;
  image: string
}

const MentorCard: FC<Props> = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles.image}>
        <Image src={props.image} width={184} height={184} alt={props.name}  />
      </div>

      <div className={styles.info}>
        <h4>{props.name}</h4>
        <p className="text2">{props.description}</p>
      </div>
    </div>
  );
};

export default MentorCard;
