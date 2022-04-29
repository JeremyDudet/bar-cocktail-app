// core imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// global state management
import { connect } from 'react-redux';
import { startAddIngredient } from '../../redux/actions/ingredients';
import {
  startAddCocktail,
  startEditCocktail,
} from '../../redux/actions/cocktails';
import { selectIngredients } from '../../selectors/ingredients';

// functional components
import { CocktailForm, IngredientForm, IngredientListFilters } from '../index';

// styled components
import { SectionHeader, SectionSubheader } from '../../globalStyles';
import {
  CocktailFormColumn,
  InfoColumn,
  InfoRow,
  InnerInfoColumn,
  IngredientsWrapper,
  Ingredient,
} from './AddCocktailPage.elements';

const IngredientList = (props) => {
  function handleDisabled(ingredient) {
    let status = false;
    props.recipeIngredients.forEach((recipeIngredient) => {
      if (recipeIngredient.id === ingredient.id) {
        status = true;
      }
    });
    return status;
  }

  return (
    <IngredientsWrapper>
      {props.ingredients.map((ingredient) => {
        // for each ingredient that is passed down from redux/firebase - render an IngredientListItem
        return (
          <Ingredient
            key={ingredient.id}
            onClick={() => props.handleSelectedIngredient(ingredient)}
            selected={handleDisabled(ingredient)}
            disabled={handleDisabled(ingredient)}
          >
            {ingredient.name}
          </Ingredient>
        );
      })}
    </IngredientsWrapper>
  );
};

const AddCocktailPage = (props) => {
  const [recipeIngredients, setRecipeIngredients] = useState(
    props.selectedCocktail ? props.selectedCocktail.recipe : []
  ); // array of objects
  const history = useHistory();

  function adjustToRecipeFormat({
    id,
    name,
    amount = '',
    units = 'oz',
    alcoholic,
    abv,
    vegan,
    available,
  }) {
    return { id, name, amount, units, alcoholic, abv, vegan, available };
  }

  function handleAddRecipeIngredient(ingredient) {
    const newIngredient = adjustToRecipeFormat(ingredient);
    const newList = [...recipeIngredients];
    newList.push(newIngredient);
    setRecipeIngredients(newList);
  }

  function handleRemoveRecipeIngredient(ingredient) {
    const removedIngredient = ingredient;
    const newList = recipeIngredients.filter(
      (ingredient) => ingredient.id !== removedIngredient.id
    );
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
        <InnerInfoColumn style={{ backgroundColor: '#2e2e2e' }}>
          <CocktailForm
            selectedCocktail={props.selectedCocktail}
            recipeIngredients={recipeIngredients}
            setRecipeIngredients={setRecipeIngredients}
            handleRemoveRecipeIngredient={handleRemoveRecipeIngredient}
            setSelectedCocktail={props.setSelectedCocktail}
            handleSetDisplayDeleteConfirmation={
              props.handleSetDisplayDeleteConfirmation
            }
            handleEditCocktail={handleEditCocktail}
            onSubmit={handleSubmit}
          />
        </InnerInfoColumn>
      </CocktailFormColumn>
      <InfoColumn>
        <InnerInfoColumn>
          <SectionHeader style={{ marginBottom: '1rem' }}>
            {' '}
            Add ingredients to recipe{' '}
          </SectionHeader>
          <IngredientListFilters />
          <IngredientList
            handleSelectedIngredient={handleAddRecipeIngredient}
            recipeIngredients={recipeIngredients}
            ingredients={props.ingredients}
          />{' '}
          {/* pass down handler that updates this function's state */}
        </InnerInfoColumn>
        <InnerInfoColumn>
          <SectionHeader>Can't find ingredient? </SectionHeader>
          <SectionSubheader style={{ marginBottom: '1rem' }}>
            Add new ingredient to your bar's database...
          </SectionSubheader>
          <IngredientForm
            onSubmit={(ingredient) => {
              props.dispatch(startAddIngredient(ingredient));
            }}
          />
        </InnerInfoColumn>
      </InfoColumn>
    </InfoRow>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: selectIngredients(
      state.ingredients,
      state.ingredientFilters,
      true
    ),
  };
};

export default connect(mapStateToProps)(AddCocktailPage);
