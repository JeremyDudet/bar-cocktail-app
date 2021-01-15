// actions are called by the dispatch() function
// dispatch() function is attached to individual components through their HOC
// allowing users to trigger onClick onChange events and send out actions accordingly

//  ------ COCKTAIL FILTERS ------ 

// SET_COCKTAIL_NAME_FILTER action generator
export const setNameFilter = (name = '') => ({
  type: 'SET_COCKTAIL_NAME_FILTER',
  name
});

// SET_AVAILABLE_FILTER
export const setAvailableFilter = (available = undefined) => ({
  type: 'SET_AVAILABLE_FILTER',
  available
})

export const setIngredientFilterType = (filterType = '') => ({
  type: 'SET_INGREDIENTS_FILTER_TYPE',
  filterType
});

// SET_INGREDIENT_FILTER action generator
export const setIngredientFilter = (ingredients = []) => ({
  type: 'SET_INGREDIENTS_FILTER',
  ingredients
});

// SET_CATEGORY_FILTER
export const setCategoryFilter = (category = undefined) => ({
  type: 'SET_CATEGORY_FILTER',
  category
});

// SET_IBA_FILTER
export const setIbaFilter = (iba = undefined) => ({
  type: 'SET_IBA_FILTER',
  iba
});

// SET_TIMING_FILTER
export const setTimingFilter = (timing = undefined) => ({
  type: 'SET_TIMING_FILTER',
  timing
});

// SET_ALCOHOLIC_FILTER
export const setAlcoholicFilter = (alcoholic = undefined) => ({
  type: 'SET_ALCOHOLIC_FILTER',
  alcoholic
})

// SET_VEGAN_FILTER
export const setVeganFilter = (vegan = undefined) => ({
  type: 'SET_VEGAN_FILTER',
  vegan
})
