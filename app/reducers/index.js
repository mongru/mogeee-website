import { combineReducers } from 'redux';
import WorksReducer from './reducer_works';

function GalleryReducer(state = {}, action) {
  switch (action.type) {
    case 'SHOW_ALL':
      return state;
    case 'SHOW_DESIGN':
      return state.works.tags;
    case 'SHOW_DEVELOPMENT':
      return state.works.tags;
    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state;
  }
}
 
const rootReducer = combineReducers({
  works: WorksReducer,
  visibilityFilter
});

export default rootReducer;
