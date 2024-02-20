import styles from "./feedbackCard.module.css";
import quoteImg from "../../../assets/images/molecules/QuoteChar.svg";
import { ICommentsProps } from "../../../types/APItypes/CommentsProps";

const FeedbackCard = ({ data }: { data: ICommentsProps }) => {
  return (
    <section key={data.id} className={styles.feedbackCard}>
      {data.user && (
        <div className={styles.cardHeader}>
          <span className={styles.personName}>@{data.user.username}</span>
          <img
            className={styles.quoteImg}
            src={quoteImg}
            loading="lazy"
            alt="quotation marks"
          />
        </div>
      )}
      <p className={styles.quote}>{data.body}</p>
    </section>
  );
};

export default FeedbackCard;
