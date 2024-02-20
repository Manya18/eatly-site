import React, { useEffect, useState } from "react";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import { ICommentsProps } from "../../../types/APItypes/CommentsProps";
import styles from "./feedbackCarusel.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackCarusel = () => {
  const [comments, setComments] = useState<ICommentsProps[]>([
    {
      body: "",
      id: 0,
      postId: 0,
      user: {
        id: 0,
        username: "",
      },
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchComments = async () => {
      const responce = await fetch("https://dummyjson.com/comments");
      const commentsArr = await responce.json();
      setComments(commentsArr.comments.slice(0, 6));
    };

    fetchComments();
  }, []);

  console.log(comments);

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {comments.map((com) => (
          <div className={styles.cardDiv} key={com.id}>
            <FeedbackCard
              id={com.id}
              personName={com.user.username}
              quote={com.body}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarusel;
