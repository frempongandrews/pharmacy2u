import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  height: 220px;
  /* width: 450px; */
  display: flex;
  border: 1px solid var(--theme-light-gray);
  border-radius: 12px;
  padding: 15px 10px;
  margin-bottom: 20px;
  box-shadow: 8px 8px 5px 0px var(--theme-dark-gray);
  background-color: var(--theme-light-gray);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }

  .image-container {
    height: 100%;
    width: 150px;
    overflow: hidden;
    border: 1px solid var(--theme-dark-gray);
    box-shadow: 5px 5px 5px 0px var(--theme-dark-gray);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .show-info-container {
    flex: 1;
    padding: 5px 20px;
    .show-info {
      h4 {
        font-size: 1.1em;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 5px;
      }
      p {
        font-size: 1em;

        color: gray;
      }
      margin-bottom: 10px;
    }
    .show-time {
      font-size: 1em;
    }
  }
`;

const Show = ({ show }) => {
  const { season, airtime, airdate } = show;
  const showName = show.name;
  const { name, schedule, network, image } = show.show;

  const formatAirDate = (airdate) => {
    const airdateArr = airdate.split("-");
    return airdateArr.reverse().join("/");
  };
  return (
    <Wrapper>
      <div className="image-container">
        <img
          src={`${image?.medium || "/static/image-not-available.png"}`}
          width={150}
        />
      </div>
      <div className="show-info-container">
        <div className="show-info">
          <h4>{name}</h4>
          <p>Series: {season}</p>
          <p>{showName}</p>
        </div>
        <p className="show-time">
          {airtime} on {network.name}
        </p>
      </div>
    </Wrapper>
  );
};

Show.propTypes = {
  show: PropTypes.object.isRequired,
};

export default Show;
