// TODO: add and export your own actions
export const GET_TODAY_WEATHER = 'GET_TODAY_WEATHER';
export const GET_AQI = 'GET_AQI';
export const GET_FORECAST = 'GET_FORECAST';
export const GET_MAJOR_CITIES_AQI = 'GET_MAJOR_CITIES_AQI';

export function getTodayWeather(city, country) {
  const opKey = "679cbafd4a5e44c25bca4dd8f0fd5c14";
  const todayWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${opKey}&units=metric`)
  .then(response => response.json());

  return {
    type: GET_TODAY_WEATHER,
    payload: todayWeather
  }
}

export function getAqi(city, country) {
  const opKey = "679cbafd4a5e44c25bca4dd8f0fd5c14";
  const aqiKey = "0ba110d0-aa54-4ac9-b439-c93aca7b04b5";

  const todayAqi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${opKey}&units=metric`)
  .then(response => response.json())
  .then( data => {
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    return fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${aqiKey}`)
  })
  .then(response => response.json());

  return {
    type: GET_AQI,
    payload: todayAqi
  }
}

export function getMajorCitiesAqi(lat, lon) {
  const aqiKey = "0ba110d0-aa54-4ac9-b439-c93aca7b04b5";

  const majorCitiesAqi = fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${aqiKey}`)
  .then(response => response.json())

  return {
    type: GET_MAJOR_CITIES_AQI,
    payload: majorCitiesAqi
  }
}

export function getForecast(city, country) {
  const apiKey = "679cbafd4a5e44c25bca4dd8f0fd5c14";
  const promise = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${apiKey}&units=metric`)
  .then(response => response.json());
  return {
    type: GET_FORECAST,
    payload: promise
  }
}
