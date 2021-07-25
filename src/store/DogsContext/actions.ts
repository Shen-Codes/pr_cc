export const SET_LIST = "SET_LIST";
export const SET_FILTER = "SET_FILTER";
export const SET_FILTERED_BREEDS = "SET_FILTERED_BREEDS";
export const SET_ERROR = "SET_ERROR";

export type Action = {
  type: String,
  payload?: any
}

export const SetList = (list: string[]): Action => {
  return {
    type: SET_LIST,
    payload: list,
  };
};

export const SetFilter = (filter: string): Action => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const SetFilteredBreeds = (): Action => {
  return {
    type: SET_FILTERED_BREEDS
  };
};

export const SetError = (error: Error): Action => {
  return {
    type: SET_ERROR,
    payload: error
  }
}
