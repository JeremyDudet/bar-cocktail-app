// core imports
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

// global state management
import { connect } from "react-redux";
import { startAddIngredient } from '../../redux/actions/ingredients';
import { startAddCocktail, startEditCocktail } from '../../redux/actions/cocktails';

// functional components
import { 
  CocktailForm, 
  IngredientForm, 
  IngredientList, 
  IngredientListFilters 
} from '../../components';

// styled components
import { SectionHeader, SectionSubheader} from '../../globalStyles';
import { 
  CocktailFormColumn, 
  InfoColumn, 
  InfoRow, 
  InnerInfoColumn, 
} from "./AddCocktailPage.elements";


const AddCocktailPage = (props) => {

  const [ recipeIngredients , setRecipeIngredients ] = useState(props.selectedCocktail ? props.selectedCocktail.recipe : []); // array of objects
  const history = useHistory();
  
  function adjustToRecipeFormat({ id, name, amount = '', units = 'oz', alcoholic, vegan, available }) {
    return ({id, name, amount, units, alcoholic, vegan, available});
  }
  
  function handleAddRecipeIngredient(ingredient) {
    const newIngredient = adjustToRecipeFormat(ingredient);
    const newList = [...recipeIngredients];
    newList.push(newIngredient);
    setRecipeIngredients(newList);
  }
  
  function handleRemoveRecipeIngredient(ingredient) {
    const removedIngredient = ingredient;
    const newList = recipeIngredients.filter(ingredient => ingredient.id !== removedIngredient.id);
    setRecipeIngredients(newList);
  }

  

  async function handleEditCocktail(id, cocktail) {
    await props.dispatch(startEditCocktail(id, cocktail));
    props.setSelectedCocktail();
  }
  
  function handleSubmit(cocktail) {
    props.dispatch(startAddCocktail(cocktail));
    history.push('/myCocktails'); // it's like someone clicked a link, so we can use the back button.
  }
  
  return (
    <InfoRow>
      <CocktailFormColumn>
        <InnerInfoColumn style={{backgroundColor: "#2e2e2e"}}>
          <CocktailForm
            selectedCocktail={props.selectedCocktail}
            recipeIngredients={recipeIngredients}
            setRecipeIngredients={setRecipeIngredients}
            handleRemoveRecipeIngredient={handleRemoveRecipeIngredient}
            setSelectedCocktail={props.setSelectedCocktail}
            handleSetDisplayDeleteConfirmation={props.handleSetDisplayDeleteConfirmation}
            handleEditCocktail={handleEditCocktail}
            onSubmit={handleSubmit}
            />
        </InnerInfoColumn>
      </CocktailFormColumn>
      <InfoColumn>
        <InnerInfoColumn>
          <SectionHeader> Add ingredients to recipe </SectionHeader>
          <IngredientListFilters/>
          <IngredientList 
            handleSelectIngredient={handleAddRecipeIngredient}
            recipeIngredients={recipeIngredients}
            /> {/* pass down handler that updates this function's state */}
        </InnerInfoColumn>
        <InnerInfoColumn>
          <SectionHeader>Can't find ingredient? </SectionHeader>
          <SectionSubheader>Add new ingredient to your bar's database...</SectionSubheader>
          <IngredientForm 
            onSubmit={(ingredient) => {
              props.dispatch(startAddIngredient(ingredient));
            }}
            />
        </InnerInfoColumn>
      </InfoColumn>
    </InfoRow>
  );
}

export default connect()(AddCocktailPage);
