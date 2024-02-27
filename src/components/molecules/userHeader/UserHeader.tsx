import { AuthorProps } from "../../../types/APItypes/AuthorProps";
import styles from "./userHeader.module.css";

const UserHeader = ({ author }: { author: AuthorProps }) => {
  return (
    <div className={styles.authorCard}>
      <img
        className={styles.authorImg}
        src={author.image}
        alt="avatar"
        width="55px"
      />
      <div className={styles.textGroup}>
        <div className={styles.writtenBy}>Written By</div>
        <div className={styles.authorName}>
          {author.firstName + " " + author.lastName}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
