// this function returns an object
// { 
//   ingredient.id: number of appearances throughout all cocktails,
// }

export const appearancesOf = (allIngredients, allCocktails) => {

  const ingredientsIDs = allIngredients.map( ingredient => (ingredient.id));

  const ingredientAppearances = ingredientsIDs.map(id => {
    const nestedArr = [id];
    let count = 0;
    allCocktails.forEach(cocktail => {
      cocktail.recipe.forEach(ingredient => {
        if (ingredient.id === id) {count++};
      });
    });
    nestedArr.push(count);
    return nestedArr;
  });

  return Object.fromEntries(ingredientAppearances);
};
