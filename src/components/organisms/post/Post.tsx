import { useParams, Link } from "react-router-dom";
import arrow from "../../../assets/images/molecules/arrow-right.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import { useGetSinglePostQuery } from "../../../redux/features/api/fetch.api";
import UserHeader from "../../molecules/userHeader/UserHeader";
import TagsGroup from "../../molecules/tagsGroup/TagsGroup";
import styles from "./post.module.css";


const Post = () => {
  const urlParameters = useParams();
  const id = urlParameters.articleId || "1";
  const { data: articleInfo } = useGetSinglePostQuery(id);

  return (
    <article key={articleInfo?.id} className={styles.article}>
      <div className={styles.title}>{articleInfo?.title}</div>
      <div className={styles.infoGroup}>
        <UserHeader id={id} />
        <div className={styles.addons}>
          <div className={styles.reactions}>
            {articleInfo?.reactions} <StyledSpan>&#9733;</StyledSpan>
          </div>
          <TagsGroup props={articleInfo?.tags || []} />
        </div>
      </div>
      <div className={styles.body}>{articleInfo?.body}</div>
      <Link to="/blog" className={styles.backLink}>
        <img src={arrow} alt="back" />
        <label>All Articles</label>
      </Link>
    </article>
  );
};

export default Post;
