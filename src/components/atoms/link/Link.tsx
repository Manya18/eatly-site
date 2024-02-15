import { LinkProps } from "../../../types/LinkProps";
import styles from "./link.module.css";

const Link = (props: React.PropsWithChildren<LinkProps>) => {
  return (
    <a className={styles.link} href={props.href}>
      {props.children}
    </a>
  );
};

export default Link;
