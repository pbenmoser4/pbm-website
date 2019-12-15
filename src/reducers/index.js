import { combineReducers } from 'redux';

import experienceReducer from './experienceReducer';
import skillsReducer from './skillsReducer';
import sectionsReducer from './sectionsReducer';

export default combineReducers({
  skills: skillsReducer,
  experience: experienceReducer,
  appSections: sectionsReducer
})
