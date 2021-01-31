// core
import React from 'react';

// date formater
import { format } from 'date-fns';

// global state management
import { connect } from 'react-redux';
import { startEditIngredient } from '../../redux/actions/ingredients';

// logic 
import { selectCocktails } from '../../selectors/cocktails'; // cocktail filter 
import { appearancesOf } from '../../cocktailAppearances';

// functional components
import { IngredientPickerList } from '../../components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// styled components
import {InfoSec, Container, PageTitle, SectionHeader, SectionSubheader} from '../../globalStyles';
import { 
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
  CircularProgressBarContainer
} from './Dashboard.elements';


const Dashboard = (props) => {

  const availableCocktailsCount = props.availableCocktails.length;
  const allCocktailsCount = props.allCocktails.length;
  const percentage = Math.round((availableCocktailsCount / allCocktailsCount) * 100);

  function handleIngredientAvailability(ingredient) {
    let newState = '';
    (ingredient.available === "true") ? newState = 'false' : newState = 'true';
    props.dispatch(startEditIngredient(ingredient.id,{ available: newState }));
  }

  return (
    <InfoSec>
      <Container>
        <PageTitle>Select ingredients available in your bar</PageTitle>
        <IngredientsWrapper>
          <IngredientPickerList handleSelectedIngredient={handleIngredientAvailability} allIngredients={props.allIngredients} />
        </IngredientsWrapper>
        <InfoRow>
          <MakeableCocktails>
            <SectionHeader>Makeable cocktails</SectionHeader>
            <SectionSubheader>These are the cocktails you can make...</SectionSubheader>
            <MakeableCocktailList>
              {
                props.availableCocktails.map( cocktail => (<CoktailName key={cocktail.id}>{cocktail.name}</CoktailName>))
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
                      <MissingIngredientAppearances>{props.appearancesOf[ingredient.id]}</MissingIngredientAppearances> 
                      <MissingIngredientAddIcon onClick={() => handleIngredientAvailability(ingredient)} />
                    </MissingIngredient>
                  : null 
                ))
              }
            </MissingIngredientsList>
          </MissingPopularIngredients>
        </InfoRow>
      </Container>
    </InfoSec>
  );
}

const mapStateToProps = (state) => {
  return {
    allIngredients: state.ingredients,
    allCocktails: state.cocktails,
    availableCocktails: selectCocktails(state.cocktails, state.cocktailFilters, state.ingredients),
    appearancesOf: appearancesOf(state.ingredients, state.cocktails),
  };
};

//define a HOC that connects the store.state to mapStateProps and includes it to ExpenseListFilters as props
export default connect(mapStateToProps)(Dashboard); 