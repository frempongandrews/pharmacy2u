import axios from "axios";
import { formatISO, parseISO } from "date-fns";
import add from "date-fns/add";

export const api = axios.create({
  baseURL: `https://api.tvmaze.com`,
});

export const fetchShowsByDay = async (day = getTodaysDate()) => {
  try {
    // date format: 2022-02-18
    const res = await api.get(`/schedule?country=gb&date=${day}`);
    console.log("*****Making API call - res ", res);
    return res;
  } catch (err) {
    return err.message;
  }
};

export const fetchShowWithEpisodesById = async ({ id, date }) => {
  // date: used to get the episode number on the selected day
  try {
    const showRes = await api.get(`/shows/${id}`);
    const showEpisodesRes = await api.get(`/shows/${id}/episodes`);
    const showDetails = { ...showRes.data };
    const showEpisodesList = [...showEpisodesRes.data];
    let episodeNumber;
    let i = showEpisodesList.length - 1;

    while (i > 0) {
      let episode = showEpisodesList[i];
      if (episode.airdate.trim() === date.trim()) {
        episodeNumber = episode.number;
        break;
      }
      i--;
    }
    const res = {
      data: {
        showDetails: {
          ...showDetails,
          episodeNumber,
        },
        showEpisodesList,
      },
      status: showRes.status,
    };
    console.log("****** fetchShowById res", res);
    return res;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

export const getTodaysDate = () => {
  const todayInISO = formatISO(new Date());
  return todayInISO.split("T")[0];
};

export const getDayFromToday = (numberOfDaysFromToday = 0) => {
  const dayFns = add(new Date(), {
    days: numberOfDaysFromToday,
  });
  const dayInISO = formatISO(dayFns);
  return dayInISO.split("T")[0];
};

export const getFullDayName = (dateInString) => {
  const numberOfDay = new Date(formatISO(parseISO(dateInString))).getDay();
  switch (numberOfDay) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      return "Someday";
  }
};

export const saveShowsToLocalStorage = ({ key, value }) => {
  // shows => { "2022-02-19": [{}, {}]}
  if (localStorage.getItem("shows")) {
    const previousSavedShows = JSON.parse(localStorage.getItem("shows"));
    const updatedShows = previousSavedShows;
    updatedShows[key] = value;
    localStorage.setItem("shows", JSON.stringify(updatedShows));
  } else {
    const newShowsData = {
      [key]: value,
    };
    localStorage.setItem("shows", JSON.stringify(newShowsData));
  }
};

export const getCachedShowsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("shows"));
};

export const saveSingleShowToLocalStorage = ({ key, value }) => {
  // singleShow => { "123": {showDetails: {}, showEpisodesList: {}}, "456": ... }
  if (localStorage.getItem("singleShows")) {
    const previousSavedSingleShows = JSON.parse(
      localStorage.getItem("singleShows")
    );
    const updatedSingleShows = previousSavedSingleShows;
    updatedSingleShows[key] = value;
    localStorage.setItem("singleShows", JSON.stringify(updatedSingleShows));
  } else {
    const newSingleShowsData = {
      [key]: value,
    };
    localStorage.setItem("singleShows", JSON.stringify(newSingleShowsData));
  }
};

export const getCachedSingleShowsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("singleShows"));
};
