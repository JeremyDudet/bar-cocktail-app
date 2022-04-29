import { database } from '../../firebase/firebase';

// ADD_COCKTAIL action generator
export const addCocktail = (cocktail) => ({
  type: 'ADD_COCKTAIL',
  cocktail,
});

export const startAddCocktail = (cocktailData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      description = '',
      timing = '',
      category,
      recipe = [], // list of objects. example -> [{ingredients.id: {name : "name", units : "oz", amount : 2}}]
      instructions = '',
      iba,
      note,
      alcoholic,
      vegan,
      createdAt,
      lastEdited,
    } = cocktailData;
    const cocktail = {
      name,
      description,
      timing,
      category,
      recipe,
      instructions,
      iba,
      note,
      alcoholic,
      vegan,
      createdAt,
      lastEdited,
    };

    database
      .ref('cocktails')
      .push(cocktail)
      .then((ref) => {
        // first we add to the database
        dispatch(
          addCocktail({
            // then we add to redux
            id: ref.key, // we use the id that was provided by firebase
            ...cocktail,
          })
        );
      });
  };
};

export const removeCocktail = ({ id } = {}) => ({
  type: 'REMOVE_COCKTAIL',
  id,
});

export const startRemoveCocktail = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`/cocktails/${id}`)
      .remove()
      .then(() => {
        dispatch(removeCocktail({ id }));
      });
  };
};

// EDIT_COCKTAIL action generator/creator
export const editCocktail = (id, updates) => ({
  type: 'EDIT_COCKTAIL',
  id,
  updates,
});

export const startEditCocktail = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`/cocktails/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editCocktail(id, updates));
      });
  };
};

// SET_COCKTAILS
// this is going to allow us to completely set that array value, we get the array back from firebase, we set it, and done.
export const setCocktails = (cocktails) => ({
  type: 'SET_COCKTAILS',
  cocktails,
});

// will fetch the data, and then dispatch setCocktails
export const startSetCocktails = () => {
  return (dispatch) => {
    return database
      .ref('cocktails')
      .once('value')
      .then((snapshot) => {
        const cocktails = [];

        snapshot.forEach((childSnapshot) => {
          cocktails.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setCocktails(cocktails));
      });
  };
};
