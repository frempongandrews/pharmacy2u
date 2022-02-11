import React from "react";

const Header = () => {
  return (
    <header className="flex items-center py-[20px] bg-gray-300">
      <div className="flex-1">
        <ul className="flex gap-x-[20px]">
          <li className="nav-link">TV Maze Browser</li>
          <li>Home</li>
          <li>Library</li>
          <li>Your Account</li>
        </ul>
      </div>

      <div className="flex">
        <div>
          <input placeholder="search" />
        </div>
        <button>Search</button>
      </div>
    </header>
  );
};

export default Header;
