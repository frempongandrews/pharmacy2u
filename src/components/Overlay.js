import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 200;
  width: 100%;
  height: 100%;
`;

const Overlay = ({ hideOverlay }) => {
  return (
    <Wrapper onClick={hideOverlay}>
      <h1>Overlay</h1>
    </Wrapper>
  );
};

Overlay.defaultProps = {
  hideOverlay: null,
};

Overlay.propTypes = {
  hideOverlay: PropTypes.func.isRequired,
};

export default Overlay;
