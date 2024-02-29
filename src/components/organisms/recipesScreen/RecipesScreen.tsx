import styles from "./recipesScreen.module.css";
import Recipe from "../../molecules/recipeCard/Recipe";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import GetRecipes from "../../../services/getRecipes";
import { Skeleton } from "@mui/material";

const RecipesPage = () => {
  const { recipes, loading, error } = GetRecipes();
  if (error) {
    console.log(error);
    window.location.href = "/";
  }

  return (
    <article id="recipes">
      <ColumnTemplate>
        <TitleTypeSecondary>
          Our Top <StyledSpan>Lunch</StyledSpan>
        </TitleTypeSecondary>
        <section className={styles.recipesCardGroup}>
          {recipes?.map((rec) => (
            <div key={rec.image}>
              {loading ? (
                <Skeleton variant="rounded">
                  <Recipe data={rec} />{" "}
                </Skeleton>
              ) : (
                <Recipe data={rec} />
              )}
            </div>
          ))}
        </section>
      </ColumnTemplate>
      <HrTypeStyled needMargin={true} />
    </article>
  );
};

export default RecipesPage;
