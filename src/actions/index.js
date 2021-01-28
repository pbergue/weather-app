// TODO: add and export your own actions
export const GET_TODAY_WEATHER = 'GET_TODAY_WEATHER';
export const GET_AQI = 'GET_AQI';

export function getTodayWeather(city, country) {
  const apiKey = "679cbafd4a5e44c25bca4dd8f0fd5c14";
  const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`)
  .then(response => response.json());

  return {
    type: GET_TODAY_WEATHER,
    payload: promise
  }
}

export function getAqi(lat, long) {
  const aqiApiKey = "9cac9d21-23b6-4736-8409-7b1885f9b665";
  const promise = fetch(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=${aqiApiKey}`)
  .then(response => response.json());

  return {
    type: GET_AQI,
    payload: promise
  }
}
