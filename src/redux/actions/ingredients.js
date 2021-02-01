import { database } from '../../firebase/firebase';

// ADD_COCKTAIL action generator

export const addIngredient = (ingredient) => ({
  type: 'ADD_INGREDIENT',
  ingredient
});

// this only works because of redux-thonk
// dispatch this function that then dispatches an action generator
export const startAddIngredient = (ingredientData = {}) => {
  return (dispatch) => {
    const {
      name = '', 
      description = '',
      category = '',
      alcoholic = false,
      vegan = "true",
      available = "true",
      abv = 0
    } = ingredientData;
    const ingredient = { name, description, category, alcoholic, vegan, available, abv };

    database.ref('ingredients').push(ingredient).then((ref) => { // first we add to the database
      dispatch(addIngredient({ // then we add to redux
        id: ref.key,
        ...ingredient
      }));
    });
  }; 
}; 

//
export const removeIngredient = ({ id } = {}) => ({
  type: 'REMOVE_INGREDIENT',
  id
});

export const startRemoveIngredient = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`/ingredients/${id}`).remove().then(() => {
      dispatch(removeIngredient({ id }));
    });
  };
};

// EDIT INGREDIENTS
export const editIngredient = (id, updates) => ({
  type: 'EDIT_INGREDIENT',
  id,
  updates
});
export const startEditIngredient = (id, updates) => {
  return (dispatch) => {
    return database.ref(`/ingredients/${id}`).update(updates).then(() => {
      dispatch(editIngredient(id, updates));
    });
  };
};


// SET_INGREDIENTS
// this is going to allow us to completely set that array value, we get the array back from firebase, we set it, and done.
export const setIngredients = (ingredients) => ({
  type: 'SET_INGREDIENTS',
  ingredients,
});

// will fetch the data, and then dispaatch setIngredients
export const startSetIngredients = () => {
  return (dispatch) => {
    return database.ref('ingredients').once('value').then((snapshot) => {
      const ingredients = [];

      snapshot.forEach((childSnapshot) => {
        ingredients.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setIngredients(ingredients))
    });
  };
};




