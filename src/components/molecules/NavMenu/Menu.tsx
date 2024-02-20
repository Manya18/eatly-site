import styles from "./menu.module.css";
import Link from "../../atoms/link/Link";
import Logo from "../../atoms/logo/Logo";
import { MenuProps } from "../../../types/MenuProps";

const Menu: React.FC<MenuProps> = ({ containerStyle }) => {
  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <Logo />
      <nav className={styles.navigation}>
        <Link href="/#recipes">Recipes</Link>
        <Link href="/#FAQ">FAQ</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Menu;
