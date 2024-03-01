import { describe, expect, test } from "@jest/globals";
import { RecipesProps } from "../../../types/APItypes/RecipesProps";
import { takeThreeTopLunches } from "../../../services/getRecipes";

const testRecipes: RecipesProps = {
  recipes: [
    {
      caloriesPerServing: 12,
      cookTimeMinutes: 12,
      cuisine: "",
      difficulty: "",
      id: 0,
      image: "",
      ingredients: [""],
      instructions: [""],
      mealType: [""],
      name: "",
      prepTimeMinutes: 80,
      rating: 3.1,
      reviewCount: 12,
      servings: 2,
      tags: [""],
      userId: 1,
    },
    {
      caloriesPerServing: 12,
      cookTimeMinutes: 12,
      cuisine: "",
      difficulty: "",
      id: 1,
      image: "",
      ingredients: [""],
      instructions: [""],
      mealType: [""],
      name: "",
      prepTimeMinutes: 80,
      rating: 5,
      reviewCount: 12,
      servings: 2,
      tags: [""],
      userId: 2,
    },
    {
      caloriesPerServing: 12,
      cookTimeMinutes: 12,
      cuisine: "",
      difficulty: "",
      id: 2,
      image: "",
      ingredients: [""],
      instructions: [""],
      mealType: [""],
      name: "",
      prepTimeMinutes: 80,
      rating: 4.3,
      reviewCount: 12,
      servings: 2,
      tags: [""],
      userId: 3,
    },
    {
        caloriesPerServing: 12,
        cookTimeMinutes: 12,
        cuisine: "",
        difficulty: "",
        id: 3,
        image: "",
        ingredients: [""],
        instructions: [""],
        mealType: [""],
        name: "",
        prepTimeMinutes: 80,
        rating: 4,
        reviewCount: 12,
        servings: 2,
        tags: [""],
        userId: 4,
      },
  ],
};

describe("sort recepies array", () => {
  test("correct top-3 recipes", () => {
    expect(takeThreeTopLunches(testRecipes)).toHaveLength(3);
    expect(takeThreeTopLunches(testRecipes)[0].rating).toBeGreaterThanOrEqual(takeThreeTopLunches(testRecipes)[1].rating);
    expect(takeThreeTopLunches(testRecipes)[1].rating).toBeGreaterThanOrEqual(takeThreeTopLunches(testRecipes)[2].rating);
  });
});
