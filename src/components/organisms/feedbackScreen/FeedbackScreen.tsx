import styles from "./feedbackScreen.module.css";
import divider from "../../../assets/images/organisms/divider.svg";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";

const feedbackData = [
  {
    personName: "@omottley2h",
    quote:
      "I cannot believe how I found you, this is so pretty.",
  },
  {
    quote:
      "I cannot believe how I found you, this is so pretty.",
  },
];

const FeedbackPage = () => {
  return (
    <div className={styles.container}>
      <TitleTypeSecondary> 
        <StyledSpan>Customer</StyledSpan> Say 
      </TitleTypeSecondary>
      <div className={styles.feedbackCardGroup}>
        <FeedbackCard
          personName={feedbackData[0].personName}
          quote={feedbackData[0].quote}
        />
        <div className={styles.cardDividerGroup}>
          <FeedbackCard
            quote={feedbackData[1].quote}
          />
          <img className={styles.divider} loading="lazy" src={divider} alt="divider" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
