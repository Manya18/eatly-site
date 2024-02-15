import styles from "./logo.module.css"
import logo from "../../../assets/images/atoms/Logo.svg";

const Logo = () => {
    return ( 
        <a className={styles.link} href="#!">
            <img className={styles.logo} src={logo} loading="lazy" alt="logo" />
        </a>
     );
}
 
export default Logo;