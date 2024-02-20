import { TextProps } from "../../../types/ChildrenProps";
import styles from "./spanTypeViolet.module.css";

const StyledSpan: React.FC<TextProps> = (props) => {
  return <span className={styles.styledSpan}>{props.children}</span>;
};

export default StyledSpan;
