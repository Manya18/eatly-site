import { TextProps } from "../../../types/TextProps";
import styles from "./paragraphTypeGray.module.css"

const ParagraphTypeGray = (props: React.PropsWithChildren<TextProps>) => {
    return ( 
        <p className={styles.paragraphTypeGray}>{props.children}</p>
     );
}
 
export default ParagraphTypeGray;