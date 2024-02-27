import { Link } from "react-router-dom";
import styles from "./page404.module.css"
const Page404 = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h4 className={styles.text}>Page not found</h4>
      <Link to='/' className={styles.linkHome}>Home</Link>
    </article>
  );
};

export default Page404;
