import React, { useState } from "react";
import Overlay from "../components/Overlay";
import styled from "styled-components";
import Show from "./Show";
import ShowModal from "./ShowModal";

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
  return (
    <Wrapper className="container-lg">
      {selectedShow && <Overlay hideOverlay={onHideShowDetails} />}
      {selectedShow && <ShowModal onHideShowDetails={onHideShowDetails} />}
      <h1 className="title">Today</h1>
      <div className="row">
        <div className="col-md-6 col-xl-4" onClick={onViewShowDetails}>
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
