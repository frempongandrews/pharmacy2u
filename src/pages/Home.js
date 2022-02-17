import React, { useEffect, useState } from "react";
import ShowList from "../components/ShowList";
import { useShows } from "../context/ShowsContext";

const Home = () => {
  return (
    <div>
      <ShowList />
    </div>
  );
};

export default Home;
