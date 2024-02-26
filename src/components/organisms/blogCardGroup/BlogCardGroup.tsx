import { IPostProps } from "../../../types/APItypes/PostProps";
import BlogCard from "../../molecules/blogCard/BlogCard";
import styles from "./blogCardGroup.module.css";

const BlogCardGroup = ({ data }: { data: IPostProps[] }) => {
  return (
    <div className={styles.container}>
      {data.map((post) => (
        <div key={post.id}>
          <BlogCard postData={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogCardGroup;
