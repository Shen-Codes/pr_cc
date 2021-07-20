export const SET_LIST = "SET_LIST";
export const SET_FILTER = "SET_FILTER";
export const SET_FILTERED_BREEDS = "SET_FILTERED_BREEDS";

export const SetList = list => {
  return {
    type: SET_LIST,
    payload: list,
  };
};

export const SetFilter = filter => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const SetFilteredBreeds = () => {
  return {
    type: SET_FILTERED_BREEDS
  };
};

