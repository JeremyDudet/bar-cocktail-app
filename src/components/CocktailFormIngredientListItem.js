import React from 'react'

const CocktailFormIngredientListItem = (props) => {

  function handleClick() {
    props.handleRemoveRecipeIngredient(props.ingredient)
  }

  return (
    <div key={props.ingredient.id}>
        <span>{props.ingredient.name}</span>
        <input
          value={props.ingredient.amount}
          onChange={e => {
            const amount = e.target.value;
            props.setRecipe(currentIngredient => 
              currentIngredient.map(x => 
                x.id === props.ingredient.id 
                ? {
                    ...x,
                    amount
                  } 
                : x 
              )
            ); 
          }}
          placeholder='amount'
          type="number"   
          className="amount" 
        />
        <select value={props.ingredient.units}  
          onChange={e => {
            const units = e.target.value;
            props.setRecipe(currentIngredient =>
              currentIngredient.map(x => 
                x.id === props.ingredient.id
                ? {
                  ...x,
                  units
                  }
                : x
              )
            );
          }
        }>
          <option value="oz" selected>oz</option>
          <option value="ml">ml</option>
          <option value="splash">splash</option>
          <option value="dashes">dashes</option>
        </select>
        <button onClick={handleClick}>X</button>
      </div>
  );
}

export default CocktailFormIngredientListItem;