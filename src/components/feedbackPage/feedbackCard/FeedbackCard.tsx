import styles from "./feedbackCard.module.css";
import star from "../../../images/feedbackImg/Star.svg";

interface Props {
  haveHeader: boolean;
  header: {
    avatar: string;
    personName: string;
    period: string;
    quoteImg: string;
  };
  quote: string;
  rating: number;
}

const FeedbackCard: React.FC<Props> = ({
  haveHeader,
  header,
  quote,
  rating,
}) => {
  let amountStars = [0, 1, 2, 3, 4];

  return (
    <article className={styles.feedbackCard}>
      {haveHeader && (
        <div className={styles.cardHeader}>
          <div className={styles.personData}>
            <img
              className={styles.avatar}
              src={header.avatar}
              loading="lazy"
              alt="person avatar"
            />
            <div className={styles.textGroup}>
              <span className={styles.personName}>{header.personName}</span>
              <span className={styles.period}>{header.period}</span>
            </div>
          </div>
          <img
            className={styles.quoteImg}
            src={header.quoteImg}
            loading="lazy"
            alt="quotation marks"
          />
        </div>
      )}
      <span className={styles.quote}>{quote}</span>
      <div className={styles.ratingStars}>
        {amountStars.map((starNum) => (
          <img key={starNum} className={styles.star} loading="lazy" src={star} alt="star" />
        ))}
      </div>
    </article>
  );
};

export default FeedbackCard;
