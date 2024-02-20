import arrow from "../../../assets/images/molecules/arrow-right.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useGetAuthorQuery,
  useGetSinglePostQuery,
} from "../../../redux/features/api/fetch.api";
import styles from "./post.module.css";

const Article = () => {
  const urlParameters = useParams();
  const id = urlParameters.articleId || "1";
  const { data: articleInfo } = useGetSinglePostQuery(id);
  const { data: authorInfo } = useGetAuthorQuery(id);

  return (
    <div key={articleInfo?.id} className={styles.article}>
      <div className={styles.title}>{articleInfo?.title}</div>
      <div className={styles.infoGroup}>
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
        <div className={styles.addons}>
          <div className={styles.reactions}>
            {articleInfo?.reactions} <StyledSpan>&#9733;</StyledSpan>
          </div>
          <div className={styles.tags}>
            {articleInfo?.tags.map((tag: string) => (
              <span key={tag}>{"#" + tag} </span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.body}>{articleInfo?.body}</div>
      <Link to="/blog" className={styles.backLink}>
        <img src={arrow} alt="back" />
        <label>All Articles</label>
      </Link>
    </div>
  );
};

export default Article;
