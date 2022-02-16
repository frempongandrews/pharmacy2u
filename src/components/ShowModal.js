import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

const Wrapper = styled.div`
  z-index: 300;
  position: fixed;
  border-radius: 8px;
  border: 1px solid var(--theme-black);
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 900px;
  height: 60vh;
  overflow-y: scroll;
  background-color: white;
  .close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    font-size: 20px;
    cursor: pointer;
  }
  .show-image-container {
    height: 80%;
    overflow: hidden;
    position: relative;
    &:hover img.show-cover-image {
      filter: blur(4px);
    }
    .show-title {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 2;
    }

    img.show-cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .play-btn-container {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
      cursor: pointer;
    }

    .play-btn-inner-container {
      position: relative;
      padding: 10px;
      border: 8px solid black;
      border-radius: 100%;
      background-color: var(--theme-light-gray);
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px;
        transform: scale(1.4);
        border-radius: 100%;
        border: 4px solid var(--theme-light-gray);
      }
      .play-btn {
        position: relative;
        right: -2px;
      }
    }
  }
  .content {
    padding: 20px;
  }
  .description {
    margin-top: 20px;
    font-size: var(--theme-small-font);
  }

  .episodes-container {
    margin-top: 20px;
    .episodes-inner-container {
      height: 510px;
      overflow-y: scroll;
    }
    .episode-container {
      display: flex;
      position: relative;
      height: 180px;
      border: 1px solid var(--theme-light-gray);
      border-radius: 20px;
      align-items: center;
      padding: 30px 10px;
      gap: 20px;
      background-color: var(--theme-light-gray);
      margin-bottom: 20px;
      .title {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: var(--theme-small-font);
        font-weight: 500;
      }
      .episode-image-container {
        height: 100%;
        min-width: 180px;
        position: relative;
        .play-btn {
          position: absolute;
          top: 50px;
          right: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .episode-description-container {
        height: 100%;
        flex: 1;
        font-size: var(--theme-small-font);
        padding-top: 5px;
        overflow-y: scroll;
      }
    }
    .about-container {
      font-size: var(--theme-small-font);
      height: 545px;
      overflow: hidden;
      border: 2px solid;
      .series-image-container {
        overflow: hidden;
        height: 400px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    top: 50%;
    height: 98vh;
    width: 95%;
  }
`;

const ShowModal = ({ onHideShowDetails }) => {
  return (
    <Wrapper className="">
      <span className="close-modal" onClick={onHideShowDetails}>
        x
      </span>

      {/*show-image-container */}

      <div className="show-image-container">
        <p className="show-title">In paradise - Episode 3</p>
        <div className="play-btn-container">
          <div className="play-btn-inner-container">
            <FaPlay className="play-btn" />
          </div>
        </div>
        <img
          className="show-cover-image"
          src={
            "https://static.tvmaze.com/uploads/images/original_untouched/257/642675.jpg"
          }
        />
      </div>
      {/*End show-image-container */}
      <div className="content">
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ultricies nec mauris a mattis. Aenean vel scelerisque leo, elementum
          rhoncus risus. Nunc dictum ipsum sed enim tempor, ut interdum lectus
          pulvinar.
        </p>

        {/*Espisodes container */}
        <div className="row episodes-container">
          {/* col */}
          <div className="col-lg-8 episodes-inner-container">
            {/*single episode */}
            <div className="episode-container">
              <p className="title">Series 1 - Episode 1</p>
              <div className="episode-image-container">
                <FaPlay className="play-btn" />
                <img
                  src="https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
                  width="180px"
                />
              </div>
              <div className="episode-description-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...{" "}
                </p>
              </div>
            </div>

            {/*single episode */}
            <div className="episode-container">
              <p className="title">Series 1 - Episode 1</p>
              <div className="episode-image-container">
                <img
                  src="https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
                  width="180px"
                />
              </div>
              <div className="episode-description-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...{" "}
                </p>
              </div>
            </div>

            {/*single episode */}
            <div className="episode-container">
              <p className="title">Series 1 - Episode 1</p>
              <div className="episode-image-container">
                <img
                  src="https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
                  width="180px"
                />
              </div>
              <div className="episode-description-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...{" "}
                </p>
              </div>
            </div>

            {/*single episode */}
            <div className="episode-container">
              <p className="title">Series 1 - Episode 1</p>
              <div className="episode-image-container">
                <img
                  src="https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
                  width="180px"
                />
              </div>
              <div className="episode-description-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...{" "}
                </p>
              </div>
            </div>

            {/*single episode */}
            <div className="episode-container">
              <p className="title">Series 1 - Episode 1</p>
              <div className="episode-image-container">
                <img
                  src="https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
                  width="180px"
                />
              </div>
              <div className="episode-description-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...{" "}
                </p>
              </div>
            </div>

            {/*single episode */}
            <div className="episode-container">
              <p className="title">Series 1 - Episode 1</p>
              <div className="episode-image-container">
                <img
                  src="https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
                  width="180px"
                />
              </div>
              <div className="episode-description-container">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...{" "}
                </p>
              </div>
            </div>
          </div>
          {/*End col */}
          {/*About container */}
          <div className="col-lg-4 about-container">
            <p className="title">About the series</p>
            {/*image container */}
            <div className="series-image-container">
              <img
                src="https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
                height={400}
              />
            </div>
            {/*End image container */}
            {/* series description*/}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
            {/* End series description*/}
          </div>
          {/*End About container */}
        </div>
        {/*End espisodes container */}
      </div>
    </Wrapper>
  );
};

ShowModal.propTypes = {
  onHideShowDetails: PropTypes.func.isRequired,
};

export default ShowModal;
