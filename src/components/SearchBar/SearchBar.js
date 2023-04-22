import React from "react";
import { HiSearch } from "react-icons/hi";
import UserIcons from "../../commons/Icons";
import Input from "../../commons/Input";
import "./SearchBar.css";

const SearchBar = ({
  searchValue,
  setSearchValue,
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
          value={searchValue}
          name="search-input"
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search..."
        />
        <div className="search-icon-container">
          <UserIcons
            className="search-icon"
            icons={HiSearch}
            onClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
