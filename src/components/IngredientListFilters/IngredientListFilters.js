import React from 'react';
import { connect  } from "react-redux";
import { 
  setNameFilter, 
  setCategoryFilter, 
  setAlcoholFilter, 
  setVeganFilter, 
} from '../../redux/actions/ingredientFilters';
import { 
  IngredientListFilter,
  NameInput,
  Label,
  FormSelect,
 } from './IngredientListFilters.elements';

const IngredientListFilters = (props) => {

  return (
    <IngredientListFilter>
      <Label for="name">Name: </Label>
      <NameInput
        type="name"
        value={props.ingredientFilters.name} 
        onChange={(e) => {
          props.dispatch(setNameFilter(e.target.value));
        }}
        placeholder="Search ingredient name..."
      />
      
      <Label for="categoryFilter">Category: </Label>
      <FormSelect 
        id="categoryFilter"
        name="categoryFilter"
        value={props.ingredientFilters.category}
        onChange={(e) => {
          props.dispatch(setCategoryFilter(e.target.value));
        }} 
      >
        <option value="">---</option>
        <option value="Spirit">Spirit / Liquor</option>
        <option value="Liqueur">Flavored Liqueur</option>
        <option value="Wine">Wine</option>
        <option value="Beer">Beer</option>
        <option value="Mixer">Mixer</option>
      </FormSelect>


      <Label for="alcoholFilter">Alcoholic ingredient?</Label>
      <FormSelect 
        id="alcoholFilter"
        name="alcoholFilter"
        value={props.ingredientFilters.alcoholic}
        onChange={(e) => {
          props.dispatch(setAlcoholFilter(e.target.value));
        }} 
      >
        <option value="">---</option>
        <option value='true'>Alcoholic</option>
        <option value='false'>Non-Alcoholic</option>
      </FormSelect>

      <Label for="veganFilter">Vegan ingredient?</Label>
      <FormSelect 
        id="veganFilter"
        name="veganFilter"
        value={props.ingredientFilters.vegan}
        onChange={(e) => {
          props.dispatch(setVeganFilter(e.target.value));
        }} 
      >
        <option value="">---</option>
        <option value='true'>Vegan</option>
        <option value='false'>Non-Vegan</option>
      </FormSelect>
    </IngredientListFilter>
  );
};   


// specify what you want from the store
// filters: state.filters
// this page's variable: what we're pulling from the store
const mapStateToProps = (state) => {
  return {
    ingredientFilters: state.ingredientFilters
  }
} 

//define a HOC that connects the store.state to mapStateProps and includes it to ExpenseListFilters as props
export default connect(mapStateToProps)(IngredientListFilters); 