import React from "react";
import styles from "./about.module.scss";
import MentorsList from "@/components/about/mentors/list/MentorsList";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.body}>
      <h2 className={styles.title}>About Us</h2>

      <div className={styles.block}>
        <MentorsList />
        <p className={styles.info}>Front-end engineers work closely with designers to make <br />
          websites beautiful, functional, and fast. This Career Path will <br />
          teach you not only the necessary languages and technologies, <br />
          but how to think like a front-end
          engineer, too.</p>
      </div>

      <div className={styles.bgProfession}>
        <Image src={"backgrounds/frontEnd.svg"} width={760} height={185} alt={"FrontEnd"} />
      </div>
    </section>
  );
};

export default About;
