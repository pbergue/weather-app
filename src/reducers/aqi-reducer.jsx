import { GET_AQI } from '../actions';

export default function(state = null, action) {

  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case GET_AQI:
      return action.payload;
    default:
      return state;
  }

}
