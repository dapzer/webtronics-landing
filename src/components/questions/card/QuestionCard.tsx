import React, { FC, useState } from "react";
import styles from "./question-card.module.scss";
import Image from "next/image";

interface Props {
  question: string;
  answer: string;
}

const QuestionCard: FC<Props> = (props) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className={styles.wrapper}>
      <details open={isOpened} className={styles.body} onToggle={() => setIsOpened(!isOpened)}>
        <summary>
          <h4>{props.question}</h4>
          <Image src={isOpened ? "/icons/minus.svg" : "/icons/plus.svg"} width={16} height={16} alt={""} />
        </summary>

        <div className={styles.content}>
          <p>{props.answer}</p>
        </div>
      </details>
    </div>
  );
};

export default QuestionCard;
