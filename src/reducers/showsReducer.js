import { SET_SHOWS } from "../actions/actions";

const initialState = {
  isFetching: false,
  isFetchSuccess: false,
  isFinishedFetching: false,
  shows: [],
  currentPage: 1,
  error: "",
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOWS:
      return {
        ...state,
        shows: [...state.shows, action.shows],
      };
    default:
      return state;
  }
};

export default showsReducer;
