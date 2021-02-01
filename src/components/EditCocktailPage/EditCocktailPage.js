// core
import React, { useState } from 'react';

// global state management
import { connect } from 'react-redux';
import { setNameFilter } from '../../redux/actions/cocktailFilters';
import { startRemoveCocktail } from '../../redux/actions/cocktails';

// logic
import { selectCocktails } from '../../selectors/cocktails';

// functional components
import { AddCocktailPage, DeleteConfirmation } from '../../components';

// styled components
import { InfoRow, SectionHeader, } from '../../globalStyles';
import { 
  InfoColumn,
  Cocktail,
  CocktailsWrapper,
  Form,
  NameInput
} from "./EditCocktailPage.elements";
import { FaLastfmSquare } from 'react-icons/fa';

const EditCocktailPage = (props) => {

  const [ selectedCocktail, setSelectedCocktail ] = useState();
  const [ displayDeleteConfirmation, setDisplayDeleteConfirmation ] = useState(false);

  function setDefaultState() {
    setDisplayDeleteConfirmation(false);
    setSelectedCocktail();
  }

  async function handleSetSelectedCocktail(cocktail) {
    await setSelectedCocktail();
    setSelectedCocktail(cocktail);
  }

  function handleDeleteCocktail(id) {
    props.dispatch(startRemoveCocktail({id: selectedCocktail.id}));
    setDefaultState();
  }

  function handleSetDisplayDeleteConfirmation() {
    displayDeleteConfirmation ? setDisplayDeleteConfirmation(false) : setDisplayDeleteConfirmation(true);
  }

  return (
    <>
      <InfoRow>
        <InfoColumn style={{maxWidth: "100%", flexBasis: "100%"}}>
          { displayDeleteConfirmation && 
            <DeleteConfirmation 
              selectedItem={selectedCocktail}
              displayInfo={displayDeleteConfirmation} 
              handleSetDisplayDeleteConfirmation={handleSetDisplayDeleteConfirmation} 
              handleDeleteItem={handleDeleteCocktail}
            /> 
          }
          <Form>
          <SectionHeader>Select cocktail to edit... </SectionHeader>
          <NameInput
            type='text'
            id="search"
            placeholder='Search name...'
            name='search'
            autoComplete="off"
            autoFocus
            value={props.cocktailFilters.name}
            onChange={(e) => {
              props.dispatch(setNameFilter(e.target.value));
            }} 
          />
          </Form>
          <CocktailsWrapper>
            {
              props.cocktails.map((cocktail) => (
                <Cocktail 
                  key={cocktail.id} 
                  onClick={() => handleSetSelectedCocktail(cocktail)}
                  selected={(cocktail.id === selectedCocktail?.id)}
                >{cocktail.name}</Cocktail>
              ))
            }
          </CocktailsWrapper>
        </InfoColumn>
      </InfoRow>
      { selectedCocktail && <AddCocktailPage selectedCocktail={selectedCocktail} setSelectedCocktail={setSelectedCocktail} handleSetDisplayDeleteConfirmation={handleSetDisplayDeleteConfirmation} />}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    cocktails: selectCocktails(state.cocktails, state.cocktailFilters), // by passing just two properties, the function selects from all cocktials, not only the available ones
    cocktailFilters: state.cocktailFilters,
  };
};

export default connect(mapStateToProps)(EditCocktailPage);
