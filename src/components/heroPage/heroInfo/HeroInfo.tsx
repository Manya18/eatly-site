import ButtonTypePrimary from "../../uiComponents/ButtonTypePrimary";
import ButtonTypeSecondary from "../../uiComponents/ButtonTypeSecondary";
import StyledSpan from "../../uiComponents/StyledSpan";
import TitleTypePrimary from "../../uiComponents/TitleTypePrimary";
import styles from "./heroInfo.module.css";

const HeroInfo = () => {
  return (
    <article className={styles.infoBlock}>
      <div className={styles.subtitleBlock}>
        <hr className={styles.hr} />
        <div className={styles.subtitle}>OVER 1000 USERS</div>
      </div>
      <TitleTypePrimary><span>
        Enjoy Foods All <br />
        Over The <StyledSpan>World</StyledSpan>
      </span></TitleTypePrimary>
      <p>
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a{" "}
        <StyledSpan>$20 bonus.</StyledSpan>
      </p>
      <div className={styles.BtnGroup}>
        <ButtonTypePrimary><span>Get Started</span></ButtonTypePrimary>
        <ButtonTypeSecondary><span>Go Pro</span></ButtonTypeSecondary>
      </div>
    </article>
  );
};

export default HeroInfo;
