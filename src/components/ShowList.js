import React, { useContext, useState, useRef, useCallback } from "react";
import Overlay from "../components/Overlay";
import styled from "styled-components";
import Show from "./Show";
import ShowModal from "./ShowModal";
import {
  fetchShowWithEpisodesById,
  fetchShowsByDay,
  getDayFromToday,
  getFullDayName,
  saveShowsToLocalStorage,
} from "../lib/api";
import { ShowsContext } from "../context/ShowsContext";
import {
  CLOSE_SHOW_MODAL,
  FETCH_SHOWS_ERROR,
  FETCH_SHOWS_SUCCESS,
  INCREASE_PAGE_NUMBER,
  SET_SELECTED_SHOW_ERROR,
  SET_SELECTED_SHOW_SUCCESS,
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
  const { isFetching, currentPage, selectedShow } = state;
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

          dispatch({
            type: INCREASE_PAGE_NUMBER,
          });
          const res = await fetchShowsByDay(day);

          if (res.status === 200) {
            saveShowsToLocalStorage({ key: day, value: res.data });
            dispatch({
              type: FETCH_SHOWS_SUCCESS,
              shows: { [day]: [...res.data] },
            });
            setCanFetch(false);
            setTimeout(() => {
              setCanFetch(true);
            }, 800);

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

  const onViewShowDetails = async (id) => {
    const res = await fetchShowWithEpisodesById(id);

    if (res.status === 200) {
      dispatch({
        type: SET_SELECTED_SHOW_SUCCESS,
        show: res.data,
      });
      return;
    }
    dispatch({
      type: SET_SELECTED_SHOW_ERROR,
      message: res,
    });
  };

  const onHideShowDetails = () => {
    dispatch({
      type: CLOSE_SHOW_MODAL,
    });
  };

  const renderShows = () => {
    return shows.map((dayShows) => {
      for (let date in dayShows) {
        return dayShows[date].map((show, i) => {
          // lastEl reached which we load next day
          if (i === Math.floor((dayShows[date].length - 1) / 2)) {
            return (
              <div
                className="col-md-6 col-xl-4"
                onClick={() => onViewShowDetails(show.show.id)}
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
              <div
                className="col-md-6 col-xl-4"
                onClick={() => onViewShowDetails(show.show.id)}
                key={show.id}
              >
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
