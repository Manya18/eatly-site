import React from "react";
import styles from "./heroPage.module.css";
import HeroInfo from "./heroInfo/HeroInfo";
import HeroImg from "./heroImg/HeroImg";

const HeroPage = () => {
  return (
    <div className={styles.container}>
      <HeroInfo />
      <HeroImg />
    </div>
  );
};

export default HeroPage;
