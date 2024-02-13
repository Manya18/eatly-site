import styles from "./recipe.module.css";
import bookmark from "../../../images/recepiesPage/Bookmark.svg";
import StyledSpan from "../../uiComponents/StyledSpan";

interface Props {
  imgUrl: string;
  category: string;
  name: string;
  time: string;
  rating: string;
};

const Recipe: React.FC<Props> = ({ imgUrl, category, name, time, rating }) => {
  return (
    <section className={styles.recipesCard}>
      <img className={styles.dishImg} src={imgUrl} loading="lazy" alt="chicken king" />
      <div className={styles.dishInfo}>
        <div className={styles.visibleInfo}>
          <div className={styles.category}>{category}</div>
          <div className={styles.dishName}>{name}</div>
          <div className={styles.paramsGroup}>
            <span className={styles.param}>{time} •</span>
            <span className={styles.param}>
              <StyledSpan text="&#9733; " />
              {rating}
            </span>
          </div>
        </div>
        <img className={styles.bookmark} src={bookmark} loading="lazy" alt="bookmark" />
      </div>
    </section>
  );
};

export default Recipe;
