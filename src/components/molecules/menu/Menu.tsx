import styles from "./menu.module.css";
// import Link from "../../atoms/link/Link";
import Logo from "../../atoms/logo/Logo";
import { MenuProps } from "../../../types/MenuProps";
import { HashLink as Link } from 'react-router-hash-link';

const Menu : React.FC<MenuProps> = ({containerStyle}) => {
  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <Logo />
      <nav className={styles.navigation}>
        <Link smooth to="/#recipes">Recipes</Link>
        <Link smooth to="/#FAQ">FAQ</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Menu;
