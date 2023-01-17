import React from "react";
import styles from "./mentors-list.module.scss";
import MentorCard from "@/components/about/mentors/card/MentorCard";
import Image from "next/image";
import { mentors } from "@/mocks/mentors.json";

const MentorsList = () => {
  return (
    <div className={styles.body}>
      <h3 className={styles.title}>Mentors</h3>
      <Image src={"mentors/line.svg"} width={400} height={156} alt={"Line"} />
      <div className={styles.list}>
        {mentors.map((el, index) => (
          <MentorCard key={index} name={el.name} description={el.description} image={el.image} />
        ))}
      </div>
    </div>
  );
};

export default MentorsList;
