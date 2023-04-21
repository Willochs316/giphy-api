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
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <div className="navbar-search-container">
      <form id="form-input-content" onSubmit={handleSubmit}>
        <Input
          className="input-search"
          type="text"
          value={searchValue}
          name="text"
          onChange={handleSearchChange}
          placeholder="search..."
        />
        <div className="search-icon-container">
          <UserIcons
            className="fasearch"
            icons={HiSearch}
            onClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
