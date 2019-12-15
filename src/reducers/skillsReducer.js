import {
  FETCH_RESUME_SKILLS
} from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_RESUME_SKILLS:
      return action.payload;
    default:
      return state;
  }
}
