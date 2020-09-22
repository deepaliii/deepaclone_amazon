import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allReducer from './reducer';

// state state to local storage--state ko persist karne ke liye we are using that
function saveToLocalStorage(state){
  try{
    const serializedState=JSON.stringify(state);
    localStorage.setItem('state',serializedState)

  }catch(e){
    console.error(e)
  }
}

//get state from local storage
function loadFromLocalStorage(){
  try{
    const serializedState=localStorage.getItem('state');
    if(serializedState===null) return undefined;
    return JSON.parse(serializedState)
  }
  catch(error){
    console.error(error)
    return undefined
  }
}

const persistantState=loadFromLocalStorage()

const store = createStore(
  allReducer,
  persistantState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)

store.subscribe(()=>saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
