import { FAQProps } from "../../../types/FAQProps";
import ButtonTypeOpen from "../../atoms/buttonTypeOpen/ButtonTypeOpen";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";
import styles from "./FAQCard.module.css";
import { useState } from "react";

const FAQCard = ( {question, answer} : React.PropsWithChildren<FAQProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.details}>
      <div className={styles.summary}>
        <p className={styles.question}>{question}</p>
        {isOpen ? (
          <ButtonTypeOpen onClick={() => {setIsOpen(!isOpen);}}>-</ButtonTypeOpen>
        ) : (
          <ButtonTypeOpen onClick={() => {setIsOpen(!isOpen);}}>+</ButtonTypeOpen>
        )}
      </div>
      {isOpen && <p className={styles.answer}>{answer}</p>}
      <HrTypeStyled />
    </section>
  );
};

export default FAQCard;
