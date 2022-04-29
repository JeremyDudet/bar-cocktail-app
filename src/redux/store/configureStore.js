import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import cocktailsReducer from '../reducers/cocktails';
import cocktailFiltersReducer from '../reducers/cocktailFilters';
import ingredientFiltersReducer from '../reducers/ingredientFilters';
import ingredientsReducer from '../reducers/ingredients';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store Creation
  const store = createStore(
    combineReducers({
      cocktails: cocktailsReducer,
      ingredientFilters: ingredientFiltersReducer,
      cocktailFilters: cocktailFiltersReducer,
      ingredients: ingredientsReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
