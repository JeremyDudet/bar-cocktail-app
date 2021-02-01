import React from 'react'
import {
  SelectedIngredientsContainer, 
  Ingredient, 
  InnerContainer, 
  IngredientName, 
  IngredientAmount, 
  IngredientUnits, 
  RemoveButton
} from './CocktailFormIgredientList.elements';

const CocktailFormIngredientListItem = (props) => {

  return (
    <Ingredient key={props.ingredient.id}>
      <IngredientName>{props.ingredient.name}</IngredientName>
      <InnerContainer>
        <IngredientAmount
          value={props.ingredient.amount}
          onChange={e => {
            const amount = e.target.value;
            props.setRecipe( currentIngredient => currentIngredient.map( x => 
                x.id === props.ingredient.id ? {...x, amount} : x )); 
          }}
          placeholder='amount'
          type="number"   
          className="amount" 
          required
        />
        <IngredientUnits 
          value={props.ingredient.units}  
          onChange={e => {
            const units = e.target.value;
            props.setRecipe( currentIngredient => currentIngredient.map( x => 
              x.id === props.ingredient.id ? {...x, units} : x
            ));
          }}
          required
          >
          <option value="oz" selected>oz</option>
          <option value="ml">ml</option>
          <option value="splash">splash</option>
          <option value="dashes">dashe(s)</option>
          <option value="barspoon">barspoon(s)</option>
          <option value="sprig">sprig</option>
          <option value="pinch">pinch</option>
          <option value="piece">piece(s)</option>
          <option value="">each</option>
        </IngredientUnits>

        <RemoveButton onClick={() => props.handleRemoveRecipeIngredient(props.ingredient)}>X</RemoveButton>
      </InnerContainer>
    </Ingredient>
  );
}

const CocktailFormIngredientList = (props) => {

  const styles = {
    display: 'grid',
    justifyItems: 'left',
    alignItems: "left",
    margin: '10px 0 0 0',
    gap: "0.5rem",
  }
  
  return (
    <SelectedIngredientsContainer style={styles}>
      {props.recipeIngredients.map((ingredient) => {
        return <CocktailFormIngredientListItem ingredient={ingredient} setRecipe={props.setRecipeIngredients} handleRemoveRecipeIngredient={props.handleRemoveRecipeIngredient}/>
      })}
    </SelectedIngredientsContainer>
  );
};


export default CocktailFormIngredientList;

