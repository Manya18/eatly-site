import { ButtonProps } from "../../../types/ButtonProps";
import styles from "./buttonTypeHidden.module.css";

const ButtonTypeHidden = (props: React.PropsWithChildren<ButtonProps>) => {
  return <button className={styles.hideButton} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>;
};

export default ButtonTypeHidden;
