import React, { useEffect, useState } from "react";
import styles from "./recipesScreen.module.css";
import chickenKing1 from "../../../assets/images/organisms/ChickenKing.svg";
import Recipe from "../../molecules/recipeCard/Recipe";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";
import { RecipesProps } from "../../../types/APItypes/RecipesProps";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<RecipesProps>({
    recipes: [
      {
        caloriesPerServing: 0,
        cookTimeMinutes: 0,
        cuisine: "",
        difficulty: "",
        id: 0,
        image: "",
        ingredients: [""],
        instructions: [""],
        mealType: [""],
        name: "",
        prepTimeMinutes: 0,
        rating: 0,
        reviewCount: 0,
        servings: 0,
        tags: [""],
        userId: 0,
      },
    ],
  });

  const takeThreeTopLunches = (lanches: any) => {
    const recipes = lanches.recipes;
    let threeTopLunches = [];
    recipes.sort((a: any, b: any) => b.rating - a.rating);

    threeTopLunches = recipes.slice(0, 3);
    return threeTopLunches;
  };

  useEffect(() => {
    const fetchLunch = async () => {
      const responce = await fetch(
        "https://dummyjson.com/recipes/meal-type/Lunch"
      );
      const lunches = await responce.json();
      setRecipes({recipes: takeThreeTopLunches(lunches)});
    };

    fetchLunch();
  }, []);

  return (
    <article id="recipes">
      <ColumnTemplate>
        <TitleTypeSecondary>
          Our Top <StyledSpan>Lunch</StyledSpan>
        </TitleTypeSecondary>
        <section className={styles.recipesCardGroup}>
          {recipes.recipes.map((rec) => (
            <div key={rec.image}>
              <Recipe
                imgUrl={rec.image}
                category={rec.mealType[0]}
                name={rec.name}
                time={rec.cookTimeMinutes.toString()}
                rating={rec.rating.toString()}
              />
            </div>
          ))}
        </section>
      </ColumnTemplate>
      <HrTypeStyled needMargin={true}/>
    </article>
  );
};

export default RecipesPage;
