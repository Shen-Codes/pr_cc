import {createContext, FC, useReducer, Context} from 'react';
import * as ACTIONS from './actions';
import { reducer } from './reducers';

export type State = {
  dogBreeds: string[],
  filteredBreeds: string[],
  filter: string,
  error: Error
}

export const InitialState: State = {
  dogBreeds: [],
  filteredBreeds: [],
  filter: "",
  error: null
};

export type DogsContextValue = {
  dogBreeds: string[],
  filter: string,
  filteredBreeds: string[],
  error: Error,
  setList: (list: string[]) => void,
  setFilter: (filter: string) => void,
  setFilteredBreeds: () => void,
  setError: (error: Error) => void,
}

export const DogsContext: Context<DogsContextValue> = createContext(InitialState as DogsContextValue);

export const DogsContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const setList = list => {
    dispatch(ACTIONS.SetList(list));
  };
  const setFilter = filter => {
    dispatch(ACTIONS.SetFilter(filter));
  };
  const setFilteredBreeds = () => {
    dispatch(ACTIONS.SetFilteredBreeds());
  };
  const setError = error => {
    dispatch(ACTIONS.SetError(error))
  }


  const contextValue = {
    dogBreeds: state.dogBreeds,
    filter: state.filter,
    filteredBreeds: state.filteredBreeds,
    error: state.error,
    setList,
    setFilter,
    setFilteredBreeds,
    setError,
  };

  return (
    <DogsContext.Provider value={contextValue}>
      {children}
    </DogsContext.Provider>
  );
};
