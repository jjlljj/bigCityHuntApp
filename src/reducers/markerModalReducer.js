export const markerModalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_MODAL_CONTENT':
      return action.hunt;
    default:
      return state;
  }
}

export const showMarkerModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !state;
    default:
      return state;
  }
}
