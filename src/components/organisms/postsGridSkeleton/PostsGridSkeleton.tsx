import PostCardSkeleton from "../../molecules/postCardSkeleton/PostCardSkeleton";
import styles from "./postsGridSkeleton.module.css";

const PostsGridSkeleton = () => {
  return (
    <div className={styles.container}>
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </div>
  );
};

export default PostsGridSkeleton;
