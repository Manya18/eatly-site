import styles from "./buttonTypeOpen.module.css";
import { ButtonProps } from "../../../types/ButtonProps";

//паттерн композиция компонентов
const ButtonTypeOpen = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={styles.buttonTypeOpen} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonTypeOpen;
