import styles from "./questionCard.module.css";
import { useState } from "react";

interface faqData {
  question: string;
  answer: string;
}

const QuestionCard: React.FC<faqData> = (faqData) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={styles.details}>
      <div className={styles.summary}>
        <p className={styles.question}>{faqData.question}</p>
        {isOpen ? (
          <button
            className={styles.closeButton}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></button>
        ) : (
          <button
            className={styles.openButton}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></button>
        )}
      </div>
      {isOpen && <p className={styles.answer}>{faqData.answer}</p>}
      <hr />
    </article>
  );
};

export default QuestionCard;