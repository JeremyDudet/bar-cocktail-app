// Ingredients Reducer

const ingredientReducerDefaultState = [];

export default (state = ingredientReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.ingredient];

    case 'EDIT_INGREDIENT':
      return state.map((ingredient) => {
        if (ingredient.id === action.id) {
          return {
            ...ingredient,
            ...action.updates,
          };
        } else {
          return ingredient;
        }
      });

    case 'REMOVE_INGREDIENT':
      return state.filter(({ id }) => id !== action.id);

    case 'SET_INGREDIENTS':
      return action.ingredients;

    default:
      return state;
  }
};
