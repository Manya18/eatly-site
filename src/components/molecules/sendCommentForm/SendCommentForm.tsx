import { useState } from "react";
import ButtonTypePrimary from "../../atoms/buttonTypePrimary/ButtonTypePrimary";
import InputTypePrimary from "../../atoms/inputTypePrimary/InputTypePrimary";
import SpanTypeViolet from "../../atoms/spanTypeViolet/SpanTypeViolet";
import styles from "./sendCommentForm.module.css";
import { useParams } from "react-router-dom";

const SendCommentForm = () => {
  const [commentBody, setCommentBody] = useState("");
  const urlParameters = useParams();
  const id = urlParameters.articleId || "1";

  const addComment = () => {
    fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: commentBody,
        postId: id,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <InputTypePrimary
        name="comment"
        placeholder="ENTER YOUR COMMENT"
        value={commentBody}
        label={
          <div>
            Add <SpanTypeViolet>Comment</SpanTypeViolet>
          </div>
        }
        onChange={(e: any) => {
          setCommentBody(e.target.value);
        }}
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
  );
};

export default SendCommentForm;
