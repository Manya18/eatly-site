import styles from "./feedbackCard.module.css";
import { FeedbackProps } from "../../../types/FeedbackProps";
import quoteImg from "../../../assets/images/molecules/QuoteChar.svg";

const FeedbackCard = ({
  personName,
  quote,
  id
}: React.PropsWithChildren<FeedbackProps>) => {
  return (
    <section key={id} className={styles.feedbackCard}>
      {personName && (
        <div className={styles.cardHeader}>
          <span className={styles.personName}>@{personName}</span>
          <img
            className={styles.quoteImg}
            src={quoteImg}
            loading="lazy"
            alt="quotation marks"
          />
        </div>
      )}
      <p className={styles.quote}>{quote}</p>
    </section>
  );
};

export default FeedbackCard;
