import styles from "./recipe.module.css";
import bookmark from "../../../assets/images/molecules/Bookmark.svg";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import { IRecipesProps } from "../../../types/APItypes/RecipesProps";

const Recipe = ({ data }: { data: IRecipesProps }) => {
  return (
    <section className={styles.recipesCard}>
      <img className={styles.dishImg} src={data.image} loading="lazy" alt={data.name} />
      <div className={styles.dishInfo}>
        <div className={styles.visibleInfo}>
          <div className={styles.category}>{data.mealType[0]}</div>
          <h3 className={styles.dishName}>{data.name}</h3>
          <div className={styles.paramsGroup}>
            <span className={styles.param}>{data.cookTimeMinutes} min •</span>
            <span className={styles.param}>
              <StyledSpan>&#9733; </StyledSpan>
              {data.rating}
            </span>
          </div>
        </div>
        <img
          className={styles.bookmark}
          src={bookmark}
          loading="lazy"
          alt="bookmark"
        />
      </div>
    </section>
  );
};

export default Recipe;
