// Cocktail Reducer

const cocktailReducerDefaultState = [];

export default (state = cocktailReducerDefaultState, action) => {
  switch (action.type) {

    case 'ADD_COCKTAIL':
      return [
        ...state,
        action.cocktail
      ];

    case 'EDIT_COCKTAIL':
      return state.map((cocktail) => {
        if (cocktail.id === action.id) {
          return {
            ...cocktail,
            ...action.updates
          };
        } else {
          return cocktail;
        }
      });

    case 'REMOVE_COCKTAIL':
      return state.filter(({ id }) => id !== action.id);

    case 'SET_COCKTAILS':
      return action.cocktails;

    default:
      return state;
  }
};