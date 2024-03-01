import styles from "./buttonTypePrimary.module.css";
import { ButtonProps } from "../../../types/ButtonProps";

//паттерн композиция компонентов
const ButtonTypePrimary = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={`${styles.primaryButton} ${props.style}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonTypePrimary;
