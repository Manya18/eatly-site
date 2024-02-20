import { TextProps } from "../../../types/ChildrenProps";
import styles from "./titleTypePrimary.module.css";

const TitleTypePrimary = (props: React.PropsWithChildren<TextProps>) => {
  return <h1 className={styles.titlePrimary}>{props.children}</h1>;
};

export default TitleTypePrimary;
