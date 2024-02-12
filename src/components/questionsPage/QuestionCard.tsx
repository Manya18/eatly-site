import styles from "./questionCard.module.css";
import { useState } from "react";

type faqData = {
    question: string,
    answer: string
}

const QuestionCard:React.FC<faqData> = (faqData) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.details}>
      <div className={styles.summary}>
        <div className={styles.question}>{faqData.question}</div>
        {isOpen ? <button className={styles.closeButton} onClick={() => { setIsOpen(!isOpen)}} ></button> :
        <button className={styles.openButton} onClick={() => { setIsOpen(!isOpen)}} ></button>}
      </div>
      {isOpen && <p className={styles.answer}>{faqData.answer}</p>}
      <hr />
    </div>
  );
};

export default QuestionCard;
