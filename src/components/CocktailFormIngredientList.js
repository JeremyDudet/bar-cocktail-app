import React from 'react'
import CocktailFormIngredientListItem from './CocktailFormIngredientListItem'


const CocktailFormIngredientList = (props) => {
  
  return (
    <>
      {props.recipeIngredients.map((ingredient) => {
        return <CocktailFormIngredientListItem ingredient={ingredient} setRecipe={props.setRecipeIngredients} handleRemoveRecipeIngredient={props.handleRemoveRecipeIngredient}/>
      })}
    </>
  );
};


export default CocktailFormIngredientList;

