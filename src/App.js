import { useEffect, useState } from "react";
import Giphy from "./components/Giphy/Giphy";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import "./App.css";
import Spinner from "./components/Spinner/Spinner";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.giphy.com/v1/gifs/";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchGifs = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        let endpoint = "";

        endpoint = `${API_URL}trending?api_key=${API_KEY}&limit=25&offset=0&rating=Y&lang=en`;

        const results = await axios.get(endpoint);
        setData(results.data.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchGifs();
  }, [searchValue]);

  const loadMoreData = async () => {
    try {
      let endpoint = "";

      if (searchValue) {
        endpoint = `${API_URL}search?q=${searchValue}&api_key=${API_KEY}&limit=25&offset=${
          currentPage * 25
        }&rating=Y&lang=en`;
      } else {
        endpoint = `${API_URL}trending?api_key=${API_KEY}&limit=25&offset=${
          currentPage * 25
        }&rating=Y&lang=en`;
      }

      const results = await axios.get(endpoint);
      const newData = results.data.data;

      setData((prevData) => [...prevData, ...newData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setData([]);
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const endpoint = `${API_URL}search?api_key=${API_KEY}&q=${searchValue}&_limit=25&rating=Y&lang=en`;
      const results = await axios.get(endpoint);

      setData(results.data.data);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="giphy-container">
      <NavBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleClick={handleClick}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <Giphy data={data} isError={isError} loadMoreData={loadMoreData} />
      )}
    </div>
  );
};

export default App;
