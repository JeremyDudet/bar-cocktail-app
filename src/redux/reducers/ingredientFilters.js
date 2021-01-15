

// INGREDIENT FILTERS Reducer

const ingredientFiltersReducerDefaultState = {
  name: '',
  available: 'true',
  category: '',
  alcoholic: '',
  vegan: ''
};

export default (state = ingredientFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_INGREDIENT_NAME_FILTER':
      return {
        ...state,
        name: action.name
      };
    case 'SET_INGREDIENT_AVAILABLE_FILTER':
      return {
        ...state,
        available: action.available
      };
    case 'SET_INGREDIENT_CATEGORY_FILTER':
      return{
        ...state,
        category: action.category
      };
    case 'SET_INGREDIENT_ALCOHOL_FILTER':
      return{
        ...state,
        alcoholic: action.alcoholic
      };
    case 'SET_INGREDIENT_VEGAN_FILTER':
      return{
        ...state,
        vegan: action.vegan
      };  
    default:
      return state;
  }
};