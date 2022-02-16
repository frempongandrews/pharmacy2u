import React from "react";
import styled from "styled-components";
import Show from "./Show";

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
  return (
    <Wrapper className="container-lg">
      <h1 className="title">Today</h1>
      <div className="row">
        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>

        <div className="col-md-6 col-xl-4">
          <Show />
        </div>
      </div>
    </Wrapper>
  );
};

export default ShowList;
