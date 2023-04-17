import React from "react";
import PropTypes from "prop-types";
import { FaRegTimesCircle } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import "./Giphy.css";
import UserIcons from "../../commons/Icons";

const Giphy = ({ data, isError, loadMoreData }) => {
  return (
    <>
      {isError ? (
        <div className="error-container">
          <UserIcons className="error-icon" icons={FaRegTimesCircle} />
          <h4 className="error-message">
            Oops, something went wrong. Failed to fetch the requested data.
            Please try again later.
          </h4>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={true}
          loader={<Spinner />}
        >
          <div className="gifs-container">
            {data.map((gif, index) => (
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
      )}
    </>
  );
};

Giphy.propTypes = {
  data: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  loadMoreData: PropTypes.func.isRequired,
};

export default Giphy;
