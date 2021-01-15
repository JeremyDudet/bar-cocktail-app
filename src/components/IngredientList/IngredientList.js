import React from 'react';
import { connect } from 'react-redux';
import { selectIngredients } from '../../selectors/ingredients';
import {
  IngredientsWrapper,
  Ingredient,
} from './IngredientList.elements';

// This one is connected to the redux state which is connected to firebase database. 
//  For every ingredient in the store, it renders an IngredientListItem in the IngredientList
const IngredientList = (props) => {

  function handleDisabled(ingredient) {
    let status = false;
    props.recipeIngredients.map( recipeIngredient => {
      if (recipeIngredient.id === ingredient.id) {
        return status = true;
      }
    });
    return status;
  }
  
  return (
    <div>
      <IngredientsWrapper>
        {props.ingredients.map((ingredient) => { // for each ingredient that is passed down from redux/firebase - render an IngredientListItem
          return (
            <Ingredient 
              onClick={() => props.handleAddRecipeIngredient(ingredient)}
              key={ingredient.id}
              disabled={handleDisabled(ingredient)}
            >{ingredient.name}</Ingredient>
          );
        })} 
      </IngredientsWrapper>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    ingredients: selectIngredients(state.ingredients, state.ingredientFilters)
  };
}

//HOC
export default connect(mapStateToProps)(IngredientList); 

// saved ingredients are stored in redux and firebase
// and passed onto this function as props
