// core
import React from 'react';

// date formater
import { format } from 'date-fns';

// global state management
import { connect } from 'react-redux';
import { startEditIngredient } from '../../redux/actions/ingredients';
import { setNameFilter } from '../../redux/actions/ingredientFilters';

// logic 
import { selectCocktails } from '../../selectors/cocktails'; // returns filtered cocktail list 
import { selectIngredients } from '../../selectors/ingredients'; // returns filtered ingredient list 
import { appearancesOf } from '../../cocktailAppearances'; // calculates every ingredient's number of apperances in all cocktails

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
  CircularProgressBarContainer,
  Form,
  NameInput
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
        <PageTitle style={{lineHeight: "1.9rem", marginBottom: "15px"}}>Select ingredients available in your bar</PageTitle>
        {/* TODO - integrate name search */}
        {/* <Form>
          <NameInput
            id="ingredientName"
            type="name"
            value={props.ingredientFilters.name} 
            onChange={(e) => {
              props.dispatch(setNameFilter(e.target.value));
            }}
            placeholder="Search..."
          />
          </Form> */}
        <IngredientsWrapper>
          <IngredientPickerList handleSelectedIngredient={handleIngredientAvailability} ingredients={props.ingredients} />
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
                props.ingredients.map(ingredient => (
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
    ingredientFilters: state.ingredientFilters,
    ingredients: state.ingredients,
    allCocktails: state.cocktails,
    availableCocktails: selectCocktails(state.cocktails, state.cocktailFilters, state.ingredients),
    appearancesOf: appearancesOf(state.ingredients, state.cocktails),
  };
};

//define a HOC that connects the store.state to mapStateProps and includes it to ExpenseListFilters as props
export default connect(mapStateToProps)(Dashboard); 