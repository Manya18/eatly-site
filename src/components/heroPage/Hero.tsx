import React from "react";
import styles from "./Hero.module.css";
import ellipseImg from "../../images/heroImg/Ellipse.svg";
import foodImg from "../../images/heroImg/Food Image.svg";
import graphImg from "../../images/heroImg/Graph.svg";
import dishCard from "../../images/heroImg/DishCard.svg";
import arrow from "../../images/heroImg/Arrow.svg";
import illust1 from "../../images/heroImg/Illustration01.svg";
import illust2 from "../../images/heroImg/Illustration02.svg";
import PurchaseCard from "../purchases/purchaseCard/PurchaseCard";
import chickenHell from "../../images/PurchasesPage/chickenHell.svg"

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoBlock}>
        <div className={styles.subtitleBlock}>
          <hr className={styles.hr} />
          <div className={styles.subtitle}>OVER 1000 USERS</div>
        </div>
        <div className={styles.title}>
          Enjoy Foods All <br />
          Over The <span>World</span>
        </div>
        <div className='paragraph'>
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a <span className={styles.styledSpan}>$20 bonus</span>.
        </div>
        <div className={styles.BtnGroup}>
          <button className="primary__btn">Get Started</button>
          <button className="secondary__btn">Go Pro</button>
        </div>
      </div>

      <div className={styles.imageBlock}>
        <img className={styles.arrow} src={arrow} alt="arrow" />
        <img className={styles.ellipseImg} src={ellipseImg} alt="ellipse" />
        <img className={styles.foodImg} src={foodImg} alt="food" />
        <img className={styles.graphImg} src={graphImg} alt="graph" />
        <div className={styles.dishCard}>
          <PurchaseCard title='Chicken Hell' imgUrl={chickenHell} status="On The Way" date="3:09 PM" />
        </div>
        {/* <img className={styles.dishCard} src={dishCard} alt="Chicken Hell" /> */}
        <img className={styles.illust1} src={illust1} alt="Illustration 1" />
        <img className={styles.illust2} src={illust2} alt="Illustration 2" />
      </div>
    </div>
  );
};

export default Hero;