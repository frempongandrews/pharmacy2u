import axios from "axios";

import add from "date-fns/add";
import { formatISO } from "date-fns";

export const api = axios.create({
  baseURL: `https://api.tvmaze.com`,
});

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
