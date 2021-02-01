// core
import React, { useState } from 'react';

// global state management
import { connect } from 'react-redux';
import { startRemoveIngredient, startEditIngredient } from '../../redux/actions/ingredients';

// functional components
import { IngredientForm, IngredientListFilters, IngredientList, DeleteConfirmation } from '../../components';

// styled components
import { Container, PageTitle } from '../../globalStyles';
import { 
  InfoSec, 
  InfoRow,
  InfoColumn,
  InnerInfoColumn,
  IngredientsWrapper,
  CancelButton,
  DeleteButton,
} from './EditIngredientPage.elements';


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
  
  async function handleSetSelectIngredient(ingredient) {
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
            <IngredientsWrapper>
              <IngredientList handleSelectIngredient={handleSetSelectIngredient} selectedIngredient={selectedIngredient} />
            </IngredientsWrapper>
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

// you grab state from the store and you pass it in as an object property called expense


export default connect()(EditIngredientPage);