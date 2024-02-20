import { IPostProps } from "../../../types/APItypes/PostProps";
import BlogCard from "../../molecules/blogCard/BlogCard";
import styles from "./blogCardGroup.module.css";

const BlogCardGroup = ({ data }: { data: IPostProps[] }) => {

  return (
    <div className={styles.container}>
      {data.map((post) => (
        <BlogCard data={post} />
      ))}
    </div>
  );
};

export default BlogCardGroup;
