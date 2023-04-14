import { useEffect, useState } from "react";
import Giphy from "./components/Giphy/Giphy";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
import "./App.css";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    try {
      const getGiphy = async () => {
        setIsError(false);
        setIsLoading(true);

        const results = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&q={search}&_page=1&_limit=25&offset=0&rating=Y&lang=en`
        );

        setData(results.data.data);

        setIsLoading(false);
      };
      getGiphy();
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, []);

  const loadMoreData = async () => {
    try {
      const results = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&q={search}&_page=1&_limit=25&offset=0&rating=Y&lang=en`
      );

      // Append new data to the existing array
      setData([...data, ...results.data.data]);
      setCurrentPage(currentPage + 1);
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
      const results = await axios.get("https://api.giphy.com/v1/gifs/search?", {
        params: {
          api_key: `${process.env.REACT_APP_API_KEY}`,
          q: search,
        },
      });

      setData(results.data.data);
      setSearch("");
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const handleClick = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const results = await axios.get("https://api.giphy.com/v1/gifs/search?", {
        params: {
          api_key: `${process.env.REACT_APP_API_KEY}`,
          q: search,
        },
      });

      setData(results.data.data);
      setSearch("");
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="giphy-container">
      <NavBar
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />

      <Giphy data={data} isError={isError} loadMoreData={loadMoreData} />
    </div>
  );
};

export default App;
