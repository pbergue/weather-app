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

// State and reducers
const initialState = {
  majorCityList: ['Paris', 'New York', 'London', 'Beijing'],
  selectedCity: {
    name: "Laval",
    country: "France",
    tmin: "18°C",
    tmax: "25°C",
    humidity: "36%",
    pressure: "1024 hPa",
    windSpeed: "18km/h",
    windDir: "W",
    quality: "13"
  }
};

const reducers = combineReducers({
  majorCityList: (state = null, action) => state,
  selectedCity: (state = null, action) => state
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
