import { useEffect, useState } from "react";
import { RecipesProps, IRecipesProps } from "../types/APItypes/RecipesProps";

const GetRecipes = () => {
  const [recipes, setRecipes] = useState<IRecipesProps[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const takeThreeTopLunches = (lanches: RecipesProps) => {
    const recipes = [...lanches.recipes];
    let threeTopLunches = [];
    recipes.sort((a: IRecipesProps, b: IRecipesProps) => b.rating - a.rating);

    threeTopLunches = recipes.slice(0, 3);

    return threeTopLunches;
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/recipes/meal-type/lunch`
        );
        const res = await response.json();
        setRecipes(takeThreeTopLunches(res));
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getData();
  }, []);
  return { recipes, loading, error };
};

export default GetRecipes;
