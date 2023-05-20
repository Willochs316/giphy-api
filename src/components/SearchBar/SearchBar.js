import React, { useEffect, useState } from "react";
import Input from "commons/Input";
import "./SearchBar.css";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  handleSubmit,
  handleClick,
}) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const placeholders = [
    "Search for GIFs",
    "Find your favorite GIFs",
    "Discover trending GIFs",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <Input
          id="search"
          className="search__input"
          type="text"
          value={searchTerm}
          name="search-input"
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder={placeholders[currentPlaceholder]}
        />

        <button className="search__button-container" onClick={handleClick}>
          <img
          className='search__search-icon'
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
