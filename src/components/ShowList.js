import React, { useState } from "react";
import { format, formatISO, parse, parseISO } from "date-fns";
import add from "date-fns/add";
import Overlay from "../components/Overlay";
import styled from "styled-components";
import Show from "./Show";
import ShowModal from "./ShowModal";
import { useShows } from "../context/ShowsContext";
import { getDayFromToday, getFullDayName } from "../lib/api";

const Wrapper = styled.div`
  margin-top: 20px;
  h1.title {
    font-size: 2.4em;
    margin-bottom: 25px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const ShowList = () => {
  const [selectedShow, setSelectedShow] = useState(null);
  const onViewShowDetails = () => {
    // alert("works");
    setSelectedShow(1);
  };
  const onHideShowDetails = () => {
    setSelectedShow(null);
  };
  const { state } = useShows();
  const shows = state.shows;
  console.log("******Shows", shows);
  const renderShows = () => {
    return shows.map((dayShows) => {
      for (let date in dayShows) {
        console.log("*******Date - day", formatISO(parseISO(date)));

        console.log(
          "*******Date - day --",
          new Date(formatISO(parseISO(date))).getDay()
        );
        return dayShows[date].map((show, i) => {
          // console.log("******Show", show);
          return (
            <React.Fragment key={show.id}>
              {i === 0 && <h1 className="title">{getFullDayName(date)}</h1>}
              <div
                className="col-md-6 col-xl-4"
                onClick={onViewShowDetails}
                key={show.id}
              >
                <Show show={show} />
              </div>
            </React.Fragment>
          );
        });
      }
    });

    // return shows.map((showObj) => {
    //   const show = showObj;
    //   return (
    //     <div
    //       className="col-md-6 col-xl-4"
    //       onClick={onViewShowDetails}
    //       key={show.id}
    //     >
    //       <Show show={show} />
    //     </div>
    //   );
    // });
  };
  return (
    <Wrapper className="container-lg">
      {selectedShow && <Overlay hideOverlay={onHideShowDetails} />}
      {selectedShow && <ShowModal onHideShowDetails={onHideShowDetails} />}
      <div>
        {/* <h1 className="title">Today</h1> */}
        {/*row */}
        <div className="row">{renderShows()}</div>
      </div>

      {/*End row */}
    </Wrapper>
  );
};

export default ShowList;
