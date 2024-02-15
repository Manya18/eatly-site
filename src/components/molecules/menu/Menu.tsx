import styles from "./menu.module.css";
import Link from "../../atoms/link/Link";
import Logo from "../../atoms/logo/Logo";

const Menu = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <nav className={styles.navigation}>
        <Link href="#!">Recipes</Link>
        <Link href="#!">FAQ</Link>
        <Link href="#!">Blog</Link>
      </nav>
    </div>
  );
};

export default Menu;
