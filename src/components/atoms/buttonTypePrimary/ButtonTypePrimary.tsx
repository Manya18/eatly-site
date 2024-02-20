import styles from "./buttonTypePrimary.module.css";
import { ButtonProps } from "../../../types/ButtonProps";

const ButtonTypePrimary = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={styles.primaryButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonTypePrimary;
