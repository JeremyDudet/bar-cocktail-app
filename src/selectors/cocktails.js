

// this function takes in state.cocktails and state.ingredients from redux.state
export const selectCocktails = (cocktails, { name, available, ingredients, filterType, category, iba, timing, alcoholic, vegan }, allIngredients) => {
  // filter() method creates a new array with all the cocktails that pass the test implemented by the function
  return cocktails.filter((cocktail) => { 

    function processAvailableCocktailsMatch(cocktail) {
      // the ids of the ingredients in the cocktails recipe
      const recipeIngredientsIds = []; 
      cocktail.recipe.forEach(ingredient => { 
        recipeIngredientsIds.push(ingredient.id);
      });
      // once we have the ids of the ingredients in this cocktail's recipe - we can match that id with the ingredient database
      const ingredientAvailability = []; // example -> ["true", "true", "false"]
      recipeIngredientsIds.forEach(recipeIngredientId => { 
        allIngredients.forEach(ingredient => {
          if (ingredient.id === recipeIngredientId) {
              ingredientAvailability.push(ingredient.available)
            }
          }
        );
      });
      let isCocktailAvailable = true;
      ingredientAvailability.forEach( availability => {
        if (availability === 'false') {
          return isCocktailAvailable = false;
        }
      })
      return isCocktailAvailable;
    };
    
    function processIngredientsMatch(cocktail, selectedIngredients) {
      // the ids of the ingredients in the cocktails recipe
      const recipeIngredientsIds = []; 
      cocktail.recipe.forEach(ingredient => { 
        recipeIngredientsIds.push(ingredient.id);
      });
      // once we have the ids of the ingredients in this cocktail's recipe - we can match that id with the filter ingredient's id
      const ingredientsMatch = []; // are selected ingredients in cocktail?
      selectedIngredients.forEach(ingredient => {
        recipeIngredientsIds.forEach(recipeIngredientId => {
          if (ingredient.id === recipeIngredientId) {
            ingredientsMatch.push((ingredient.id));
          }
        });
      });

      let result = undefined;
      if (filterType === 'includeAll') {
        result = (ingredientsMatch.length === selectedIngredients.length);
      } else if (filterType === 'atLeastOne') {
        result = (ingredientsMatch.length > 0);
      }
      return result;
    
    };

    const nameMatch = name ? (cocktail.name.toLowerCase().includes(name.toLowerCase())) : true; // working
    const availableMatch = available ? (allIngredients ? (processAvailableCocktailsMatch(cocktail)) : true) : true; // working
    const ingredientsMatch = (ingredients.length > 0) ? processIngredientsMatch(cocktail, ingredients) : true;
    const categoryMatch = category ? (category === cocktail.category) : true; // working
    const ibaMatch = iba ? (iba === cocktail.iba) : true; // working
    const timingMatch = timing ? (timing === cocktail.timing) : true; // working
    const alcoholicMatch = alcoholic ? (alcoholic === cocktail.alcoholic) : true; // working
    const veganMatch = vegan ? (vegan === cocktail.vegan) : true; // working
    
    // if all of these are true then the individual cocktail passes the filter test and makes part of the new array
    return nameMatch && availableMatch && ingredientsMatch && categoryMatch && ibaMatch && timingMatch && alcoholicMatch && veganMatch; 
  }).sort()
}; 


