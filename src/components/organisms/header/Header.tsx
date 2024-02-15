import React from "react";
import styles from "./header.module.css";
import Menu from "../../molecules/menu/Menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Menu />
      </div>
      <hr />
    </header>
  );
};

export default Header;
