import React from "react";
import styles from "./feature.module.css";

type Props = {
  title: string;
  paragraph: string;
};

const Feature: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <article className={styles.feature}>
      <span className={styles.title}>{title}</span>
      <p className={styles.paragraph}>{paragraph}</p>
    </article>
  );
};

export default Feature;
