import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";
import "./Giphy.css";
import UserIcons from "../../commones/Icons";

const Giphy = ({ data, isError, loadMoreData }) => {
  return (
    <>
      {isError ? (
        <div className="danger">
          <UserIcons className="danger-icon" icons={FaRegTimesCircle} />
          <h4 className="error">
            Oops, something went wrong. Failed to fetch the requested data!!
          </h4>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={true}
          loader={<Spinner />}
        >
          <div className="gifs-main-container">
            {data.map((gif) => (
              <div
                className="gifs-image-container"
                key={gif.id}
                onClick={() => window.open(gif.images.preview_gif.url)}
              >
                <img
                  className="gif_image"
                  src={gif.images.fixed_height.url}
                  alt="gif_image"
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Giphy;
