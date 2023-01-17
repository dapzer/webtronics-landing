import React  from "react";
import styles from "./hero.module.scss"


const Hero = () => {
  return (
    <section className={styles.body}>
      <div className={styles.block}>
        <h1>Front-End</h1>
        <p>Make UIs and websites beautiful, functional, <br/> and fast. Cover all the topics that expensive <br/> bootcamps teach (and more). </p>
      </div>
      <div className={styles.block}>
        <button className="small_button">Start my career change</button>
        <h1>Developer</h1>
      </div>
      <div className={styles.block}>
        <h3>Courses</h3>
      </div>
    </section>
  );
};

export default Hero;
