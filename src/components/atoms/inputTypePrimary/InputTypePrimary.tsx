import { InputProps } from "../../../types/InputProps";
import styles from "./inputTypePrimary.module.css";

const InputTypePrimary: React.FC<InputProps> = (props) => {
  return (
    <section className={styles.container}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <textarea
        className={styles.input}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </section>
  );
};

export default InputTypePrimary;
