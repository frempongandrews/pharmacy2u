import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  /* height: 80px; */
  padding: 20px 0;
  background-color: var(--theme-light-gray);
  border-bottom: 1px solid var(--theme-dark-gray);
  box-shadow: 0px 2px 5px 0px var(--theme-dark-gray);
  .logo {
    display: flex;
    margin-right: 20px;
    align-items: center;
  }
  .main-navigation-container {
    display: flex;
    flex: 1;
  }
  .main-navigation {
    display: flex;
    list-style: none;
    flex: 1;
    /* background-color: brown; */
    align-items: center;
    li {
      color: var(--theme-dark-gray);
      font-size: 0.88em;
    }
    li.current-page {
      color: var(--theme-black);
    }
    @media (max-width: 768px) {
      display: none;
    }
    li {
      margin-right: 20px;
    }
  }

  .inner-wrapper {
    display: flex;
  }

  .search-section {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
    input {
      height: 40px;
      border-radius: 20px;
      border: none;
      padding-left: 15px;
      &:focus-visible {
        outline: 2px solid var(--theme-dark-blue);
      }
    }
    button {
      width: 80px;
      background-color: var(--theme-dark-blue);
      margin-left: 10px;
      height: 40px;
      border-radius: 20px;
      color: white;
      border: 1px solid gray;
    }
  }
`;

const navigationItems = [
  {
    id: 1,
    name: "Home",
    destination: "/",
  },
  {
    id: 2,
    name: "Library",
    destination: "/library",
  },
  {
    id: 3,
    name: "Your Account",
    destination: "/account",
  },
];

const Header = () => {
  const location = useLocation();
  const renderNavigationItems = () => {
    return navigationItems.map((item) => {
      return (
        <li
          key={item.id}
          className={
            location.pathname === item.destination ? "current-page" : ""
          }
        >
          <Link to={item.destination}>{item.name}</Link>
        </li>
      );
    });
  };
  return (
    <Wrapper>
      <div className="container-lg inner-wrapper">
        <div className="main-navigation-container">
          <h5 className="logo">
            <Link to="/">
              <span>TV Maze Browser</span>
            </Link>
          </h5>
          <ul className="main-navigation">
            {renderNavigationItems()}
            {/* <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Library</Link>
            </li>
            <li>
              <Link to="#">Your Account</Link>
            </li> */}
          </ul>
        </div>

        <div className="search-section">
          <div>
            <input placeholder="Search" />
          </div>
          <button>Search</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
