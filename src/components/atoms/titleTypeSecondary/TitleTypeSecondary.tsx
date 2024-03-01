import { TextProps } from "../../../types/ChildrenProps";
import styles from "./titleTypeSecondary.module.css";

//паттерн композиция компонентов
const TitleTypeSecondary = (props: React.PropsWithChildren<TextProps>) => {
  return <h2 className={styles.titleSecondary}>{props.children}</h2>;
};

export default TitleTypeSecondary;
