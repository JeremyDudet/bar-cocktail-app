// actions are called by the dispatch() function
// dispatch() function is attached to individual components through their HOC
// allowing users to trigger onClick onChange events and send out actions accordingly

//  ------ INGREDIENT FILTERS ------

// SET_NAME_FILTER action generator
export const setNameFilter = (name = '') => ({
  type: 'SET_INGREDIENT_NAME_FILTER',
  name,
});

export const setAvailableFilter = (available = '') => ({
  type: 'SET_INGREDIENT_AVAILABLE_FILTER',
  available,
});

// SET_CATEGORY_FILTER action generator
export const setCategoryFilter = (category) => ({
  type: 'SET_INGREDIENT_CATEGORY_FILTER',
  category,
});

// SET_ALCOHOL_FILTER action generator
export const setAlcoholFilter = (alcoholic) => ({
  type: 'SET_INGREDIENT_ALCOHOL_FILTER',
  alcoholic,
});

// SET_VEGAN_FILTER action generator
export const setVeganFilter = (vegan) => ({
  type: 'SET_INGREDIENT_VEGAN_FILTER',
  vegan,
});
