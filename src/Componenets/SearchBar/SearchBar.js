import React from 'react';
import { HiSearch } from 'react-icons/hi';
import UserIcons from '../../Commons/Icons';
import Input from '../../Commons/Input';
import './SearchBar.css';

const SearchBar = ({ search, setSearch, handleSubmit }) => {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div className='navigationbar-search-container'>
      <form id='form-input-content' onSubmit={handleSubmit}>
        <Input
          className='input-search'
          type='text'
          value={search}
          name='text'
          onChange={handleSearchChange}
          placeholder='search...'
        />
        <div className='search-icon-container'>
          <UserIcons
            className='fasearch'
            icons={HiSearch}
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
