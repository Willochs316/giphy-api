import axios from "axios";
import UserIcons from "commons/Icons";
import { FaEllipsisV } from "react-icons/fa";
import Button from "commons/Button";
import SearchBar from "components/SearchBar/SearchBar";
import GiphyLogo from "assets/gif/giphy-logo.gif";
import Svgs from "assets/svgs";
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
    { title: "Stories", path: "/" },
    { title: "Artists", path: "/" },
    {
      title: <UserIcons icons={FaEllipsisV} />,
      className: "navigation__menu-ellipsis-container",
    },
  ];

  let navigate = useNavigate();
  let location = useLocation();

  const handleHomeNavigation = () => {
    setSearchTerm("");

    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  // Handle search input and submit for stickers
  const handleStickerSearch = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      let endpoint = "";

      // the if condition only make a request to the endpoint if searchTerm is truthy
      if (searchTerm) {
        endpoint = `${STICKER_URL}?api_key=${API_KEY}&q=${searchTerm}&_limit=25&rating=Y&lang=en`;
        const results = await axios.get(endpoint);
        setStickerData(results.data.data);
        navigate("/sticker"); // add this line to navigate to the "/sticker" route
      }
    } catch (error) {
      console.error(error);
      setIsError("Oops! Something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <header className="navigation">
      <nav className="navigation__content">
        <div
          className="navigation__logo-container"
          onClick={handleHomeNavigation}
        >
          <Svgs.GiphyLogo className="navigation__giphy-logo" />
        </div>

        <img
          className="navigation__gif-small-logo"
          src={GiphyLogo}
          alt="giphy-logo.gif"
          onClick={handleHomeNavigation}
        />

        <div className="navigation__menu-container">
          <ul className="navigation__menu-list">
            {menuItems.map((item, index) => (
              <li
                className={
                  item === "UserIcons"
                    ? "navigation__menu-ellipsis-container"
                    : "navigation__menu-list-item"
                }
                key={index}
              >
                <Link
                  className="navigation__menu-link"
                  to={item.path}
                  onClick={item.path ? handleHomeNavigation : null}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navigation__gif--sticker-btn-container">
          <span
            className="navigation__stickers-container"
            onClick={handleStickerSearch}
          >
            <Button className="navigation__stickers-btn" title="stickers" />
          </span>

          <span
            className="navigation__stickers-container"
            onClick={() => {
              navigate("/");
            }}
          >
            <Button className="navigation__stickers-btn" title="GIFs" />
          </span>
        </div>
      </nav>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        setStickerData={setStickerData}
      />

      <div className="navigation__explore-container">
        <p className="navigation__explore-content">
          Explore <span className="navigation__explore-gif-text">explore</span>{" "}
          GIFs
        </p>
      </div>
    </header>
  );
};

export default NavBar;
