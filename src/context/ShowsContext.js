import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import { SET_SHOWS } from "../actions/actions";
import { fetchShowsByDay, getTodaysDate } from "../lib/api";
import showsReducer from "../reducers/showsReducer";

export const ShowsContext = createContext();

const initialState = {
  isFetching: false,
  isFetchSuccess: false,
  isFinishedFetching: false,
  shows: [],
  error: "",
};

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
      dispatch({
        type: SET_SHOWS,
        shows: { [today]: todaysShows },
      });
      //   setState({
      //     ...state,
      //     shows: [
      //       {
      //         [getTodaysDate()]: todaysShows,
      //       },
      //     ],
      //   });
      //   console.log("*****Got shows from localstorage");
      //   return;
    }

    // const res = await fetchShowsByDay();
    // if (res.status === 200) {
    //   setState({
    //     ...state,
    //     shows: [
    //       {
    //         [getTodaysDate()]: [...res.data],
    //       },
    //     ],
    //   });
    //   if (localStorage.getItem("shows")) {
    //     const previouslySavedShows = JSON.parse(localStorage.getItem("shows"));
    //     // updating
    //     const updatedFetchedShows = previouslySavedShows;
    //     updatedFetchedShows[today] = res.data;
    //     localStorage.setItem("shows", JSON.stringify(updatedFetchedShows));
    //   } else {
    //     const showsObj = {};
    //     showsObj[today] = [...res.data];
    //     localStorage.setItem("shows", JSON.stringify(showsObj));
    //   }
    //   return;
    // }
    // setState({
    //   ...state,
    //   error: res,
    // });
  };

  //   const onFetchShowsForDay = (day) => {
  //     console.log("*****onFetchShowsForDay");
  //   };

  return (
    <ShowsContext.Provider value={{ state, dispatch }}>
      {children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;
