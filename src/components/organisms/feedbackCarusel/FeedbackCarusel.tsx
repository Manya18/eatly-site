import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import styles from "./feedbackCarusel.module.css";
import { Skeleton } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetAllComments from "../../../services/getAllComments";

const FeedbackCarusel = () => {
  // const { data } = useGetSomeCommentsQuery(6);
  const { allComments, loading, error } = GetAllComments(6);
  //TODO: add error

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {allComments?.comments.map((com) => (
          <div className={styles.cardDiv} key={com.id}>
            {loading ? (
              <Skeleton variant="rounded">
                <FeedbackCard data={com} />
              </Skeleton>
            ) : (
              <FeedbackCard data={com} />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarusel;
