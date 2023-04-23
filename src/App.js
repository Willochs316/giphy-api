import { useEffect, useState } from "react";
import axios from "axios";
import Giphy from "./components/Giphy/Giphy";
import NavBar from "./components/NavBar/NavBar";
import Spinner from "./components/Spinner/Spinner";
import UserIcons from "./commons/Icons";
import { FaRegWindowClose } from "react-icons/fa";
import "./App.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.giphy.com/v1/gifs/";

const App = () => {
  // State variables
  const [giphyData, setGiphyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data on mount
  useEffect(() => {
    const fetchGifs = async () => {
      setIsError(false);

      try {
        let endpoint = "";

        endpoint = `${API_URL}trending?api_key=${API_KEY}&limit=25&offset=0&rating=Y&lang=en`;

        const results = await axios.get(endpoint);
        setGiphyData(results.data.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
    };

    fetchGifs();
  }, [searchTerm]);

  // Handle search input and submit
  const handleSearch = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const endpoint = `${API_URL}search?api_key=${API_KEY}&q=${searchTerm}&_limit=25&rating=Y&lang=en`;

      const results = await axios.get(endpoint);

      setGiphyData(results.data.data);
    } catch (error) {
      console.error(error);
      setIsError("Oops! Something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleClick = async () => {
    handleSearch();
  };

  const loadMoreData = async () => {
    try {
      let endpoint = "";

      if (searchTerm) {
        endpoint = `${API_URL}search?q=${searchTerm}&api_key=${API_KEY}&limit=25&offset=${
          currentPage * 25
        }&rating=Y&lang=en`;
      } else {
        endpoint = `${API_URL}trending?api_key=${API_KEY}&limit=25&offset=${
          currentPage * 25
        }&rating=Y&lang=en`;
      }

      const results = await axios.get(endpoint);
      const newData = results.data.data;

      setGiphyData((prevData) => [...prevData, ...newData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setGiphyData([]);
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  return (
    <div className="giphy-container">
      <NavBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />

      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div className="error-container">
          <UserIcons className="error-icon" icons={FaRegWindowClose} />
          <p className="error-message">
            Oops! Something went wrong. Please try again later.
          </p>
        </div>
      ) : (
        <Giphy
          giphyData={giphyData}
          isError={isError}
          loadMoreData={loadMoreData}
        />
      )}
    </div>
  );
};

export default App;
