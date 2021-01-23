import React from 'react'
import CocktailFormIngredientListItem from './CocktailFormIngredientListItem'


const CocktailFormIngredientList = (props) => {

  const styles = {
    display: 'grid',
    justifyItems: 'left',
    alignItems: "center",
    margin: '10px 0 0 0',
    gap: "0.5rem",
    border: "2px solid rgb(95, 99, 189)",
    borderRadius: "8px",
  }
  
  return (
    <div style={styles}>
      {props.recipeIngredients.map((ingredient) => {
        return <CocktailFormIngredientListItem ingredient={ingredient} setRecipe={props.setRecipeIngredients} handleRemoveRecipeIngredient={props.handleRemoveRecipeIngredient}/>
      })}
    </div>
  );
};


export default CocktailFormIngredientList;

