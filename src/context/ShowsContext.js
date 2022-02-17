import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchShowsByDay, getTodaysDate } from "../lib/api";

const ShowsContext = createContext();

const ShowsContextProvider = ({ children }) => {
  const [state, setState] = useState({
    shows: [],
    error: "",
  });

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
      setState({
        ...state,
        shows: [...todaysShows],
      });
      console.log("*****Got shows from localstorage");
      return;
    }
    const res = await fetchShowsByDay();
    if (res.status === 200) {
      setState({
        ...state,
        shows: [...res.data],
      });
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
      return;
    }
    setState({
      ...state,
      error: res,
    });
    console.log("*****res", res);
  };

  const getDays = () => {
    console.log("****get days");
  };

  const setShows = () => {};

  return (
    <ShowsContext.Provider value={{ state }}>{children}</ShowsContext.Provider>
  );
};

export const useShows = () => {
  const shows = useContext(ShowsContext);

  return shows;
};

export default ShowsContextProvider;
