import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 300;
  position: fixed;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 800px;
  height: 60vh;
  background-color: red;
  @media screen and (max-width: 992px) {
    top: 50%;
    height: 98vh;
    width: 95%;
  }
`;

const ShowModal = () => {
  return (
    <Wrapper className="">
      <div className="">
        <h1>test</h1>
      </div>
    </Wrapper>
  );
};

export default ShowModal;
