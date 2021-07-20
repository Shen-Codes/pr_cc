import React, {createContext, useReducer} from 'react';
import * as ACTIONS from './actions'
import { reducer } from './reducers'

export const InitialState = {
  dogBreeds: [],
  filteredBreeds: [],
  filter: "",
};

export const DogsContext = createContext(InitialState);

export const DogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const setList = list => {
    dispatch(ACTIONS.SetList(list))
  };
  const setFilter = filter => {
    dispatch(ACTIONS.SetFilter(filter))
  };
  const setFilteredBreeds = () => {
    dispatch(ACTIONS.SetFilteredBreeds())
  };


  const contextValue = {
    dogBreeds: state.dogBreeds,
    filter: state.filter,
    images: state.images,
    filteredBreeds: state.filteredBreeds,
    setList,
    setFilter,
    setFilteredBreeds,
  };

  return (
    <DogsContext.Provider value={contextValue}>
      {children}
    </DogsContext.Provider>
  )
};
