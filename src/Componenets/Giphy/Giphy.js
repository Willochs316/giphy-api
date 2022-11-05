import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../Spinner/Spinner';
import './Giphy.css';
import UserIcons from '../../Commons/Icons';

const Giphy = ({
  items,
  setItems,
  isLoading,
  setisLoading,
  currentPage,
  setCurrentPage,
  isError,
  loadMoreData,
  noMore,
  setNoMore,
}) => {
  return !isError ? (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMoreData}
      hasMore={noMore}
      loader={<Spinner />}
    >
      <div className='gifs-main-container'>
        {items.map((gif) => (
          <div
            className='gifs-image-container'
            key={Math.random()}
            onClick={() => window.open(gif.images.preview_gif.url)}
          >
            <img
              className='gif_image'
              src={gif.images.fixed_height.url}
              alt='gif_image'
            />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  ) : (
    <div className='danger'>
      <UserIcons className='danger-icon' icons={FaRegTimesCircle} />
      <h4 className='error'>Error message!!</h4>
    </div>
  );
};

export default Giphy;
