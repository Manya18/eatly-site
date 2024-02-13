import React from "react";
import styles from "./recipesPage.module.css";
import chickenKing1 from "../../images/recepiesPage/chickenKing.svg";
import burgerKing from "../../images/recepiesPage/BurgerKing.svg";
import chickenKing2 from "../../images/recepiesPage/ChickenKing2.svg";
import Recipe from "./recipeCard/Recipe";
import StyledSpan from "../uiComponents/StyledSpan";
import TitleTypeSecondary from "../uiComponents/TitleTypeSecondary";

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
  return (
    <article className={styles.container}>
      <TitleTypeSecondary>
        Our Top <StyledSpan>Recipes</StyledSpan>
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
      <button className={styles.hideButton}>View All &#10230;</button>
      <hr />
    </article>
  );
};

export default RecipesPage;
