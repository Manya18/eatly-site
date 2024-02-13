import React from "react";
import logo from "./../../images/Logo.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} loading="lazy" alt="logo" />
        <nav>
          <a href="#!">Recipes</a>
          <a href="#!">Blog</a>
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
