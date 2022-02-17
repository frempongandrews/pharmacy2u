import axios from "axios";

import add from "date-fns/add";
import { format, formatISO } from "date-fns";

export const api = axios.create({
  baseURL: `https://api.tvmaze.com`,
});

export const getTodaysDate = () => {
  const todayInISO = formatISO(new Date());
  return todayInISO.split("T")[0];
};

export const fetchShowsByDay = async (day) => {
  if (!day) {
    // set day to today
    console.log("*****Making API call");
    try {
      const today = getTodaysDate();
      //   console.log("******today: ", today);
      const res = await api.get(`/schedule?country=gb&date=${today}`);
      return res;
    } catch (err) {
      return err.message;
    }
  }
};
