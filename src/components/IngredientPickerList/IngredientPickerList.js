import React from 'react';
import { connect } from 'react-redux';
import { selectIngredients } from '../../selectors/ingredients';
import { Ingredient } from './IngredientPickerList.elements';
// import IngredientListItem from './IngredientListItem';
// import selectIngredients from '../selectors/ingredients';


// This one is connected to the redux state which is connected to firebase database. 
//  For every ingredient in the store, it renders an IngredientListItem in the IngredientList
const IngredientPickerList = (props) => {

  function handleDisabled(ingredient) {
    let status = false;
    props.cocktailFilters.ingredients.forEach( selectedIngredient => {
      if (selectedIngredient.id === ingredient.id) {
        return status = true;
      }
    });
    return status;
  }
   
  return (
    <>
      { props.allIngredients 
        ? props.allIngredients.map(ingredient => (// for each ingredient that is passed down from redux/firebase - render an IngredientListItem
          <Ingredient
            key={ingredient.id} 
            onClick={() => props.handleSelectedIngredient(ingredient)}
            selected={(ingredient.available === "true")}
          >{ingredient.name}</Ingredient> 
        ))
        : props.filteredIngredients.map(ingredient => ( // for each ingredient that is passed down from redux/firebase - render an IngredientListItem
          <Ingredient
            key={ingredient.id} 
            onClick={() => props.handleSelectedIngredient(ingredient)}
            disabled={handleDisabled(ingredient)}
            style={{color: "rgb(95, 99, 189)", border: "1px solid rgb(95, 99, 189)"}}
          >{ingredient.name}</Ingredient>
        ))
      } 
    </>
  );
};  

const mapStateToProps = (state) => {
  return {
    filteredIngredients: selectIngredients(state.ingredients, state.ingredientFilters),
    cocktailFilters: state.cocktailFilters,
  };
};

//HOC
export default connect(mapStateToProps)(IngredientPickerList); 

// // saved ingredients are stored in redux and firebase
// // and passed onto this function as props
