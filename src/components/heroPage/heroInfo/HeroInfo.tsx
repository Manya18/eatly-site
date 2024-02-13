import StyledSpan from "../../uiComponents/StyledSpan";
import styles from "./heroInfo.module.css";

const HeroInfo = () => {
  return (
    <article className={styles.infoBlock}>
      <div className={styles.subtitleBlock}>
        <hr className={styles.hr} />
        <div className={styles.subtitle}>OVER 1000 USERS</div>
      </div>
      <span className={styles.title}>
        Enjoy Foods All <br />
        Over The <StyledSpan text="World" />
      </span>
      <p>
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a{" "}
        <StyledSpan text="$20 bonus." />
      </p>
      <div className={styles.BtnGroup}>
        <button className="primary__btn">Get Started</button>
        <button className="secondary__btn">Go Pro</button>
      </div>
    </article>
  );
};

export default HeroInfo;
