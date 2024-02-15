import styles from "./recipe.module.css";
import bookmark from "../../../assets/images/molecules/Bookmark.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import { RecipeProps } from "../../../types/RecipeProps";


const Recipe = ({ imgUrl, category, name, time, rating }: React.PropsWithChildren<RecipeProps>) => {
  return (
    <section className={styles.recipesCard}>
      <img className={styles.dishImg} src={imgUrl} loading="lazy" alt="chicken king" />
      <div className={styles.dishInfo}>
        <div className={styles.visibleInfo}>
          <span className={styles.category}>{category}</span>
          <h3 className={styles.dishName}>{name}</h3>
          <div className={styles.paramsGroup}>
            <span className={styles.param}>{time} •</span>
            <span className={styles.param}>
            <StyledSpan>&#9733; </StyledSpan>
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
