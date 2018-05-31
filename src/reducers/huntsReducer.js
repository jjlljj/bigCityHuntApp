export const huntsReducer = (state = [],  action) => {
  switch (action.type) {
  case 'ADD_HUNTS':
    return action.hunts;
  default:
    return state;
  }
};
