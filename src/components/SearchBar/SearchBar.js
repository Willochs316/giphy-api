import React from "react";
import { HiSearch } from "react-icons/hi";
import UserIcons from "../../commons/Icons";
import Input from "../../commons/Input";
import "./SearchBar.css";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  handleSubmit,
  handleClick,
}) => {
  return (
    <div className="search-bar-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <Input
          id="search"
          className="search-input"
          type="text"
          value={searchTerm}
          name="search-input"
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search..."
        />
        <div className="search-button-container">
        <img src="https://giphy.com/static/img/search-icon.svg" width="30" alt='' />
          {/* <UserIcons
            className="search-icon"
            icons={HiSearch}
            onClick={handleClick}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
