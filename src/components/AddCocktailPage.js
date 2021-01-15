// core imports
import React, { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// redux store actions
import { startAddIngredient } from '../redux/actions/ingredients';
import { startAddCocktail } from '../redux/actions/cocktails';

//components
import CocktailForm from './CocktailForm';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList/IngredientList';
import IngredientListFilters from './IngredientListFilters/IngredientListFilters';

const AddCocktailPage = (props) => {
  
  // array of objects
  const [ recipeIngredients , setRecipeIngredients ] = useState(props.cocktail ? props.cocktail.recipe : []);

  const history = useHistory();

  function adjustRecipeIngredientFormat({ id, name, amount = '', units = 'oz', alcoholic, vegan, available }) {
    return ({
      id,
      name,
      amount,
      units,
      alcoholic,
      vegan,
      available
    });
  }

  function handleAddRecipeIngredient(ingredient) {
    const newIngredient = adjustRecipeIngredientFormat(ingredient);
    const newList = [...recipeIngredients];
    newList.push(newIngredient);
    setRecipeIngredients(newList);
  }

  function handleRemoveRecipeIngredient(ingredient) {
    const removedIngredient = ingredient;
    const newList = recipeIngredients.filter(ingredient => ingredient.id !== removedIngredient.id);
    setRecipeIngredients(newList);
  }

  return (
    <div>  
      <h1>New Cocktail Form</h1>
      <CocktailForm
        onSubmit={(cocktail) => {
          props.dispatch(startAddCocktail(cocktail));
          history.push('/'); // it's like someone clicked a link, so we can use the back button.
        }}
        recipeIngredients={recipeIngredients}
        setRecipeIngredients={setRecipeIngredients}
        handleRemoveRecipeIngredient={handleRemoveRecipeIngredient}
      />

      <hr/>
      
      <IngredientListFilters/>
      <IngredientList 
        handleAddRecipeIngredient={handleAddRecipeIngredient}
        recipeIngredients={recipeIngredients}
      /> {/* pass down handler that updates this function's state */}
      
      <hr/>
      
      <h4>Can't find ingredient? </h4>
      <h5>Add new ingredient to your bar's database...</h5>
      <IngredientForm 
        onSubmit={(ingredient) => {
          props.dispatch(startAddIngredient(ingredient));
        }}
      />
    </div>
  );
}


export default connect()(AddCocktailPage);