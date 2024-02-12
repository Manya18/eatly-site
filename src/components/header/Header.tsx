import React from "react";
import logo from "./../../images/Logo.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#!">Recipes</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
