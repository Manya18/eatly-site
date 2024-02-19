import styles from "./footer.module.css";

import Menu from "../../molecules/menu/Menu";
import ContactsGroup from "../../molecules/contactsGroup/ContactsGroup";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";

const Footer = () => {
  return (
    <footer>
      <Menu containerStyle={styles.flexContainer}/>
      <HrTypeStyled />
      <div className={styles.infoRow}>
        <span className={styles.text}>© 2023 EATLY All Rights Reserved.</span>
        <ContactsGroup />
      </div>
    </footer>
  );
};

export default Footer;
