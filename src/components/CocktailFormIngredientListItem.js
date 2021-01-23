import React from 'react'

const CocktailFormIngredientListItem = (props) => {

  const styles = {

  }

  function handleClick() {
    props.handleRemoveRecipeIngredient(props.ingredient)
  }

  return (
    <div style={{display: "flex", padding: "0.5rem"}} key={props.ingredient.id}>
        <span style={{fontSize: "1.25rem", color: "rgb(95, 99, 189)", margin: "0px 20px"}}>{props.ingredient.name}</span>
        <input
          style={{marginRight: "10px", outline: "none", border: "1px solid rgb(95, 99, 189)", borderRadius: "8px", paddingLeft: "5px", maxWidth: "5rem"}}
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
        <select 
          style={{marginRight: "20px", outline: "none", border: "1px solid rgb(95, 99, 189)", borderRadius: "8px", paddingLeft: "5px", maxWidth: "5rem"}}
          value={props.ingredient.units}  
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
        <button 
          style={{ 
            width: "auto",
            height: "auto",
            background: "#F66E73",
            color: "#000",
            fontSize: "1em",
            fontWeight: "bolder",
            padding: "0px 4px",
            outline: "none",
            border: "1px solid #F66E73",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          onClick={handleClick}>remove</button>
      </div>
  );
}

export default CocktailFormIngredientListItem;