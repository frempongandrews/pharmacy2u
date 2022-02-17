import React, { useContext, useState, useRef, useCallback } from "react";
import { throttle } from "throttle-debounce";
import { formatISO, parseISO } from "date-fns";
import Overlay from "../components/Overlay";
import styled from "styled-components";
import Show from "./Show";
import ShowModal from "./ShowModal";
import {
  fetchShowsByDay,
  getDayFromToday,
  getFullDayName,
  saveShowsToLocalStorage,
} from "../lib/api";
import { ShowsContext } from "../context/ShowsContext";
import {
  FETCH_SHOWS_ERROR,
  FETCH_SHOWS_START,
  FETCH_SHOWS_SUCCESS,
  INCREASE_PAGE_NUMBER,
} from "../actions/actions";

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
  const [canFetch, setCanFetch] = useState(true);
  const { state, dispatch } = useContext(ShowsContext);
  const { isFetching, currentPage } = state;
  // console.log("******state showslist", state);
  const shows = state.shows;

  const observer = useRef();
  const lastEl = useCallback(
    async (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && currentPage < 7 && canFetch) {
          // setPageNumber(prevPageNumber => prevPageNumber + 1)
          const day = getDayFromToday(currentPage);
          console.log("*****Day", day);
          dispatch({
            type: INCREASE_PAGE_NUMBER,
          });
          const res = await fetchShowsByDay(day);
          console.log("*******res", res);
          if (res.status === 200) {
            saveShowsToLocalStorage({ key: day, value: res.data });
            dispatch({
              type: FETCH_SHOWS_SUCCESS,
              shows: { [day]: [...res.data] },
            });
            setCanFetch(false);
            setTimeout(() => {
              setCanFetch(true);
            }, 1500);

            return;
          }

          dispatch({
            type: FETCH_SHOWS_ERROR,
            message: res,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, currentPage]
  );

  // const [selectedShow, setSelectedShow] = useState(null);
  // const onViewShowDetails = () => {
  //   // alert("works");
  //   setSelectedShow(1);
  // };
  // const onHideShowDetails = () => {
  //   setSelectedShow(null);
  // };

  const renderShows = () => {
    console.log("******Shows", shows);

    return shows.map((dayShows) => {
      for (let date in dayShows) {
        console.log("*******Date - day", formatISO(parseISO(date)));

        console.log(
          "*******Date - day --",
          new Date(formatISO(parseISO(date))).getDay()
        );
        return dayShows[date].map((show, i) => {
          // console.log("******Show", show);
          // lastEl reached which we load next day
          if (i === dayShows[date].length - 1) {
            return (
              <div
                className="col-md-6 col-xl-4"
                onClick={null}
                key={show.id}
                ref={lastEl}
              >
                <Show show={show} />
              </div>
            );
          }
          return (
            <React.Fragment key={show.id}>
              {i === 0 && <h1 className="title">{getFullDayName(date)}</h1>}
              <div className="col-md-6 col-xl-4" onClick={null} key={show.id}>
                <Show show={show} />
              </div>
            </React.Fragment>
          );
        });
      }
    });
  };
  return (
    <Wrapper className="container-lg">
      {/* {selectedShow && <Overlay hideOverlay={onHideShowDetails} />}
      {selectedShow && <ShowModal onHideShowDetails={onHideShowDetails} />} */}
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
