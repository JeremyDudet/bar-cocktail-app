// core
import React, { useState, useEffect } from 'react';

// global state management
import { connect } from 'react-redux';
import { startRemoveCocktail, startEditCocktail } from '../../redux/actions/cocktails';
import { setNameFilter } from '../../redux/actions/cocktailFilters';

// logic
import { selectCocktails } from '../../selectors/cocktails';

// functional components
import { AddCocktailPage } from '../../components';

// styled components
import { InfoRow, SectionHeader, } from '../../globalStyles';
import { 
  InfoColumn,
  Cocktail,
  CocktailsWrapper,
  Form,
  NameInput,
} from "./EditCocktailPage.elements";

const EditCocktailPage = (props) => {

  const [ selectedCocktail, setSelectedCocktail ] = useState();

  async function handleSetSelectedCocktail(cocktail) {
    await setSelectedCocktail();
    setSelectedCocktail(cocktail);
  }

  return (
    <>
      <InfoRow>
        <InfoColumn>
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
      { selectedCocktail && <AddCocktailPage selectedCocktail={selectedCocktail} />}
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
