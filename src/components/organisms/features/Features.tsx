import React from "react";
import styles from "./features.module.css";
import Feature from "../../molecules/feature/Feature";

const featuresData = [
  {
    title: "10K+",
    paragraph: "Satisfied Costumers \r\nAll Great Over The World",
  },
  {
    title: "4M",
    paragraph: "Healthy Dishes Sold\n Including Milk Shakes Smooth",
  },
  {
    title: "99.99%",
    paragraph: "Reliable Customer Support \n We Provide Great Experiences",
  },
];

// здесь, как и во всем проекте используется паттерн "Композиция компонентов" и Компоненты-контейнеры
const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      <Feature title={featuresData[0].title} paragraph={featuresData[0].paragraph} />
      <hr className={styles.coloredHr} />
      <Feature title={featuresData[1].title} paragraph={featuresData[1].paragraph} />
      <hr className={styles.coloredHr} />
      <Feature title={featuresData[2].title} paragraph={featuresData[2].paragraph} />
    </div>
  );
};

export default Features;
