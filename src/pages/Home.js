import React, { useEffect, useState } from "react";
import ShowList from "../components/ShowList";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [days, setDays] = useState([]);
  useEffect(() => {
    console.log("****fetch shows here");
    getDays();
  }, []);
  const getDays = () => {
    console.log("****get days");
  };
  return (
    <div>
      <ShowList />
    </div>
  );
};

export default Home;
