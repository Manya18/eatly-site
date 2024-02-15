import React from "react";
import styles from "./feature.module.css";
import { FeatureProps } from "../../../types/FeatureProps";

const Feature = ({ title, paragraph }: React.PropsWithChildren<FeatureProps>) => {
  return (
    <article className={styles.feature}>
      <span className={styles.title}>{title}</span>
      <p className={styles.paragraph}>{paragraph}</p>
    </article>
  );
};

export default Feature;
