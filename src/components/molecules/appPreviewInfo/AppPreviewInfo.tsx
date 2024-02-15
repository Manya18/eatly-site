import styles from "./appPreviewInfo.module.css";
import ButtonTypePrimary from "../../atoms/buttonTypePrimary/ButtonTypePrimary";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";

import arrow from "../../../assets/images/molecules/Arrow.svg";
import curlyArrow2 from "../../../assets/images/molecules/curlyArrow2.svg";
import ParagraphTypeGray from "../../atoms/paragraphTypeGrey/ParagraphTypeGray";

const AppPreviewInfo = () => {
  return (
    <section className={styles.infoBlock}>
      <TitleTypeSecondary>
        Premium
        <StyledSpan> Quality</StyledSpan>
        <br /> For Your Health
      </TitleTypeSecondary>

      <ul className={styles.list}>
        <li>
          {" "}
          <ParagraphTypeGray>
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </ParagraphTypeGray>
        </li>
        <li>
          <ParagraphTypeGray>
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </ParagraphTypeGray>
        </li>
      </ul>
      <ButtonTypePrimary onClick={() => console.log("ButtonTypePrimary Click")}>
        Download
        <img src={arrow} loading="lazy" alt="arrow" />
      </ButtonTypePrimary>
      <img
        className={styles.curlyArrow}
        src={curlyArrow2}
        loading="lazy"
        alt="curly arrow"
      />
    </section>
  );
};

export default AppPreviewInfo;
