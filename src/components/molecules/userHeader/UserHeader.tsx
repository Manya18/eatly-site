import { useGetAuthorQuery } from "../../../redux/features/api/fetch.api";
import styles from "./userHeader.module.css";

const UserHeader = ({ id }: { id: string }) => {
  const { data: authorInfo } = useGetAuthorQuery(id);

  return (
    <div className={styles.authorCard}>
      <img
        className={styles.authorImg}
        src={authorInfo?.image}
        alt="avatar"
        loading="lazy"
        width="55px"
      />
      <div className={styles.textGroup}>
        <div className={styles.writtenBy}>Written By</div>
        <div className={styles.authorName}>
          {authorInfo?.firstName + " " + authorInfo?.lastName}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
