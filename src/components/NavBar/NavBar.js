import UserIcons from "../../commons/Icons";
import { FaEllipsisV } from "react-icons/fa";
import "./NavBar.css";
import Button from "../../commons/Button";
import SearchBar from "../SearchBar/SearchBar";
import GiphyLogo from "../../assets/png/giphy-logo.gif";
import Svgs from "../../assets/svgs";
import { Link } from "react-router-dom";

const NavBar = ({
  searchTerm,
  setSearchTerm,
  handleSubmit,
  handleClick,
  handleSearch,
  handleStickers,
}) => {
  const menuItems = [
    { title: "Reactions", path: "/" },
    { title: "Entertainment", path: "/" },
    { title: "Sports", path: "/" },
    { title: "Stickers", path: "/sticker" },
    { title: "Artists", path: "/" },
    {
      title: <UserIcons icons={FaEllipsisV} />,
      className: "menu-ellipsis-container",
    },
  ];

  return (
    <div id="header-container">
      <div id="navigationbar-container">
        <a href="/" target="_blank" className="logo-container">
          <Svgs.GiphyLogo className="giphy-logo" />
        </a>

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
                <Link className="menu-link" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="gif-sticker-container">
          <span className="stickers-container" onClick={handleStickers}>
            <Button className="stickers-btn" title="stickers" />
          </span>

          <span className="stickers-container" onClick={handleSearch}>
            <Button className="stickers-btn" title="GIFs" />
          </span>
        </div>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
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
