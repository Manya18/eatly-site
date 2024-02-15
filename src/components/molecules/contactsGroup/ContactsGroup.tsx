import styles from "./contactsGroup.module.css";
import Link from "../../atoms/link/Link";

import instagram from "../../../assets/images/atoms/instagram.svg";
import linkedIn from "../../../assets/images/atoms/in.svg";
import facebook from "../../../assets/images/atoms/facebook.svg";
import twitter from "../../../assets/images/atoms/twitter.svg";

const ContactsGroup = () => {
  return (
    <div className={styles.contactsGroup}>
      <Link href="#!">
        <img src={instagram} loading="lazy" alt="instagram" />
      </Link>
      <Link href="#!">
        <img src={linkedIn} loading="lazy" alt="linkedIn" />
      </Link>
      <Link href="#!">
        <img src={facebook} loading="lazy" alt="facebook" />
      </Link>
      <Link href="#!">
        <img src={twitter} loading="lazy" alt="twitter" />
      </Link>
    </div>
  );
};

export default ContactsGroup;
