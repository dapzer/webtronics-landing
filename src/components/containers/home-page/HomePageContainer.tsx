import React from "react";
import styles from "./home-page-container.module.scss"
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Technologies from "@/components/technologies/Technologies";
import Steps from "@/components/steps/Steps";
import Questions from "@/components/questions/Questions";
import Reviews from "@/components/review/Reviews";

const HomePageContainer= () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <Hero />
      <About />
      <Technologies />
      <Steps />
      <Questions />
      <Reviews />
    </div>
  );
};

export default HomePageContainer;
