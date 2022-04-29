import React from 'react';
import { connect } from 'react-redux';
import { selectIngredients } from '../../selectors/ingredients';
import { IngredientsWrapper, Ingredient } from './IngredientList.elements';

// This one is connected to the redux state which is connected to firebase database.
//  For every ingredient in the store, it renders an IngredientListItem in the IngredientList
const IngredientList = (props) => {
  // function handleDisabled(ingredient) {
  //   let status = false;
  //   props.recipeIngredients.forEach( recipeIngredient => {
  //     if (recipeIngredient.id === ingredient.id) {
  //       status = true;
  //     }
  //   });
  //   return status;
  // }

  return (
    <>
      <IngredientsWrapper>
        {props.ingredients.map((ingredient) => {
          // for each ingredient that is passed down from redux/firebase - render an IngredientListItem
          return (
            <Ingredient
              key={ingredient.id}
              onClick={() => props.handleSelectedIngredient(ingredient.id)}
              // disabled={(props.recipeIngredients ? handleDisabled(ingredient) : false)}
              selected={props.selectedIngredient?.id === ingredient.id}
            >
              {ingredient.name}
            </Ingredient>
          );
        })}
      </IngredientsWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: selectIngredients(
      state.ingredients,
      state.ingredientFilters,
      true
    ),
  };
};

// HOC
export default connect(mapStateToProps)(IngredientList);
