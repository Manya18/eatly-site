import ButtonTypePrimary from "../../atoms/buttonTypePrimary/ButtonTypePrimary";
import ButtonTypeSecondary from "../../atoms/buttonTypeSecondary/ButtonTypeSecondary";
import ParagraphTypeGray from "../../atoms/paragraphTypeGrey/ParagraphTypeGray";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypePrimary from "../../atoms/tittleTypePrimary/TitleTypePrimary";
import styles from "./heroInfo.module.css";

const HeroInfo = () => {
  return (
    <article className={styles.heroInfo}>
      <div className={styles.itemsGroup}>
        <hr className={styles.hr} />
        <div className={styles.subtitle}>OVER 1000 USERS</div>
      </div>
      <TitleTypePrimary>
        Enjoy Foods All <br />
        Over The <StyledSpan>World</StyledSpan>
      </TitleTypePrimary>
      <ParagraphTypeGray>
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a{" "}
        <StyledSpan>$20 bonus.</StyledSpan>
      </ParagraphTypeGray>
      <div className={styles.itemsGroup}>
        <ButtonTypePrimary
          onClick={() => console.log("ButtonTypePrimary Click")}
        >
          <span>Get Started</span>
        </ButtonTypePrimary>
        <ButtonTypeSecondary
          onClick={() => console.log("ButtonTypeSecondary Click")}
        >
          <span>Go Pro</span>
        </ButtonTypeSecondary>
      </div>
    </article>
  );
};

export default HeroInfo;
