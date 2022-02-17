import {
  FETCH_SHOWS_START,
  FETCH_SHOWS_SUCCESS,
  INCREASE_PAGE_NUMBER,
  SET_SHOWS,
} from "../actions/actions";

export const initialState = {
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

    case FETCH_SHOWS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        shows: [...state.shows, action.shows],
      };

    case INCREASE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case DECREASE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
};

export default showsReducer;
