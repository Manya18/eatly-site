import Skeleton from "@mui/material/Skeleton/Skeleton";
import styles from "./postCardSkeleton.module.css";

const PostCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton variant="rounded" width={300} height={26} animation="wave" />
      <div className={styles.avatar}>
        <Skeleton variant="circular" width={44} height={44} animation="wave" />
        <Skeleton variant="rounded" width={130} height={45} animation="wave" />
        <Skeleton variant="rounded" width={85} height={45} animation="wave" />
      </div>
      <Skeleton variant="rounded" width={300} height={120} animation="wave" />
    </div>
  );
};

export default PostCardSkeleton;
