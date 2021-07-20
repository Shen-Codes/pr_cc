import * as ACTIONS from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LIST:
      return {
        ...state,
        dogBreeds: action.payload,
        filteredBreeds: action.payload
      };
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    case ACTIONS.SET_FILTERED_BREEDS:
      const filteredBreeds = state.dogBreeds.filter(breed => breed.startsWith(state.filter))
      return {
        ...state,
        filteredBreeds
      };
    default:
      return;
  };
};
