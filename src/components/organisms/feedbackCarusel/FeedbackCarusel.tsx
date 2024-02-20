import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import styles from "./feedbackCarusel.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetSomeCommentsQuery } from "../../../redux/features/api/fetch.api";

const FeedbackCarusel = () => {
  const { data } = useGetSomeCommentsQuery(6);

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
        {data?.comments.map((com) => (
          <div className={styles.cardDiv} key={com.id}>
            <FeedbackCard data={com} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarusel;
