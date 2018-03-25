export const SET_WORKS = 'SET_WORKS';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DESIGN: 'SHOW_DESIGN',
  SHOW_DEVELOPMENT: 'SHOW_DEVELOPMENT'
}

export const toggleWork = tags => ({
  type: 'TOGGLE_WORK',
  tags
})

export function setWorks(works) {
    const action = {
        type: SET_WORKS,
        works
    }
    return action;
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
