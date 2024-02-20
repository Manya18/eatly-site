import { useParams } from "react-router-dom";
import { useGetCommentsByPostIdQuery } from "../../../redux/features/api/fetch.api";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import styles from "./commentsBlock.module.css";

const CommentsBlock = () => {
  const urlParameters = useParams();
  const id = urlParameters.articleId || "1";
  const { data } = useGetCommentsByPostIdQuery(id);

  return (
    <div className={styles.commentsBlock}>
      <span className={styles.title}>Comments</span>
      {data?.comments.map((com) => (
        <div key={com.id} className={styles.commentsGroup}>
          <FeedbackCard data={com} />
        </div>
      ))}
    </div>
  );
};

export default CommentsBlock;
