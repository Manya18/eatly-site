import { IPostProps } from "../../../types/APItypes/PostProps";
import PostCard from "../../molecules/postCard/PostCard";
import styles from "./postsGrid.module.css";

const PostsGrid = ({ data }: { data: IPostProps[] }) => {
  return (
    <div className={styles.container}>
      {data.map((post) => (
        <div key={post.id}>
          <PostCard postData={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
