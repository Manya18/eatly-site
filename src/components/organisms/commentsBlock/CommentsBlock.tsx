import { useState } from "react";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import ButtonTypePrimary from "../../atoms/buttonTypePrimary/ButtonTypePrimary";
import InputTypePrimary from "../../atoms/inputTypePrimary/InputTypePrimary";
import SpanTypeViolet from "../../atoms/spanTypeViolet/SpanTypeViolet";
import styles from "./commentsBlock.module.css";
import { CommentsProps } from "../../../types/APItypes/CommentsProps";

const CommentsBlock: React.FC<CommentsProps> = (props) => {
  const [commentBody, setCommentBody] = useState("");
  const [commentsArray, setCommentsArray] = useState(props?.comments || []);
  const [error, setError] = useState<any>(null);

  const addComment = async () => {
    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: commentBody,
          postId: props.comments[0].postId,
          userId: 5,
        }),
      });
      const res = await response.json();
      setCommentsArray((commentsArray) => [...commentsArray, res]);
    } catch (error) {
      setError(error);
    }
    setCommentBody("");
  };

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
        <ButtonTypePrimary
          onClick={() => {
            addComment();
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
