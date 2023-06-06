import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "components/Spinner/Spinner";
import "./Sticker.css";

const STICKER_URL = "https://api.giphy.com/v1/stickers/search";

const Sticker = ({
  stickerData,
  API_KEY,
  searchTerm,
  currentPage,
  setStickerData,
  setCurrentPage,
  setIsLoading,
  setIsError,
}) => {
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMoreStickerData = async () => {
    try {
      let endpoint = "";

      if (searchTerm) {
        endpoint = `${STICKER_URL}?api_key=${API_KEY}&q=${searchTerm}&limit=25&offset=${
          currentPage * 25
        }&rating=Y&lang=en`;
      }

      const results = await axios.get(endpoint);
      const newData = results.data.data;

      setStickerData((prevData) => [...prevData, ...newData]);

      // Check if there is more data to load
      if (newData.length < 25) {
        setHasMoreData(false);
      }

      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      setStickerData([]);
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={stickerData.length}
      next={loadMoreStickerData}
      hasMore={hasMoreData}
      loader={<Spinner />}
    >
      <div className="sticker">
        {stickerData.map((sticker, index) => (
          <div
            className="sticker__image-container"
            key={index}
            onClick={() => window.open(sticker.images.preview_gif.url)}
          >
            <img
              className="sticker__image"
              src={sticker.images.fixed_height.url}
              alt="gif"
            />
          </div>
        ))}
        {!hasMoreData && (
          <p className="sticker__message">No more stickers to load...</p>
        )}
      </div>
    </InfiniteScroll>
  );
};

Sticker.propTypes = {
  stickerData: PropTypes.array.isRequired,
};

export default Sticker;
