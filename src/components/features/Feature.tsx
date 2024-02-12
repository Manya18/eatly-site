import React from "react";
import styles from "./features.module.css";

type Props = {
    title: string;
    paragraph: string;
}

const Feature: React.FC<Props> = ({
    title,
    paragraph
}) => {
    return ( 
        <div className={styles.feature}>
            <div className={styles.title}>{title}</div>
            <div className={styles.paragraph}>{paragraph}</div>
        </div>
     );
}
 
export default Feature;