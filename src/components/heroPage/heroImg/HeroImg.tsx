import ellipseImg from "../../../images/heroImg/Ellipse.svg";
import foodImg from "../../../images/heroImg/Food Image.svg";
import graphImg from "../../../images/heroImg/Graph.svg";
import arrow from "../../../images/heroImg/Arrow.svg";
import illust1 from "../../../images/heroImg/Illustration01.svg";
import illust2 from "../../../images/heroImg/Illustration02.svg";
import chickenHell from "../../../images/PurchasesPage/chickenHell.svg";

import PurchaseCard from "../../purchasesPage/purchaseCard/PurchaseCard";
import styles from "./heroImg.module.css";

const HeroImg = () => {
  return (
    <figure className={styles.imageBlock}>
      <img className={styles.arrow} src={arrow} loading="lazy" alt="curly arrow" />
      <img
        className={styles.ellipseImg} src={ellipseImg} loading="lazy" alt="violet ellipse" />
      <img className={styles.foodImg} src={foodImg} loading="lazy" alt="plate of food" />
      <img className={styles.graphImg} src={graphImg} loading="lazy" alt="graph" />
      <div className={styles.dishCard}>
        <PurchaseCard
          title="Chicken Hell"
          imgUrl={chickenHell}
          status="On The Way"
          date="3:09 PM"
        />
      </div>
      <img className={styles.illust1} src={illust1} loading="lazy" alt="decorative element" />
      <img className={styles.illust2} src={illust2} loading="lazy" alt="decorative element" />
    </figure>
  );
};

export default HeroImg;
