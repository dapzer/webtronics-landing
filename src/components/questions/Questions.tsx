import React from "react";
import QuestionCard from "@/components/questions/card/QuestionCard";
import styles from "./questions.module.scss"
import questions from "@/mocks/questionsList.json"
import Image from "next/image";

const Questions = () => {
  return (
    <section className={styles.body}>
      <h2 className={styles.title}>Frequently Asked <br /> Questions</h2>
      <div className={styles.block}>
        <div className={styles.info}>
          <p>Do you have any kind of questions? <br /> We are here to help.</p>

          <div className={styles.image}>
            <Image src={"/questions/logo.svg"} width={2320} height={2320} objectFit="contain" alt={""} />
          </div>
        </div>

        <div className={styles.list}>
          {questions.list.map((el, index) => (
            <QuestionCard key={index} question={el.question} answer={el.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
