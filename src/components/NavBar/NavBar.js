import axios from "axios";
import UserIcons from "../../commons/Icons";
import { FaEllipsisV } from "react-icons/fa";
import Button from "../../commons/Button";
import SearchBar from "../SearchBar/SearchBar";
import GiphyLogo from "../../assets/png/giphy-logo.gif";
import Svgs from "../../assets/svgs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

const STICKER_URL = "https://api.giphy.com/v1/stickers/search";

const NavBar = ({
  searchTerm,
  setSearchTerm,
  handleSubmit,
  handleClick,
  setStickerData,
  API_KEY,
  setIsError,
  setIsLoading,
}) => {
  const menuItems = [
    { title: "Reactions", path: "/" },
    { title: "Entertainment", path: "/" },
    { title: "Sports", path: "/" },
    { title: "Stickers", path: "" },
    { title: "Artists", path: "/" },
    {
      title: <UserIcons icons={FaEllipsisV} />,
      className: "menu-ellipsis-container",
    },
  ];

  let navigate = useNavigate();
  let location = useLocation();

  const handlePath = () => {
    if (location.pathname === "/") {
      setSearchTerm("");
    }

    navigate("/");
  };

  // Handle search input and submit for stickers
  const handleStickerSearch = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      let endpoint = "";
      if (searchTerm) {
        endpoint = `${STICKER_URL}?api_key=${API_KEY}&q=${searchTerm}&_limit=25&rating=Y&lang=en`;
      }

      const results = await axios.get(endpoint);

      setStickerData(results.data.data);
      navigate("/sticker"); // add this line to navigate to the "/sticker" route
    } catch (error) {
      console.error(error);
      setIsError("Oops! Something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <div id="header-container">
      <div id="navigationbar-container">
        <Link to="/" className="logo-container">
          <Svgs.GiphyLogo className="giphy-logo" />
        </Link>

        <img
          className="gif-logo"
          src={GiphyLogo}
          alt="giphy-logo.gif"
          object-fit="contain"
        />

        <div className="navigation-list-container">
          <ul>
            {menuItems.map((item, index) => (
              <li
                className={
                  item === "UserIcons"
                    ? "menu-ellipsis-container"
                    : "menu-item-container"
                }
                key={index}
              >
                <Link
                  className="menu-link"
                  to={item.path}
                  onClick={item.path ? handlePath : null}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="gif-sticker-container">
          <span className="stickers-container" onClick={handleStickerSearch}>
            <Button className="stickers-btn" title="stickers" />
          </span>

          <span
            className="stickers-container"
            onClick={() => {
              navigate("/");
            }}
          >
            <Button className="stickers-btn" title="GIFs" />
          </span>
        </div>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        setStickerData={setStickerData}
      />

      <div className="explore-container">
        <p className="explore-contents">
          Explore <span className="explore-gifs">explore</span> GIFs
        </p>
      </div>
    </div>
  );
};

export default NavBar;
