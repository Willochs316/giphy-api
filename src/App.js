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
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchGifs = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const endpoint = `${API_URL}trending?api_key=${API_KEY}&_limit=25&rating=Y&lang=en`;
        const results = await axios.get(endpoint);

        setData(results.data.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchGifs();
  }, []);

  const loadMoreData = async () => {
    try {
      const endpoint = `https://api.giphy.com/v1/gifs/${
        search ? "search" : "trending"
      }?api_key=${API_KEY}&q=${search}&_page=${currentPage}&_limit=25&offset=0&rating=Y&lang=en`;

      const results = await axios.get(endpoint);
      setData((prevData) => [...prevData, ...results.data.data]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const endpoint = `${API_URL}search?api_key=${API_KEY}&q=${search}&_limit=25&rating=Y&lang=en`;
      const results = await axios.get(endpoint);

      setData(results.data.data);
      setSearch("");
    } catch (error) {
      setIsError(true);
      console.error(error);
    }

    setIsLoading(false);
  };

  const handleClick = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const endpoint = `${API_URL}search?api_key=${API_KEY}&q=${search}&_limit=25&rating=Y&lang=en`;
      const results = await axios.get(endpoint);

      setData(results.data.data);
      setSearch("");
    } catch (error) {
      setIsError(true);
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="giphy-container">
      <NavBar
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
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
