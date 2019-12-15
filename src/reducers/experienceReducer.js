import { FETCH_RESUME_EXPERIENCE } from '../actions/types';

export default (state=null, action) => {
  switch(action.type) {
    case FETCH_RESUME_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
}
