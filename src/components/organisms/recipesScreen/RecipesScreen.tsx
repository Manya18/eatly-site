import styles from "./recipesScreen.module.css";
import Recipe from "../../molecules/recipeCard/Recipe";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import {
  IRecipesProps,
  RecipesProps,
} from "../../../types/APItypes/RecipesProps";
import { useGetRecipesQuery } from "../../../redux/features/api/fetch.api";

const RecipesPage = () => {
  const { data } = useGetRecipesQuery("");

  const takeThreeTopLunches = (lanches: RecipesProps) => {
    const recipes = [...lanches.recipes];
    let threeTopLunches = [];
    recipes.sort((a: IRecipesProps, b: IRecipesProps) => b.rating - a.rating);

    threeTopLunches = recipes.slice(0, 3);

    return threeTopLunches;
  };

  return (
    <article id="recipes">
      <ColumnTemplate>
        <TitleTypeSecondary>
          Our Top <StyledSpan>Lunch</StyledSpan>
        </TitleTypeSecondary>
        <section className={styles.recipesCardGroup}>
          {data &&
            takeThreeTopLunches(data)?.map((rec) => (
              <div key={rec.image}>
                <Recipe data={rec}
                />
              </div>
            ))}
        </section>
      </ColumnTemplate>
      <HrTypeStyled needMargin={true} />
    </article>
  );
};

export default RecipesPage;
