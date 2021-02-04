// core
import React, { useState } from 'react';

// global state management
import { connect } from 'react-redux';
import { startRemoveIngredient, startEditIngredient } from '../../redux/actions/ingredients';
import { selectIngredients } from "../../selectors/ingredients";

// functional components
import { IngredientForm, IngredientListFilters, DeleteConfirmation } from '../../components';

// styled components
import { Container, PageTitle } from '../../globalStyles';
import { 
  InfoSec, 
  InfoRow,
  InfoColumn,
  InnerInfoColumn,
  IngredientsWrapper,
  Ingredient,
  CancelButton,
  DeleteButton,
} from './EditIngredientPage.elements';



const IngredientList = (props) => {

  return (
    <IngredientsWrapper>
      {props.ingredients.map((ingredient) => { // for each ingredient that is passed down from redux/firebase - render an IngredientListItem
        return (
          <Ingredient 
            key={ingredient.id}
            onClick={() => props.handleSelectedIngredient(ingredient)}
            selected={(props.selectedIngredient?.id === ingredient.id)}
            disabled={(props.selectedIngredient?.id === ingredient.id)}
          >{ingredient.name}</Ingredient>
        );
      })} 
    </IngredientsWrapper>
  );
};



const EditIngredientPage = (props) => {

  const [ selectedIngredient, setSelectedIngredient ] = useState();
  const [ displayDeleteConfirmation, setDisplayDeleteConfirmation ] = useState(false);

  function setDefaultState() {
    setDisplayDeleteConfirmation(false);
    setSelectedIngredient();
  }

  function handleSetDisplayDeleteConfirmation() {
    displayDeleteConfirmation ? setDisplayDeleteConfirmation(false) : setDisplayDeleteConfirmation(true);
  }
  
  async function handleSetSelectedIngredient(ingredient) {
    await setSelectedIngredient();
    setSelectedIngredient(ingredient);
  }

  function onSubmit(ingredient) {
    props.dispatch(startEditIngredient(selectedIngredient.id, ingredient));
    setSelectedIngredient();
  }

  function handleDeleteIngredient() {
    props.dispatch(startRemoveIngredient({ id: selectedIngredient.id }));
    setDefaultState();
  }

  return (
    <InfoSec>
      <Container>
        <InfoRow>
          { displayDeleteConfirmation && 
            <DeleteConfirmation 
              selectedItem={selectedIngredient}
              displayInfo={displayDeleteConfirmation} 
              handleSetDisplayDeleteConfirmation={handleSetDisplayDeleteConfirmation} 
              handleDeleteItem={handleDeleteIngredient}
            /> 
          }
          <InfoColumn>
            <PageTitle>Select ingredient you want to edit</PageTitle>
            <IngredientListFilters/>
            <IngredientList handleSelectedIngredient={handleSetSelectedIngredient} ingredients={props.ingredients} selectedIngredient={selectedIngredient} />
          </InfoColumn>
          <InfoColumn>
            { selectedIngredient ? 
              (
                <InnerInfoColumn>
                  <CancelButton onClick={() => setSelectedIngredient()}>CANCEL EDIT</CancelButton>
                  <DeleteButton onClick={handleSetDisplayDeleteConfirmation}>Delete Ingredient</DeleteButton>
                  <IngredientForm 
                    ingredient={selectedIngredient}
                    onSubmit={onSubmit}
                  />
                </InnerInfoColumn>
              ) : 
              (
                <>
                  <div style={{color: "#555"}}>...select ingredient to edit</div>
                </>
              )
            }
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
}

const mapStateToProps = (state) => {
  return {
    ingredients: selectIngredients(state.ingredients, state.ingredientFilters, true)
  }
}

export default connect(mapStateToProps)(EditIngredientPage);