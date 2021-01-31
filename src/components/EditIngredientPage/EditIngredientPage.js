// core
import React, { useState } from 'react';

// global state management
import { connect } from 'react-redux';
import { startRemoveIngredient, startEditIngredient } from '../../redux/actions/ingredients';

// functional components
import { IngredientForm, IngredientListFilters, IngredientList } from '../../components';

// styled components
import {Container, PageTitle, SectionHeader, SectionSubheader} from '../../globalStyles';
import { 
  InfoSec, 
  InfoRow,
  InfoColumn,
  InnerInfoColumn,
  IngredientsWrapper,
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
      <WarningDescription >{`By deleting ${JSON.stringify(props.selectedIngredient.name)}, you will affect all the cocktails that have this ingredient in their recipe.`}</WarningDescription>
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
                  <IngredientForm 
                    ingredient={selectedIngredient}
                    onSubmit={onSubmit}
                  />
                  <DeleteButton onClick={handleSetDisplayDeleteConfirmation}>delete</DeleteButton>
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