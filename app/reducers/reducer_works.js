import { SET_WORKS, SHOW_DESIGN, SHOW_DEVELOPMENT } from '../constants';

export default(state = [], action) => {
  switch (action.type) {
    case SET_WORKS: // eslint-disable-line no-case-declarations
      const { works } = action;
      return works;
    case SHOW_DESIGN:
      return state.map(work => (work.tags === 'design')
        ? work
        : '');
    case SHOW_DEVELOPMENT:
      return state.map(work => (work.tags === 'development')
        ? work
        : '');
    default:
      return state;
  }
};
