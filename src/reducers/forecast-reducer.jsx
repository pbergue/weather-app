import { GET_FORECAST } from '../actions';

export default function(state = null, action) {

  if (state === undefined) {
    return [];
  }

  switch(action.type) {
    case GET_FORECAST:
      return action.payload;
    default:
      return state;
  }

}
