import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import "./Giphy.css";

const Giphy = ({ giphyData, loadMoreData }) => {
  return (
    <InfiniteScroll
      dataLength={giphyData.length}
      next={loadMoreData}
      hasMore={true}
      loader={<Spinner />}
    >
      <div className="gifs-container">
        {giphyData.map((gif, index) => (
          <div
            className="gif-image-container"
            key={index}
            onClick={() => window.open(gif.images.preview_gif.url)}
          >
            <img
              className="gif-image"
              src={gif.images.fixed_height.url}
              alt="gif"
            />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

Giphy.propTypes = {
  giphyData: PropTypes.array.isRequired,
  loadMoreData: PropTypes.func.isRequired,
};

export default Giphy;
