import { GET_MAJOR_CITIES_AQI } from '../actions';

export default function(state = null, action) {

  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case GET_MAJOR_CITIES_AQI:
      state = [];
      state.push(action.payload);
      return state;
    default:
      return state;
  }

}
