export const huntsReducer = (store = [],  action) => {
  switch (action.type) {
  case 'ADD_HUNTS':
    return action.hunts;
  default:
    return store;
  }
};
