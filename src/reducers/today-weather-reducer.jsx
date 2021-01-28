import { GET_TODAY_WEATHER } from '../actions';

export default function(state = null, action) {

  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case GET_TODAY_WEATHER:
      return action.payload;
    default:
      return state;
  }

}
