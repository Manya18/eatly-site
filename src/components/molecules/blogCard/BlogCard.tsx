import { Link } from "react-router-dom";
import { IPostProps } from "../../../types/APItypes/PostProps";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import styles from "./blogCard.module.css";

const BlogCard = ({ postData }: { postData: IPostProps }) => {

  const lenght = 36 * 3 - 3;
  let text = postData.body
  text = text.slice(0, lenght);
  text = text.slice(0, text.lastIndexOf(" "));
  text += "..."

  return (
    <Link
      to={`../article/${postData.id}`}
      key={postData.id.toString()}
      className={styles.card}
    >
      <div className={styles.title}>{postData.title}</div>
      <div className={styles.addons}>
        <div className={styles.tags}>
          {postData.tags.map((tag: string) => (
            <span key={tag}>{"#" + tag}</span>
          ))}
        </div>
        <span className={styles.reactions}>
          {postData.reactions.toString()} <StyledSpan>&#9733;</StyledSpan>
        </span>
      </div>
      <p className={styles.body}>{text}</p>
    </Link>
  );
};

export default BlogCard;
