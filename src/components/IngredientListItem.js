import React, { useState, useEffect } from 'react'

const IngredientListItem = (props) => {
  
  const [ isDisabled, setIsDisabled ] = useState(false);

  useEffect(() => {
    setIsDisabled(() => {
      let status = false;
      props.recipeIngredients.map( recipeIngredient => {
        if (recipeIngredient.id === props.ingredient.id) {
          return status = true;
        }
      })
      return status;
    })
  });

  function handleClick() {
    props.handleAddRecipeIngredient(props.ingredient);
  }

  return (
    <li>
      <button onClick={handleClick} disabled={false} >
        <strong>{props.ingredient.name}</strong>
      </button>
    </li>
  );
}
// you can leave the first connect "call" empty - this will just pass down props.dispatch

export default IngredientListItem;