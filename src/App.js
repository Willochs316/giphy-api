import { useEffect, useState } from 'react';
import Giphy from './Componenets/Giphy/Giphy';
import NavBar from './Componenets/NavBar/NavBar';
import axios from 'axios';
import './App.css';
import Spinner from './Componenets/Spinner/Spinner';


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    try {
      const getGiphy = async () => {
        setIsError(false);
        setIsLoading(true);

        const results = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=xLcTIr49s3MG22RUv6GZ01tj5dmH6wO2&q=spongeboob&_page=${currentPage}&limit=25&offset=0&rating=Y&lang=en`
        );

        setData(results.data.data);

        setIsLoading(false);
      };
      getGiphy();
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, [currentPage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    try {
      const results = await axios.get('https://api.giphy.com/v1/gifs/search?', {
        params: {
          api_key: 'xLcTIr49s3MG22RUv6GZ01tj5dmH6wO2',
          q: search,
        },
      });
      setData(results.data.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const loadMore = () => {
    let currentPage = 1;
    axios
      .get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'xLcTIr49s3MG22RUv6GZ01tj5dmH6wO2',
          q: search,
        },
      })
      .then(() => {
        setData([...data, ...data]);
        currentPage += 1;
      });
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='giphy-container'>
      <NavBar
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
      />

      <Giphy
        data={data}
        setData={setData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loadMore={loadMore}
      />
    </div>
  );
}

export default App;
