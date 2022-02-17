import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { SET_SHOWS } from "../actions/actions";
import { fetchShowsByDay, getTodaysDate } from "../lib/api";
import showsReducer, { initialState } from "../reducers/showsReducer";

export const ShowsContext = createContext();

const ShowsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(showsReducer, initialState);
  useEffect(() => {
    onFetchTodayShows();
  }, []);

  const onFetchTodayShows = async () => {
    const today = getTodaysDate();
    // check if already fetched
    if (
      JSON.parse(localStorage.getItem("shows")) &&
      JSON.parse(localStorage.getItem("shows"))[today]
    ) {
      const todaysShows = JSON.parse(localStorage.getItem("shows"))[today];
      console.log("*******todaysShows", todaysShows);
      dispatch({
        type: SET_SHOWS,
        shows: { [today]: todaysShows },
      });
      console.log("*****Got shows from localstorage");
      return;
    }

    const res = await fetchShowsByDay();
    console.log("******res", res);
    if (res.status === 200) {
      // [getTodaysDate()]: [...res.data],
      if (localStorage.getItem("shows")) {
        const previouslySavedShows = JSON.parse(localStorage.getItem("shows"));
        // updating
        const updatedFetchedShows = previouslySavedShows;
        updatedFetchedShows[today] = res.data;
        localStorage.setItem("shows", JSON.stringify(updatedFetchedShows));
      } else {
        const showsObj = {};
        showsObj[today] = [...res.data];
        localStorage.setItem("shows", JSON.stringify(showsObj));
      }
      dispatch({
        type: SET_SHOWS,
        shows: { [getTodaysDate()]: [...res.data] },
      });
    }

    return;
  };

  return (
    <ShowsContext.Provider value={{ state, dispatch }}>
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;
