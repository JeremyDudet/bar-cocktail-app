import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setIngredientFilterType } from '../../redux/actions/cocktailFilters';
import { selectIngredients } from '../../selectors/ingredients';
import IngredientListFilters from '../IngredientListFilters/IngredientListFilters';
import {
  TopLine,
  FilterTypeRadio,
  RadioLabel,
  RadioContainer,
  IngredientPickerContainer,
  IngredientsWrapper,
  Ingredient,
} from './IngredientPicker.elements';

const IngredientList = (props) => {
  function confirmSelected(ingredient) {
    let status = false;
    props.selectedIngredients.forEach((selectedIngredient) => {
      if (selectedIngredient.id === ingredient.id) {
        status = true;
      }
    });
    return status;
  }

  return (
    <IngredientsWrapper>
      {props.ingredients.map((ingredient) => {
        return (
          <Ingredient
            key={ingredient.id}
            onClick={() => props.handleSelectedIngredient(ingredient)}
            selected={confirmSelected(ingredient)}
            disabled={confirmSelected(ingredient)}
          >
            {ingredient.name}
          </Ingredient>
        );
      })}
    </IngredientsWrapper>
  );
};

const IngredientPicker = (props) => {
  const [filterType, setFilterType] = useState('includeAll');

  function handleSetFilterType(e) {
    const filterType = e.target.value;
    setFilterType(filterType);
  }

  useEffect(() => {
    props.dispatch(setIngredientFilterType(filterType));
  }, [filterType]);

  return (
    <IngredientPickerContainer>
      <IngredientListFilters />
      <RadioContainer>
        <FilterTypeRadio
          onChange={handleSetFilterType}
          type="radio"
          id="includeAll"
          value="includeAll"
          name="filterType"
          checked={filterType === 'includeAll'}
        />
        <RadioLabel for="includeAll">
          Each cocktail must include all of the following...
        </RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <FilterTypeRadio
          onChange={handleSetFilterType}
          type="radio"
          id="atLeastOne"
          value="atLeastOne"
          name="filterType"
        />
        <RadioLabel for="atLeastOne">
          Show me cocktails that inlcude any of the following...
        </RadioLabel>
      </RadioContainer>
      <TopLine>Available ingredients:</TopLine>
      <IngredientList
        handleSelectedIngredient={props.handleAddSelectedIngredient}
        ingredients={props.ingredients}
        selectedIngredients={props.selectedIngredients}
      />
    </IngredientPickerContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: selectIngredients(
      state.ingredients,
      state.ingredientFilters,
      false
    ),
    cocktailFilters: state.cocktailFilters,
  };
};

export default connect(mapStateToProps)(IngredientPicker);
