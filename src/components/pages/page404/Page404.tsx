import { Link } from "react-router-dom";
import styles from "./page404.module.css";
import decor from "../../../assets/images/molecules/decorElem3.svg";

const Page404 = () => {
  return (
    <article className={styles.container}>
      <div className={styles.titleDecoration}>
        <h1 className={styles.title}>404</h1>
        <img src={decor} alt="decorative element" />
      </div>
      <h4 className={styles.text}>Page not found</h4>
      <Link to="/" className={styles.linkHome}>
        Home
      </Link>
    </article>
  );
};

export default Page404;
