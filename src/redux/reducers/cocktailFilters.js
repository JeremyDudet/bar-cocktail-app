// COCKTAIL Filters Reducer

const filtersReducerDefaultState = {
  name: '',
  available: 'true',
  filterType: 'includeAll',
  ingredients: [],
  category: '', // category filter
  iba: '', // iba filter
  timing: '', // timing filter
  alcoholic: '',
  vegan: '',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_COCKTAIL_NAME_FILTER':
      return {
        ...state,
        name: action.name
      };
    case 'SET_AVAILABLE_FILTER':
      return {
        ...state,
        available: action.available
      };
    case 'SET_INGREDIENTS_FILTER_TYPE':
      return{
        ...state,
        filterType: action.filterType
      };
    case 'SET_INGREDIENTS_FILTER':
      return{
        ...state,
        ingredients: [...action.ingredients]
      };
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        category: action.category
      }
    case 'SET_IBA_FILTER':
      return {
        ...state,
        iba: action.iba
      }
    case 'SET_TIMING_FILTER':
      return {
        ...state,
        timing: action.timing
      }
    case 'SET_ALCOHOLIC_FILTER':
      return {
        ...state,
        alcoholic: action.alcoholic
      }
    case 'SET_VEGAN_FILTER':
      return {
        ...state,
        vegan: action.vegan
      }
    default:
      return state;
  }
};