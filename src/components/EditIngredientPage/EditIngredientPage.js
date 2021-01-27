import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { IngredientForm, IngredientListFilters, IngredientList } from '../../components';
import { Container } from '../../globalStyles';
import { startRemoveIngredient, startEditIngredient } from '../../redux/actions/ingredients';
import { 
  InfoSec, 
  InfoRow,
  InfoColumn,
  IngredientsWrapper,
  SectionHeader,
  SectionSubheader,
  CancelButton,
  DeleteButton,
  DeleteConfirmation,
  DeleteConfirmationCard,
  WarningDescription,
  CancelDeleteButton,
  ConfirmDeleteButton
} from './EditIngredientPage.elements';

const DeleteConfirmationComponent = (props) => (
  <>
    <DeleteConfirmation displayInfo={props.displayInfo}></DeleteConfirmation>
    <DeleteConfirmationCard>
      <WarningDescription >{`Deleting ${JSON.stringify(props.selectedIngredient.name)} will affect all the cocktails that have this ingredient in their recipe.`}</WarningDescription>
      <WarningDescription style={{color: "#F66E73"}}>Are you sure you want to DELETE?</WarningDescription>
      <CancelDeleteButton onClick={props.handleSetDisplayDeleteConfirmation}>Don't Delete</CancelDeleteButton>
      <ConfirmDeleteButton onClick={props.handleDeleteIngredient}>Yes, Delete.</ConfirmDeleteButton>
    </DeleteConfirmationCard>
  </>
);


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
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            { displayDeleteConfirmation && 
              <DeleteConfirmationComponent 
                selectedIngredient={selectedIngredient}
                displayInfo={displayDeleteConfirmation} 
                handleSetDisplayDeleteConfirmation={handleSetDisplayDeleteConfirmation} 
                handleDeleteIngredient={handleDeleteIngredient}
              /> 
            }
            <InfoColumn>
              <SectionHeader>Select ingredient you want to edit</SectionHeader>
              <IngredientListFilters/>
              <IngredientsWrapper>
                <IngredientList handleSelectIngredient={handleSetSelectIngredient} selectedIngredient={selectedIngredient} />
              </IngredientsWrapper>
            </InfoColumn>
            <InfoColumn>
              { selectedIngredient ? 
                (
                  <>
                    <CancelButton onClick={() => setSelectedIngredient()}>CANCEL EDIT</CancelButton>
                    <IngredientForm 
                      ingredient={selectedIngredient}
                      onSubmit={onSubmit}
                    />
                    <DeleteButton onClick={handleSetDisplayDeleteConfirmation}>delete</DeleteButton>
                  </>
                ) : 
                (
                  <>
                    <SectionHeader>Selected Ingredient</SectionHeader>
                    <div style={{color: "#555"}}>...select ingredient to edit</div>
                  </>
                )
              }
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

// you grab state from the store and you pass it in as an object property called expense


export default connect()(EditIngredientPage);