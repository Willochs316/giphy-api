import React from "react";
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
        <button className="search-button-container" onClick={handleClick}>
          <img
            src="https://giphy.com/static/img/search-icon.svg"
            width="30"
            alt=""
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
