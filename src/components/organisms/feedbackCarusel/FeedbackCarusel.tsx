import Slider from "react-slick";
import FeedbackCard from "../../molecules/feedbackCard/FeedbackCard";
import { useState, useEffect } from "react";
import { CommentsProps } from "../../../types/APItypes/CommentsProps";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

const FeedbackCarusel = () => {

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
        <Slider {...settings}>
        </Slider>
     );
}
 
export default FeedbackCarusel;