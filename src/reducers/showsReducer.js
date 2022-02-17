import {
  CLOSE_SHOW_MODAL,
  FETCH_SHOWS_START,
  FETCH_SHOWS_SUCCESS,
  INCREASE_PAGE_NUMBER,
  SET_SELECTED_SHOW_ERROR,
  SET_SELECTED_SHOW_SUCCESS,
  SET_SHOWS,
} from "../actions/actions";
import { saveShowsToLocalStorage } from "../lib/api";

export const initialState = {
  isFetching: false,
  isFetchSuccess: false,
  isFinishedFetching: false,
  shows: [],
  currentPage: 1,
  selectedShow: null,
  error: "",
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_SHOW_MODAL:
      return {
        ...state,
        selectedShow: null,
      };
    case SET_SELECTED_SHOW_SUCCESS:
      return {
        ...state,
        selectedShow: action.show,
      };
    case SET_SELECTED_SHOW_ERROR:
      return {
        ...state,
        selectedShow: null,
        error: action.message,
      };
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
