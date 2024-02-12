import React from "react";
import styles from "./topRecipes.module.css"
import chickenKing1 from "../../images/recepiesPage/chickenKing.svg"
import burgerKing from "../../images/recepiesPage/BurgerKing.svg"
import chickenKing2 from "../../images/recepiesPage/ChickenKing2.svg"
import Recipe from "./Recipe";

const recepies = [
    {
        imgUrl: chickenKing1,
        category: 'Pizza',
        name: 'The Chicken King',
        time: '24min',
        rating: '4.8'
    },
    {
        imgUrl: burgerKing,
        category: 'Pizza',
        name: 'The Burger King',
        time: '24min',
        rating: '4.9'
    },
    {
        imgUrl: chickenKing2,
        category: 'Pizza',
        name: 'The Chicken King',
        time: '24min',
        rating: '4.8'
    },
]

const TopRecipesPage = () => {

    return ( 
        <div className={styles.container}>
            <div className={styles.title}>Our Top <span>Recipes</span></div>
            <div className={styles.recipesCardGroup}>
                {recepies.map((rec) => (
                    <Recipe imgUrl={rec.imgUrl} category={rec.category} name={rec.name} time={rec.time} rating={rec.rating} />
                ))}
            </div>
            <button className={styles.hideButton}>View All &#10230;</button>
            <hr />
        </div>
     );
}
 
export default TopRecipesPage;