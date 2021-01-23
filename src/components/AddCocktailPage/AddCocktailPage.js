// core imports
import React, { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// redux store actions
import { startAddIngredient } from '../../redux/actions/ingredients';
import { startAddCocktail } from '../../redux/actions/cocktails';

// components
import CocktailForm from '../CocktailForm/CocktailForm';
import IngredientForm from '../IngredientForm';
import IngredientList from '../IngredientList/IngredientList';
import IngredientListFilters from '../IngredientListFilters/IngredientListFilters';

// styles
import { Container } from '../../globalStyles';
import { InfoSec, CocktailFormColumn, InfoColumn, InfoRow, InfoInnerRow, } from "./AddCocktailPage.elements";

const AddCocktailPage = (props) => {
  
  // array of objects
  const [ recipeIngredients , setRecipeIngredients ] = useState(props.cocktail ? props.cocktail.recipe : []);

  const history = useHistory();

  function adjustRecipeIngredientFormat({ id, name, amount = '', units = 'oz', alcoholic, vegan, available }) {
    return ({id, name, amount, units, alcoholic, vegan, available});
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
    <InfoSec>
      <Container>
        <h1>Add New Cocktail</h1>
        <InfoRow>
          <CocktailFormColumn>
            <CocktailForm
              onSubmit={(cocktail) => {
                props.dispatch(startAddCocktail(cocktail));
                history.push('/'); // it's like someone clicked a link, so we can use the back button.
              }}
              recipeIngredients={recipeIngredients}
              setRecipeIngredients={setRecipeIngredients}
              handleRemoveRecipeIngredient={handleRemoveRecipeIngredient}
            />
          </CocktailFormColumn>
          <InfoColumn>
            <InfoInnerRow>
              <IngredientListFilters/>
              <IngredientList 
                handleAddRecipeIngredient={handleAddRecipeIngredient}
                recipeIngredients={recipeIngredients}
              /> {/* pass down handler that updates this function's state */}
            </InfoInnerRow>
            <InfoInnerRow>
              <h4>Can't find ingredient? </h4>
              <h5>Add new ingredient to your bar's database...</h5>
              <IngredientForm 
                onSubmit={(ingredient) => {
                  props.dispatch(startAddIngredient(ingredient));
                }}
              />
            </InfoInnerRow>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
}


export default connect()(AddCocktailPage);