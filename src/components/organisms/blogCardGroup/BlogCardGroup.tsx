import { PostProps } from "../../../types/APItypes/PostProps";
import BlogCard from "../../molecules/blogCard/BlogCard";
import styles from "./blogCardGroup.module.css";

const data: PostProps = {
  id: 1,
  title: "His mother had always taught him",
  tags: ["history", "american", "crime"],
  reactions: 2,
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
};

const BlogCardGroup = () => {
  return (
    <div className={styles.container}>
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
      <BlogCard data={data} />
    </div>
  );
};

export default BlogCardGroup;
