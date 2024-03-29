// core
import React, { useState, useEffect } from 'react';

// global state management
import { connect } from 'react-redux';
import {
  setNameFilter,
  setIngredientFilter,
  setCategoryFilter,
  setIbaFilter,
  setTimingFilter,
  setAlcoholicFilter,
  setVeganFilter,
} from '../../redux/actions/cocktailFilters';

// functional components
import { IngredientPicker } from '..';

// styled components
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import {
  CocktailListFilter,
  NameInput,
  SearchByIngredientButton,
  Label,
  FormSelect,
  SelectedIngredientsWrapper,
  SelectedIngredient,
  SelectedIngredientDeleteIcon,
  NoSelectedIngredients,
} from './CocktailListFilters.elements';

const RenderSelectedIngredient = (props) => {
  return (
    <IconContext.Provider value={{ color: '#222222' }}>
      <SelectedIngredientsWrapper>
        {props.ingredients.map((ingredient) => (
          <SelectedIngredient
            key={ingredient.id}
            onClick={() => {
              props.handleRemoveSelectedIngredient(ingredient);
            }}
          >
            <FaTimes />
            {ingredient.name}
          </SelectedIngredient>
        ))}
      </SelectedIngredientsWrapper>
    </IconContext.Provider>
  );
};

const CocktailListFilters = (props) => {
  const [displayIngredientPicker, setDisplayIngredientPicker] = useState(false);
  const [searchIngredientButtonText, setSearchIngredientButtonText] = useState(
    'Search by ingredient'
  );
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    props.dispatch(setIngredientFilter(selectedIngredients));
  }, [selectedIngredients]);

  function handleDisplayIngredientPicker() {
    // works
    let currentState;
    if (displayIngredientPicker !== true) {
      currentState = true;
      setSearchIngredientButtonText('CLOSE');
    } else {
      currentState = false;
      setSearchIngredientButtonText('Search by ingredient');
    }
    setDisplayIngredientPicker(currentState);
  }

  function handleAddSelectedIngredient(ingredient) {
    // works
    const newIngredient = ingredient;
    const newList = [...selectedIngredients];
    newList.push(newIngredient);
    setSelectedIngredients(newList);
  }

  function handleRemoveSelectedIngredient(ingredient) {
    // not working
    const removedIngredient = ingredient;
    const newList = selectedIngredients.filter(
      (ingredient) => ingredient.id !== removedIngredient.id
    );
    setSelectedIngredients(newList);
  }

  return (
    <>
      <CocktailListFilter>
        <Label for="name">Name: </Label>
        <NameInput
          type="text"
          id="name"
          name="name"
          placeholder="Search cocktail name..."
          value={props.cocktailFilters.name}
          onChange={(e) => {
            props.dispatch(setNameFilter(e.target.value));
          }}
        />

        <Label for="categoryFilter">Category: </Label>
        <FormSelect
          id="categoryFilter"
          name="categoryFilter"
          value={props.cocktailFilters.category}
          onChange={(e) => {
            props.dispatch(setCategoryFilter(e.target.value));
          }}
        >
          <option value="">---</option>
          <option value="Classic">Classic</option>
          <option value="Sours">Sours</option>
          <option value="Spirit-Forward">Spirit-Forward</option>
          <option value="Duos and Trios">Duos and Trios</option>
          <option value="Champagne Cocktails">Champagne Cocktails</option>
          <option value="HC&Fs">Highballs Collins & Fizzes</option>
          <option value="Juleps and Smashes">Juleps and Smashes</option>
          <option value="Tropical-Style">Tropical-Style</option>
          <option value="Hot Drinks">Hot Drinks</option>
          <option value="Flips and Nogs">Flips and Nogs</option>
        </FormSelect>

        <Label for="ibaFilter">IBA official cocktail?</Label>
        <FormSelect
          id="ibaFilter"
          name="ibaFilter"
          value={props.cocktailFilters.iba}
          onChange={(e) => {
            props.dispatch(setIbaFilter(e.target.value));
          }}
        >
          <option value="">---</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </FormSelect>

        <Label for="timingFilter">Timing: </Label>
        <FormSelect
          id="timingFilter"
          name="timingFilter"
          value={props.cocktailFilters.timing}
          onChange={(e) => {
            props.dispatch(setTimingFilter(e.target.value));
          }}
        >
          <option value="">---</option>
          <option value="aperitivo">Aperitivo</option>
          <option value="digestivo">Digestivo</option>
          <option value="dessert">Dessert</option>
          <option value="anytime">Anytime</option>
        </FormSelect>

        <Label for="alcoholicFilter">Non-Alcoholic? </Label>
        <FormSelect
          id="alcoholicFilter"
          name="alcoholicFilter"
          value={props.cocktailFilters.alcoholic}
          onChange={(e) => {
            props.dispatch(setAlcoholicFilter(e.target.value));
          }}
        >
          <option value="">---</option>
          <option value="false">Yes, N/A</option>
          <option value="true">No</option>
        </FormSelect>

        <Label for="veganFilter">Vegan? </Label>
        <FormSelect
          id="veganFilter"
          name="veganFilter"
          value={props.cocktailFilters.vegan}
          onChange={(e) => {
            props.dispatch(setVeganFilter(e.target.value));
          }}
        >
          <option value="">---</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </FormSelect>

        <Label for="ingredientFilter">
          <SearchByIngredientButton onClick={handleDisplayIngredientPicker}>
            {searchIngredientButtonText}
          </SearchByIngredientButton>
        </Label>

        {selectedIngredients.length > 0 ? (
          <RenderSelectedIngredient
            ingredients={selectedIngredients}
            handleRemoveSelectedIngredient={handleRemoveSelectedIngredient}
          />
        ) : (
          <NoSelectedIngredients>
            ...no selected ingredients.
          </NoSelectedIngredients>
        )}
      </CocktailListFilter>
      {displayIngredientPicker && (
        <IngredientPicker
          handleAddSelectedIngredient={handleAddSelectedIngredient}
          selectedIngredients={selectedIngredients}
        />
      )}
    </>
  );
};

// specify what you want from the stores
// filters: state.filters
// this page's variable: what we're pulling from the store
const mapStateToProps = (state) => {
  return {
    cocktailFilters: state.cocktailFilters,
  };
};

// define a HOC that connects the store.state to mapStateProps and includes it to ExpenseListFilters as props
export default connect(mapStateToProps)(CocktailListFilters);
