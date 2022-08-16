import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../Spinner/Spinner';
import './Giphy.css';

const Giphy = ({
  data,
  setData,
  isLoading,
  setisLoading,
  currentPage,
  setCurrentPage,
  loadMore,
}) => {
  React.useEffect(() => {
    loadMore(setData, data);
  }, [data, loadMore, setData]);

  return (
    <InfiniteScroll
      dataLength={data}
      next={() => {
        loadMore(setData, data);
      }}
      hasMore={true}
      loader={<Spinner />}
    >
      <div className='gifs-main-container'>
        {data.map((gif) => (
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
  );
};

export default Giphy;
