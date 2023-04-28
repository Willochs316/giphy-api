import React from "react";
import { Route, Routes } from "react-router-dom";
import GifGallery from "./GifPages/Giphy/GifGallery";
import Sticker from "./GifPages/Sticker/Sticker";
import ErrorPage from "./GifPages/ErrorPage";

const GifRoute = ({
  giphyData,
  loadMoreData,
  stickerData,
  API_KEY,
  searchTerm,
  currentPage,
  setStickerData,
  setCurrentPage,
  setIsLoading,
  setIsError,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GifGallery giphyData={giphyData} loadMoreData={loadMoreData} />
        }
      />

      <Route
        path="/sticker"
        element={
          <Sticker
            stickerData={stickerData}
            API_KEY={API_KEY}
            searchTerm={searchTerm}
            currentPage={currentPage}
            setStickerData={setStickerData}
            setCurrentPage={setCurrentPage}
            setIsLoading={setIsLoading}
            setIsError={setIsError}
          />
        }
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default GifRoute;
