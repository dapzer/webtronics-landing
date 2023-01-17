import React, { FC } from "react";
import styles from "./technology-card.module.scss";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

const TechnologyCard: FC<Props> = (props) => {
  return (
    <div className={styles.body}>
      <Image src={props.image} width={162} height={135} alt={props.title} />
      <h4>{props.title}</h4>
    </div>
  );
};

export default TechnologyCard;
