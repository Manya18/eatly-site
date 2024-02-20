import QuestionCard from "../../molecules/FAQCard/FAQCard";
import styles from "./FAQScreen.module.css";
import decorElem4 from "../../../assets/images/organisms/decorElem4.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";

const faqData = [
  {
    question: "How long does delivery take?",
    answer:
      "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?",
  },
  {
    question: "How Does It Work ?",
    answer:
      "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?",
  },
  {
    question: "How does your food delivery service work?",
    answer:
      "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?",
  },
  {
    question: "What payment options do you accept?",
    answer:
      "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?",
  },
];

const QuestionsPage = () => {
  return (
    <ColumnTemplate>
      <div id="FAQ">
        <TitleTypeSecondary>
          Frequently Asked <br /> <StyledSpan>Questions</StyledSpan>
        </TitleTypeSecondary>
      </div>
      <div className={styles.titleForDecorElem}>
        <img
          className={styles.decorElem}
          src={decorElem4}
          loading="lazy"
          alt="decirative element"
        />
      </div>
      {faqData.map((faq) => (
        <div key={faq.question}>
          <QuestionCard question={faq.question} answer={faq.answer} />
        </div>
      ))}
    </ColumnTemplate>
  );
};

export default QuestionsPage;
