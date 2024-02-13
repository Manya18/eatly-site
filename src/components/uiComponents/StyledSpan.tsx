import styles from "./uiComponents.module.css";

interface StyledSpanProps { 
  children: React.ReactNode;
}

const StyledSpan:React.FC<StyledSpanProps> = (props) => {
  return <span className={styles.styledSpan}>{props.children}</span>;
};

export default StyledSpan;