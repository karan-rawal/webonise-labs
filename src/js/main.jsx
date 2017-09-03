import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'whatwg-fetch';
import App from './App/Components/App';
import StudentsListPageReducer from './StudentsListPage/Reducers/StudentsListPage';
import './main.scss';

const combinedReducers = combineReducers({
  studentsList: StudentsListPageReducer,
});

const store = createStore(combinedReducers);

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>, document.getElementById('root'));
