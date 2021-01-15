import React from 'react';
import { connect } from 'react-redux';
import IngredientForm from './IngredientForm';
import { removeIngredient, editIngredient } from '../actions/ingredients';



const EditIngredientPage = (props) => {
  console.log(props);
  return (
    <>
      <h2>Edit Ingredient Page</h2>
      <IngredientForm 
      // we pass the expense we're editing from redux store down to expense form as a prop
      // this is important for the information about the expense to fill in the form.
        ingredient={props.ingredient}
      // expense is the expense that was pulled from the mapStateProps function.
        onSubmit={(ingredient) => {
          props.dispatch(editIngredient(props.ingredient.id, ingredient));
          props.history.push('/')
        }}
        />
      <button
        onClick={() => {
        props.dispatch(removeIngredient({id: props.match.params.id}))
        props.history.push('/')
      }}>
        Remove
      </button>
    </>
  );
}

// you grab state from the store and you pass it in as an object property called expense
const mapStatetoProps = (state, props) => {
  return {
    ingredient: state.ingredients.find((ingredient) => ingredient.id === props.match.params.id)
  };
};

export default connect(mapStatetoProps)(EditIngredientPage);