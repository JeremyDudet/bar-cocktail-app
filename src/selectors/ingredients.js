
// Ingredients Selector
// Get visible ingredients


export const selectIngredients = (ingredients, { name, available, category, alcoholic, vegan }) => {

  // filter() method creates a new array with all the elements that pass the test implemented by the function
  return ingredients.filter((ingredient) => { 

    

    const nameMatch = name ? ingredient.name.toLowerCase().includes(name.toLowerCase()) : true;
    const availalbeMatch = available ? (available === ingredient.available) : true;
    const categoryMatch = category ? (category === ingredient.category) : true;
    const alcoholicMatch = alcoholic ? ( alcoholic === ingredient.alcoholic ) : true;  
    const veganMatch = vegan ? ( vegan === ingredient.vegan ) : true; 

    // if all of these are true then the individual expense makes part of the new array
    return nameMatch && availalbeMatch && categoryMatch && alcoholicMatch && veganMatch; 
  })
  

  // // makes a new array with just the names of each ingredient
  // const nameArray = [];
  // const filteredIngredientNames = filteredIngredients.map((ingredient) => {
  //   nameArray.push(ingredient[name]);
  //   return nameArray.sort();
  // })

  // // array.sort() method arranges the names alphabetically 
  // // return filteredIngredients;
  // return filteredIngredientNames;
}; 

