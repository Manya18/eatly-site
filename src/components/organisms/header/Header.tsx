import React from "react";
import styles from "./header.module.css";
import Menu from "../../molecules/menu/Menu";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Menu />
      </div>
      <HrTypeStyled />
    </header>
  );
};

export default Header;
