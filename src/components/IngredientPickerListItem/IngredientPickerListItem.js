import React from 'react';
import { Ingredient } from './IngredientPickerListItem.elements';

export const IngredientPickerListItem = (props) => {

  function handleClick() {
    props.handleAddPickedIngredient(props.ingredient)
  }

  return (
    // <Ingredient onClick={handleClick}>  
    //   {props.ingredient.name}
    // </Ingredient>
  );
};

 
