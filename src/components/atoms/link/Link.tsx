import { LinkProps } from "../../../types/LinkProps";
import styles from "./link.module.css";
import { HashLink } from 'react-router-hash-link';

const Link = (props: React.PropsWithChildren<LinkProps>) => {
  return (
    <HashLink className={styles.link} smooth to={props.href}>
      {props.children}
    </HashLink>
  );
};

export default Link;
