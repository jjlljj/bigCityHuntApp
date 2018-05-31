export const addHunts = hunts => ({
  type: 'ADD_HUNTS',
  hunts
})

export const updateMarkerModal= hunt => ({
  type: 'UPDATE_MODAL_CONTENT',
  hunt
})

export const toggleMarkerModal = () => ({
  type: 'TOGGLE_MODAL'
})
