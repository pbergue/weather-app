// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import './assets/stylesheets/application.scss';
// Reducers
import todayWeatherReducer from './reducers/today-weather-reducer';
import aqiReducer from './reducers/aqi-reducer';
import forecastReducer from './reducers/forecast-reducer';
import majorCityAqiReducer from './reducers/major-city-aqi-reducer';

//Data exemples
import forecast from '../src/data/API-response-5-days-forecast.json';
import todayWeather from '../src/data/API-response-today-forecast.json';
import aqi from '../src/data/API-response-AQI-paris.json';
import cityList from '../src/data/major-city-list.json';
import majorCityAqi from '../src/data/major-city-aqi.json';


// State and reducers
const initialState = {
  majorCityList: cityList,
  selectedCity: todayWeather,
  forecast: forecast,
  aqi: aqi,
  majorCityAqi: majorCityAqi
};

const reducers = combineReducers({
  majorCityList: (state = null, action) => state,
  selectedCity: todayWeatherReducer,
  forecast: forecastReducer,
  aqi: aqiReducer,
  majorCityAqi: majorCityAqiReducer
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
