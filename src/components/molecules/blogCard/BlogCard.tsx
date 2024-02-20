import { Link } from "react-router-dom";
import { IPostProps } from "../../../types/APItypes/PostProps";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import styles from "./blogCard.module.css";

const BlogCard = ({ data }: { data: IPostProps }) => {
  // обрезаем первые 3 строки
  const truncateText = () => {
    const words = data.body.split(" ");
    let truncatedText = words[0];
    words.shift();
    let currentLines = 0;
    let count = 0;

    for (let word of words) {
      if (currentLines < 3) {
        count += (" " + word).length;
        if (count <= 32) {
          truncatedText += " " + word;
        } else {
          currentLines++;
          count = 0;
          if (currentLines < 3) truncatedText += " " + word;
        }
      } else break;
    }
    truncatedText = truncatedText.trim();
    if ((truncatedText + "...").length >= 100) {
      truncatedText.slice(0, truncatedText.lastIndexOf(" "));
      truncatedText += "...";
    }
    return truncatedText;
  };

  return (
    <Link to={`../article/${data.id}`} key={data.id.toString()} className={styles.card}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.addons}>
        <div className={styles.tags}>
          {data.tags.map((tag: string) => (
            <span key={tag}>{"#" + tag}</span>
          ))}
        </div>
        <span className={styles.reactions}>
          {data.reactions.toString()} <StyledSpan>&#9733;</StyledSpan>
        </span>
      </div>
      <p className={styles.body}>{truncateText()}</p>
    </Link>
  );
};

export default BlogCard;
