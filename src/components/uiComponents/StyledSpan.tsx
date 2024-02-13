import styles from "./uiComponents.module.css";

interface Props {
  text: string;
}

const styledSpan:React.FC<Props> = (props) => {
  return <span className={styles.styledSpan}>{props.text}</span>;
};

export default styledSpan;
