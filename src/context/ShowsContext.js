import React, { createContext, useEffect, useReducer } from "react";
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
      // const todaysShows = JSON.parse(localStorage.getItem("shows"))[today];
      const cachedShows = JSON.parse(localStorage.getItem("shows"));
      const todaysShows = cachedShows[today];

      dispatch({
        type: SET_SHOWS,
        shows: { [today]: todaysShows },
      });
      return;
    }

    const res = await fetchShowsByDay();
    if (res.status === 200) {
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
