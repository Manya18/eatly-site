import React, { useEffect } from "react";
import styles from "./recipesScreen.module.css";
import chickenKing1 from "../../../assets/images/organisms/ChickenKing.svg";
import burgerKing from "../../../assets/images/organisms/BurgerKing.svg";
import chickenKing2 from "../../../assets/images/organisms/ChickenKing2.svg";
import Recipe from "../../molecules/recipeCard/Recipe";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import HrTypeStyled from "../../atoms/hrTypeStyled/HrTypeStyled";
import ColumnTemplate from "../../templates/columnTemplate/ColumnTemplate";

const recepies = [
  {
    imgUrl: chickenKing1,
    category: "Pizza",
    name: "The Chicken King",
    time: "24min",
    rating: "4.8",
  },
  {
    imgUrl: burgerKing,
    category: "Pizza",
    name: "The Burger King",
    time: "24min",
    rating: "4.9",
  },
  {
    imgUrl: chickenKing2,
    category: "Pizza",
    name: "The Chicken King",
    time: "24min",
    rating: "4.8",
  },
];

const RecipesPage = () => {


  const takeThreeTopLunches = (lanches: any) => {
    const recipes = lanches.recipes;
    let threeTopLunches = []
    recipes.sort((a: any, b: any) => b.rating - a.rating);

    console.log('recipes', recipes)
    threeTopLunches = recipes.slice(0, 3);
    console.log('threeTopLunches', threeTopLunches)
    return threeTopLunches;
  }

  useEffect(() => {
    const fetchLunch = async () => {
      const responce = await fetch("https://dummyjson.com/recipes/meal-type/Lunch");
      const lunches = (await responce.json());
      takeThreeTopLunches(lunches)
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
          {recepies.map((rec) => (
            <div key={rec.imgUrl}>
              <Recipe
                imgUrl={rec.imgUrl}
                category={rec.category}
                name={rec.name}
                time={rec.time}
                rating={rec.rating}
              />
            </div>
          ))}
        </section>
      </ColumnTemplate>
      <HrTypeStyled />
    </article>
  );
};

export default RecipesPage;
