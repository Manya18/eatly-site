import React from "react";
import styles from "./recipesScreen.module.css";
import chickenKing1 from "../../../assets/images/organisms/ChickenKing.svg";
import burgerKing from "../../../assets/images/organisms/BurgerKing.svg";
import chickenKing2 from "../../../assets/images/organisms/ChickenKing2.svg";
import Recipe from "../../molecules/recipeCard/Recipe";
import StyledSpan from "../../atoms/spanTypeViolet/SpanTypeViolet";
import TitleTypeSecondary from "../../atoms/titleTypeSecondary/TitleTypeSecondary";
import ButtonTypeHidden from "../../atoms/buttonTypeHidden/ButtonTypeHidden";
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
  return (
    <article>
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
        <ButtonTypeHidden onClick={() => console.log()}>
          View All &#10230;
        </ButtonTypeHidden>
      </ColumnTemplate>
      <HrTypeStyled />
    </article>
  );
};

export default RecipesPage;
