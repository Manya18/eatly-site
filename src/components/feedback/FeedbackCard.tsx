import styles from "./feedbackPage.module.css";
import star from "../../images/feedbackImg/Star.svg";

type Props = {
  haveHeader: boolean;
  header: {
    avatar: string;
    personName: string;
    period: string;
    quoteImg: string;
  };
  quote: string;
  rating: number;
};

const FeedbackCard: React.FC<Props> = ({
  haveHeader,
  header,
  quote,
  rating,
}) => {
  let amountStars = [0, 1, 2, 3, 4];

  return (
    <div className={styles.feedbackCard}>
      {haveHeader && (
        <div className={styles.cardHeader}>
          <div className={styles.personData}>
            <img
              className={styles.avatar}
              src={header.avatar}
              alt="personAvatar"
            />
            <div className={styles.textGroup}>
              <div className={styles.personName}>{header.personName}</div>
              <div className="paragraph">{header.period}</div>
            </div>
          </div>
          <img
            className={styles.quoteImg}
            src={header.quoteImg}
            alt="quoteImage"
          />
        </div>
      )}
      <div className={styles.quote}>{quote}</div>
      <div className={styles.ratingStars}>
        {amountStars.map((starNum) => (
          <img key={starNum} className={styles.star} src={star} alt="star" />
        ))}
      </div>
    </div>
  );
};

export default FeedbackCard;
