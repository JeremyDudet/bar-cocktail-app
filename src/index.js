import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { startSetIngredients } from './redux/actions/ingredients';
import { startSetCocktails } from './redux/actions/cocktails';
import './firebase/firebase'; // allows the file to be run


const store = configureStore(); // gives us access to: store.dispatch store.getState store.subscribe

ReactDOM.render(<p>Loading...</p> ,document.getElementById('root'));


store.dispatch(startSetCocktails());
store.dispatch(startSetIngredients()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
});
   