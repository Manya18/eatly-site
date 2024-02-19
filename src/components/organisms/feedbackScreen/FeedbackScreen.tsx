import styles from "./feedbackScreen.module.css";
import divider from "../../../assets/images/organisms/divider.svg";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import { useEffect, useState } from "react";
import { CommentsProps } from "../../../types/APItypes/CommentsProps";

const feedbackData = [
  {
    body: "I cannot believe how I found you, this is so pretty.",
    id: 0,
    postId: 0,
    user: {
      id: 0,
      username: "omottley2h",
    },
  },
  {
    body: "I cannot believe how I found you, this is so pretty.",
    id: 0,
    postId: 0,
    user: {
      id: 0,
      username: "omottley2h",
    },
  },
];

const FeedbackPage = () => {

  const [comments, setComments] = useState<CommentsProps>({
    comments: [
      {
        body: "",
        id: 0,
        postId: 0,
        user: {
          id: 0,
          username: "",
        },
      },
    ],
  });

  useEffect(() => {
    const fetchComments = async () => {
      const responce = await fetch("https://dummyjson.com/comments");
      const comments = await responce.json();
      setComments({comments: comments.comments.slice(0, 3)});
    };

    fetchComments();
  }, []);

  console.log(comments)

  return (
    <ColumnTemplate>
      <TitleTypeSecondary>
        <StyledSpan>Customer</StyledSpan> Say
      </TitleTypeSecondary>
      <div className={styles.feedbackCardGroup}>
        <FeedbackCard
          personName={feedbackData[0].user.username}
          quote={feedbackData[0].body}
        />
        <div className={styles.cardDividerGroup}>
          <FeedbackCard quote={feedbackData[1].body} />
          <img
            className={styles.divider}
            loading="lazy"
            src={divider}
            alt="divider"
          />
        </div>
      </div>
    </ColumnTemplate>
  );
};

export default FeedbackPage;
