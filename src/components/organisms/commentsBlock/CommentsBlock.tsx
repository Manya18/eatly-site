import { useState } from "react";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import ButtonTypePrimary from "../../atoms/buttonTypePrimary/ButtonTypePrimary";
import InputTypePrimary from "../../atoms/inputTypePrimary/InputTypePrimary";
import SpanTypeViolet from "../../atoms/spanTypeViolet/SpanTypeViolet";
import styles from "./commentsBlock.module.css";
import { CommentsProps } from "../../../types/APItypes/CommentsProps";
import { addComment } from "../../../services/addComment";
import APIError from "../../atoms/APIError/APIError";

const CommentsBlock: React.FC<CommentsProps> = (props) => {
  const [commentBody, setCommentBody] = useState("");
  const [commentsArray, setCommentsArray] = useState(props?.comments || []);
  const [error, setError] = useState<any>(null);
  const [isBodyEmpty, setIsBodyEmpty] = useState(false);

  const handleAdd = async () => {
    try {
      if (commentBody.trim() === "") {
        setIsBodyEmpty(true);
        return;
      } else {
        setIsBodyEmpty(false);
        const postId = props.comments[0].postId;
        const newComment = await addComment(commentBody, postId, 5);
        setCommentsArray((commentsArray) => [...commentsArray, newComment]);
        setCommentBody("");
      }
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <APIError/>;
  }

  return (
    <div className={styles.commentsBlock}>
      <span className={styles.title}>Comments</span>
      {commentsArray.map((com) => (
        <div key={com.id} className={styles.commentsGroup}>
          <FeedbackCard data={com} />
        </div>
      ))}
      <div>
        <InputTypePrimary
          name="comment"
          placeholder="ENTER YOUR COMMENT"
          label={
            <div>
              Add <SpanTypeViolet>Comment</SpanTypeViolet>
            </div>
          }
          onChange={(e: any) => {
            setCommentBody(e.target.value);
          }}
          value={commentBody}
        />
        {isBodyEmpty && (
          <span className={styles.bodyEmpty}>Please, fill in the field.</span>
        )}
        <ButtonTypePrimary
          onClick={() => {
            handleAdd();
          }}
          style={styles.buttonStyle}
        >
          Send
        </ButtonTypePrimary>
      </div>
    </div>
  );
};

export default CommentsBlock;
