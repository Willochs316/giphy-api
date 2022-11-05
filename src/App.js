import { useEffect, useState } from 'react';
import Giphy from './Componenets/Giphy/Giphy';
import NavBar from './Componenets/NavBar/NavBar';
import axios from 'axios';
import './App.css';
import Spinner from './Componenets/Spinner/Spinner';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(2);
  const [noMore, setNoMore] = useState(true);

  useEffect(() => {
    try {
      const getGiphy = async () => {
        setIsError(false);
        setIsLoading(true);

        const results = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q={search}&_page=1&_limit=25&offset=0&rating=Y&lang=en`
        );

        setItems(results.data.data);

        setIsLoading(false);
      };
      getGiphy();
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, []);

  const loadMoreData = async () => {
    setItems([...items, ...items]);
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    try {
      const results = await axios.get('https://api.giphy.com/v1/gifs/search?', {
        params: {
          api_key: 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc',
          q: search,
        },
      });

      setItems(results.data.data);
      setSearch('');
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleClick = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const results = await axios.get('https://api.giphy.com/v1/gifs/search?', {
        params: {
          api_key: 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc',
          q: search,
        },
      });

      setItems(results.data.data);
      setSearch('');
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='giphy-container'>
      <NavBar
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />

      <Giphy
        items={items}
        setItems={setItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isError={isError}
        loadMoreData={loadMoreData}
        noMore={noMore}
        setNoMore={setNoMore}
      />
    </div>
  );
};

export default App;
