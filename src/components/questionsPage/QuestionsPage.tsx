import QuestionCard from "./questionsCard/QuestionCard";
import styles from "./questionsPage.module.css";
import illustr from "../../images/questionsPageImg/Illustration01.svg"
import StyledSpan from "../uiComponents/StyledSpan";
import TitleTypeSecondary from "../uiComponents/TitleTypeSecondary";

const faqData = [
    {
        question: "How long does delivery take?",
        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?"
    },
    {
        question: "How Does It Work ?",
        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?"
    },
    {
        question: "How does your food delivery service work?",
        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?"
    },
    {
        question: "What payment options do you accept?",
        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?"
    },
    {
        question: "Do you offer discounts or promotions?",
        answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.\nWhat’s The Difference Between Free And Paid Plan ?"
    },

]

const QuestionsPage = () => {

    return ( 
        <div className={styles.container}>
            <TitleTypeSecondary>
                Frequently Asked <br/> <StyledSpan>Questions</StyledSpan>
            </TitleTypeSecondary>
            <div className={styles.illustrTitle}>
                <img className={styles.illustr} src={illustr} loading="lazy" alt="decirative element" />
            </div>
            {faqData.map((faq) => (
                <div key={faq.question}>
                    <QuestionCard question={faq.question} answer={faq.answer}/>
                </div>
            ))}
        </div>
     );
}
 
export default QuestionsPage;