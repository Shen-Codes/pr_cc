import * as ACTIONS from './actions';
import { State } from './context';
import { Action } from './actions';


export const reducer = (state: State, action: Action) => {
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
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return;
  };
};
