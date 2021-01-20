// this is where we'll display a set of 
import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  InfoSec, 
  AvailableIngredientPicker, 
  InfoRow,
  IngredientsWrapper,
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
  MissingIngredientAddIcon,
  SectionHeader,
  SectionSubheader,
  CircularProgressBarContainer
} from './Dashboard.elements';
import {Container} from '../../globalStyles';
import IngredientPickerList from '../IngredientPickerList/IngredientPickerList';
import { startEditIngredient } from '../../redux/actions/ingredients';
import { selectCocktails } from '../../selectors/cocktails';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Dashboard = (props) => {

  const [ error, setError ] = useState("");

  const availableCocktailsCount = props.availableCocktails.length;
  const allCocktailsCount = props.allCocktails.length;
  const percentage = Math.round((availableCocktailsCount / allCocktailsCount) * 100);
  
  function handleIngredientAvailability(ingredient) {
    let newState = '';
    (ingredient.available === "true") ? newState = 'false' : newState = 'true';
    props.dispatch(startEditIngredient(ingredient.id,{ available: newState }));
  }

  
  const ingredientsIDs = props.allIngredients.map( ingredient => (ingredient.id));
  const ingredientAppearances = ingredientsIDs.map(id => {
    const nestedArr = [id];
    let count = 0;
    props.allCocktails.forEach(cocktail => {
      cocktail.recipe.forEach(ingredient => {
        if (ingredient.id === id) {count++};
      });
    });

    nestedArr.push(count);
    return nestedArr;
  });
  const appearancesOf = Object.fromEntries(ingredientAppearances);

  return (
    <>
    <InfoSec>
      <Container>
        <AvailableIngredientPicker>
          <SectionHeader style={{fontSize: "2rem", lineHeight: "1.9rem"}}>Select ingredients available in your bar:</SectionHeader>
          <IngredientsWrapper>
            <IngredientPickerList handleSelectedIngredient={handleIngredientAvailability} allIngredients={props.allIngredients} />
          </IngredientsWrapper>
        </AvailableIngredientPicker>
        <InfoRow>
          <MakeableCocktails>
            <SectionHeader>Makeable cocktails</SectionHeader>
            <SectionSubheader>These are the cocktails you can make...</SectionSubheader>
            <MakeableCocktailList>
              {
                props.availableCocktails.map( cocktail => (<CoktailName>{cocktail.name}</CoktailName>))
              }
            </MakeableCocktailList>
          </MakeableCocktails>
          <CocktailGuage>
            <SectionHeader>Cocktail guage</SectionHeader>
            <SectionSubheader>How many cocktails can you make with what's in your bar?</SectionSubheader>
            <CircularProgressBarContainer>
              <CircularProgressbar
                value={percentage}
                text={`${availableCocktailsCount}`}
                styles={buildStyles({
                  textColor: "rgb(88, 183, 146)",
                  pathColor: "rgb(88, 183, 146)",
                  trailColor: "#333"
                })}
              />
            </CircularProgressBarContainer>
          </CocktailGuage>
          <MissingPopularIngredients>
            <SectionHeader>Missing popular ingredients</SectionHeader>
            <SectionSubheader>These are popular ingredients not currently in your bar.</SectionSubheader>
            <MissingIngredientsList>
              <MissingIngredientTableHeader><strong>Ingredient</strong> <span style={{position: 'absolute', right: '5px'}}>Appearances</span></MissingIngredientTableHeader>
              {
                props.allIngredients.map(ingredient => (
                  (ingredient.available === "false") 
                  ? <MissingIngredient>
                      <MissingIngredientName>{ingredient.name}</MissingIngredientName>
                      <MissingIngredientAppearances>{appearancesOf[ingredient.id]}</MissingIngredientAppearances> 
                      <MissingIngredientAddIcon onClick={() => handleIngredientAvailability(ingredient)}>+</MissingIngredientAddIcon>
                    </MissingIngredient>
                  : null 
                ))
              }
            </MissingIngredientsList>
          </MissingPopularIngredients>
        </InfoRow>
      </Container>
    </InfoSec>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    allIngredients: state.ingredients,
    availableCocktails: selectCocktails(state.cocktails, state.cocktailFilters, state.ingredients),
    allCocktails: state.cocktails
  };
};

//define a HOC that connects the store.state to mapStateProps and includes it to ExpenseListFilters as props
export default connect(mapStateToProps)(Dashboard); 