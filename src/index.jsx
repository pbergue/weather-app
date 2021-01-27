// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import forecast from '../src/data/API-response-5-days-forecast.json';
import todayWeather from '../src/data/API-response-today-forecast.json';

// State and reducers
const initialState = {
  majorCityList: ['Paris', 'New York', 'London', 'Beijing'],
  selectedCity: todayWeather,
  forecast: forecast
};

const reducers = combineReducers({
  majorCityList: (state = null, action) => state,
  selectedCity: (state = null, action) => state,
  forecast: (state = null, action) => state
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
