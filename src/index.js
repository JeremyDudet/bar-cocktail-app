import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import configureStore from './redux/store/configureStore';
import { startSetIngredients } from './redux/actions/ingredients';
import { startSetCocktails } from './redux/actions/cocktails';
import './firebase/firebase'; // allows the file to be run

const store = configureStore(); // gives us access to: store.dispatch store.getState store.subscribe

async function startApp() {
  ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
  try {
    await store.dispatch(startSetCocktails());
    await store.dispatch(startSetIngredients());
  } catch {
    alert("Couldn't connect to server");
  }
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

startApp();
