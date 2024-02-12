import styles from "./footer.module.css";
import logo from "./../../images/Logo.svg";
import instagram from "../../images/footerImg/instagram.svg";
import linkedIn from "../../images/footerImg/in.svg";
import facebook from "../../images/footerImg/facebook.svg";
import twitter from "../../images/footerImg/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.infoRow}>
        <img src={logo} alt="logo" />
        <div className={styles.linksGroup}>
          <a className={styles.text} href="#!">About Us</a>
          <a className={styles.text} href="#!">Contact</a>
        </div>
      </div>
      <hr />
      <div className={styles.infoRow}>
        <div className={styles.text}>© 2023 EATLY All Rights Reserved.</div>
        <div className={styles.contactsGroup}>
          <a href="#!"><img src={instagram} alt="instagram" /></a>
          <a href="#!"><img src={linkedIn} alt="linkedIn" /></a>
          <a href="#!"><img src={facebook} alt="facebook" /></a>
          <a href="#!"><img src={twitter} alt="twitter" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
