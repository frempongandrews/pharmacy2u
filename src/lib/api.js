import axios from "axios";
import { formatISO, parseISO } from "date-fns";
import add from "date-fns/add";

export const api = axios.create({
  baseURL: `https://api.tvmaze.com`,
});

export const fetchShowsByDay = async (day = getTodaysDate()) => {
  // set day to today
  console.log("*****Making API call");
  try {
    //   console.log("******today: ", today);
    // date format: 2022-02-18
    const res = await api.get(`/schedule?country=gb&date=${day}`);
    return res;
  } catch (err) {
    return err.message;
  }
};

export const fetchShowWithEpisodesById = async (id) => {
  try {
    const showRes = await api.get(`/shows/${id}`);
    const showEpisodesRes = await api.get(`/shows/${id}/episodes`);
    const res = {
      data: {
        showDetails: {
          ...showRes.data,
        },
        showEpisodesList: {
          ...showEpisodesRes.data,
        },
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
