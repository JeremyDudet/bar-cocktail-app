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
      <Label for="ingredientName">Name: </Label>
      <NameInput
        id="ingredientName"
        type="name"
        value={props.ingredientFilters.name} 
        onChange={(e) => {
          props.dispatch(setNameFilter(e.target.value));
        }}
        placeholder="Search..."
      />
      
      <Label for="ingredientCategoryFilter">Category: </Label>
      <FormSelect 
        id="ingredientCategoryFilter"
        value={props.ingredientFilters.category}
        onChange={(e) => {
          props.dispatch(setCategoryFilter(e.target.value));
        }} 
      >
        <option value="">---</option>
          <option value="Spirit">Spirit / Liquor</option>
          <option value="Infused-Spirit">Infused Spirit</option>
          <option value="Liqueur">Flavored Liqueur</option>
          <option value="Wine/Vermouth">Wine/Vermouth</option>
          <option value="Beer/Cider">Beer/Cider</option>
          <option value="Egg&Dairy">Egg & Dairy</option>
          <option value="Bitters">Bitters</option>
          <option value="Syrup">Syrup</option>
          <option value="Fruits, Vegies & Juice">Fruits, Vegies & Juice</option>
          <option value="Tea">Tea</option>
          <option value="Savory">Savory Products</option>
          <option value="Mixer">Mixer</option>
      </FormSelect>


      <Label for="alcoholFilter">Alcoholic ingredient?</Label>
      <FormSelect 
        id="alcoholFilter"
        value={props.ingredientFilters.alcoholic}
        onChange={(e) => {
          props.dispatch(setAlcoholFilter(e.target.value));
        }} 
      >
        <option value="">---</option>
        <option value='true'>Alcoholic</option>
        <option value='false'>Non-Alcoholic</option>
      </FormSelect>

      <Label for="ingredientVeganFilter">Vegan ingredient?</Label>
      <FormSelect 
        id="ingredientVeganFilter"
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