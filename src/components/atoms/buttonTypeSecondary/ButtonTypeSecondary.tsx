import { ButtonProps } from "../../../types/ButtonProps";
import styles from "./buttonTypeSecondary.module.css"

const ButtonTypePrimary = (props: React.PropsWithChildren<ButtonProps>) => {
    return ( 
        <button className={styles.secondaryButton} onClick={props.onClick}>{props.children}</button>
     );
}
 
export default ButtonTypePrimary;