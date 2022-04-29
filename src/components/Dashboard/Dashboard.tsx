// core
import React from 'react';

// global state management
import { connect } from 'react-redux';
import { startEditIngredient } from '../../redux/actions/ingredients';
// import { setNameFilter } from '../../redux/actions/ingredientFilters';

// logic
import { selectCocktails } from '../../selectors/cocktails'; // returns filtered cocktail list
import { selectIngredients } from '../../selectors/ingredients'; // returns filtered ingredient list
import appearancesOf from '../../cocktailAppearances'; // calculates every ingredient's number of apperances in all cocktails

// functional components
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// styled components
import {
  InfoSec,
  Container,
  PageTitle,
  SectionHeader,
  SectionSubheader,
} from '../../globalStyles';
import {
  InfoRow,
  MakeableCocktails,
  MakeableCocktailList,
  CoktailName,
  CocktailGuage,
  MissingPopularIngredients,
  MissingIngredientTableHeader,
  MissingIngredientsList,
  MissingIngredient,
  MissingIngredientName,
  MissingIngredientAppearances,
  MissingIngredientAddIconContainer,
  CircularProgressBarContainer,
  IngredientsWrapper,
  Ingredient,
} from './Dashboard.elements';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const IngredientList = (props) => {
  return (
    <IngredientsWrapper>
      {props.ingredients.map((ingredient) => {
        return (
          <Ingredient
            key={ingredient.id}
            onClick={() => props.handleSelectedIngredient(ingredient)}
            selected={ingredient.available === 'true'}
          >
            {ingredient.name}
          </Ingredient>
        );
      })}
    </IngredientsWrapper>
  );
};

const Dashboard = (props) => {
  const availableCocktailsCount = props.availableCocktails.length;
  const allCocktailsCount = props.allCocktails.length;
  const percentage = Math.round(
    (availableCocktailsCount / allCocktailsCount) * 100
  );

  function handleIngredientAvailability(ingredient) {
    let newState = '';
    ingredient.available === 'true'
      ? (newState = 'false')
      : (newState = 'true');
    props.dispatch(startEditIngredient(ingredient.id, { available: newState }));
  }

  return (
    <InfoSec>
      <Container>
        <PageTitle style={{ lineHeight: '1.9rem', marginBottom: '1.3rem' }}>
          Select ingredients available in your bar
        </PageTitle>
        <IngredientList
          handleSelectedIngredient={handleIngredientAvailability}
          ingredients={props.ingredients}
        />
        <InfoRow>
          <CocktailGuage>
            <SectionHeader>Cocktail guage</SectionHeader>
            <SectionSubheader>
              How many cocktails can you make with what's in your bar?
            </SectionSubheader>
            <CircularProgressBarContainer>
              <CircularProgressbar
                value={percentage}
                text={`${availableCocktailsCount}`}
                styles={buildStyles({
                  textColor: 'rgb(88, 183, 146)',
                  pathColor: 'rgb(88, 183, 146)',
                  trailColor: '#333',
                  maxWidth: '100%',
                })}
              />
            </CircularProgressBarContainer>
          </CocktailGuage>
          <MissingPopularIngredients>
            <SectionHeader>Missing popular ingredients</SectionHeader>
            <SectionSubheader>
              These are popular ingredients not currently in your bar.
            </SectionSubheader>
            <MissingIngredientsList>
              <MissingIngredientTableHeader>
                <strong>Ingredient</strong>{' '}
                <span style={{ position: 'absolute', right: '5px' }}>
                  Appearances
                </span>
              </MissingIngredientTableHeader>
              {props.ingredients.map((ingredient) =>
                ingredient.available === 'false' ? (
                  <MissingIngredient>
                    <MissingIngredientAddIconContainer
                      onClick={() => handleIngredientAvailability(ingredient)}
                    >
                      <AiOutlinePlusCircle />
                      <MissingIngredientName>
                        {ingredient.name}
                      </MissingIngredientName>
                    </MissingIngredientAddIconContainer>
                    <MissingIngredientAppearances>
                      {props.appearancesOf[ingredient.id]}
                    </MissingIngredientAppearances>
                  </MissingIngredient>
                ) : null
              )}
            </MissingIngredientsList>
          </MissingPopularIngredients>
          <MakeableCocktails>
            <SectionHeader>Makeable cocktails</SectionHeader>
            <SectionSubheader>
              These are cocktails you can make...
            </SectionSubheader>
            <MakeableCocktailList>
              {props.availableCocktails.map((cocktail) => (
                <CoktailName key={cocktail.id}>{cocktail.name}</CoktailName>
              ))}
            </MakeableCocktailList>
          </MakeableCocktails>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredientFilters: state.ingredientFilters,
    ingredients: selectIngredients(
      state.ingredients,
      state.ingredientFilters,
      true
    ),
    allCocktails: state.cocktails,
    availableCocktails: selectCocktails(
      state.cocktails,
      state.cocktailFilters,
      state.ingredients
    ),
    appearancesOf: appearancesOf(state.ingredients, state.cocktails),
  };
};

// define a HOC that connects the store.state to mapStateProps and includes it to ExpenseListFilters as props
export default connect(mapStateToProps)(Dashboard);
