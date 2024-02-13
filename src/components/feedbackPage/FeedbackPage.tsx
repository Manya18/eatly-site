import styles from "./feedbackPage.module.css";
import avatar from "../../images/feedbackImg/Avatar.png";
import quoteChar from "../../images/feedbackImg/QuoteChar.svg";
import divider from "../../images/feedbackImg/divider.svg";
import FeedbackCard from "./feedbackCard/FeedbackCard";
import StyledSpan from "../uiComponents/StyledSpan";

const feedbackData = [
  {
    haveHeader: true,
    header: {
      avatar: avatar,
      personName: "Alexander R.",
      period: "01 Year With Us",
      quoteImg: quoteChar,
    },
    quote:
      "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
    rating: 5,
  },
  {
    haveHeader: false,
    header: {
      avatar: "",
      personName: "",
      period: "",
      quoteImg: "",
    },
    quote:
      "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
    rating: 5,
  },
];

const FeedbackPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <StyledSpan text="Customer " />
        Say
      </div>
      <div className={styles.feedbackCardGroup}>
        <FeedbackCard
          haveHeader={feedbackData[0].haveHeader}
          header={feedbackData[0].header}
          quote={feedbackData[0].quote}
          rating={feedbackData[0].rating}
        />
        <div className={styles.cardDividerGroup}>
          <FeedbackCard
            haveHeader={feedbackData[1].haveHeader}
            header={feedbackData[1].header}
            quote={feedbackData[1].quote}
            rating={feedbackData[1].rating}
          />
          <img className={styles.divider} loading="lazy" src={divider} alt="divider" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
