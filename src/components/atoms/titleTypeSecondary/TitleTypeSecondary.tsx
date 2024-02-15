import { TextProps } from "../../../types/TextProps";
import styles from "./titleTypeSecondary.module.css"

const TitleTypeSecondary = (props: React.PropsWithChildren<TextProps>) => {
    return ( 
        <h2 className={styles.titleSecondary}>{props.children}</h2>
     );
}
 
export default TitleTypeSecondary;