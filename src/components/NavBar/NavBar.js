import UserIcons from "../../commons/Icons";
import { FaEllipsisV, FaUser } from "react-icons/fa";
import "./NavBar.css";
import Button from "../../commons/Button";
import SearchBar from "../SearchBar/SearchBar";
import GiphyGif from "../../assets/png/giphy-logo.gif";
import GiphyLogo from "../../assets/png/giphy-logo.gif";
import Svgs from "../../assets/svgs";

const NavBar = ({ searchTerm, setSearchTerm, handleSubmit, handleClick }) => {
  const menuItems = [
    { title: "Reactions" },
    { title: "Entertainment" },
    { title: "Sports" },
    { title: "Stickers" },
    { title: "Artists" },
    {
      title: <UserIcons icons={FaEllipsisV} />,
      className: "menu-ellipsis-container",
    },
  ];

  return (
    <div id="header-container">
      <div id="navigationbar-container">
        <a href="/" target="/" className="logo-container">
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
                <a target="_blank" className="menu-link" href="/">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="gif-sticker-container">
          <a target="_blank" className="stickers-container" href="/">
            <Button className="stickers-btn" title="stickers" />
          </a>

          <a target="_blank" className="stickers-container" href="/">
            <Button className="stickers-btn" title="Gifs" />
          </a>
        </div>

        {/* <div className="login-container">
          <div className="fauser">
            <UserIcons icons={FaUser} />
          </div>

          <Button className="login-btn" title="Log in" />
        </div> */}
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
