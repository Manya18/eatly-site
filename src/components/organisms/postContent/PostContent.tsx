import { Link } from "react-router-dom";
import arrow from "../../../assets/images/molecules/arrow-right.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import UserHeader from "../../molecules/userHeader/UserHeader";
import TagsGroup from "../../molecules/tagsGroup/TagsGroup";
import styles from "./postContent.module.css";
import { SinglePostProps } from "../../../types/APItypes/PostProps";

const PostContent = ({ props }: { props: SinglePostProps }) => {
  const postContent = props.postContent;
  const author = props.author;

  return (
    <article key={postContent.id} className={styles.article}>
      <div className={styles.title}>{postContent.title}</div>
      <div className={styles.infoGroup}>
        <UserHeader author={author} />
        <div className={styles.addons}>
          <div className={styles.reactions}>
            {postContent.reactions} <StyledSpan>&#9733;</StyledSpan>
          </div>
          <TagsGroup props={postContent.tags || []} />
        </div>
      </div>
      <div className={styles.body}>{postContent.body}</div>
      <Link to="/blog" className={styles.backLink}>
        <img src={arrow} alt="back" />
        <label>All Articles</label>
      </Link>
    </article>
  );
};

export default PostContent;
