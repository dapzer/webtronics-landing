import React, { FC } from "react";
import styles from "./technologies.module.scss";
import TechnologyCard from "@/components/technologies/card/TechnologyCard";
import technologies from "@/mocks/technologiesList.json";

interface Props {
  id?: string
}

const Technologies: FC<Props> = (props) => {
  return (
    <section id={props.id} className={styles.body}>
      <h2>Programming <br /> technologies</h2>
      <p>By the end, you’ll have the portfolio and interview skills <br /> you need to start your new career.</p>
      <div className={styles.list}>
        {technologies.list.map((el, index) => (
          <TechnologyCard key={index} title={el.title} image={el.image} />
        ))}
      </div>

    </section>
  );
};

export default Technologies;
