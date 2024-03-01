import { TextProps } from "../../../types/ChildrenProps";
import styles from "./columnTemplate.module.css";

//паттерн компонент макета
const ColumnTemplate = ({ children }: React.PropsWithChildren<TextProps>) => {
  return <section className={styles.columnTemplate}>{children}</section>;
};

export default ColumnTemplate;
