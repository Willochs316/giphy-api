import React from "react";
import { HiSearch } from "react-icons/hi";
import UserIcons from "../../commones/Icons";
import Input from "../../commones/Input";
import "./SearchBar.css";

const SearchBar = ({ search, setSearch, handleSubmit, handleClick }) => {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className="navigationbar-search-container">
      <form id="form-input-content" onSubmit={handleSubmit}>
        <Input
          className="input-search"
          type="text"
          value={search}
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
