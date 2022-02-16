import React from "react";
import styled from "styled-components";

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

const Show = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src="https://i.guim.co.uk/img/media/83b3fc2a006d5134779fb2e3728e90b414221205/59_416_4464_2678/master/4464.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=543ccd23899cace223c2364d835a99fa" />
      </div>
      <div className="show-info-container">
        <div className="show-info">
          <h4>Good Morning Britain</h4>
          <p>Series: 12</p>
          <p>18/01/22</p>
        </div>
        <p className="show-time">09:00 on ITV</p>
      </div>
    </Wrapper>
  );
};

export default Show;
