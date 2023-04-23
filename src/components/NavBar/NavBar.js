import UserIcons from "../../commons/Icons";
import { FaEllipsisV, FaUser } from "react-icons/fa";
import "./NavBar.css";
import Button from "../../commons/Button";
import SearchBar from "../SearchBar/SearchBar";
import GiphyGif from "../../assets/png/giphy-logo.gif";
import GiphyLogo from "../../assets/png/giphy-logo.gif";
import Svgs from "../../assets/svgs";

const NavBar = ({ searchTerm, setSearchTerm, handleSubmit, handleClick }) => {
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
            {[
              "Reactions",
              "Entertainment",
              "Sports",
              "Stickers",
              "Artists",
            ].map((item) => (
              <li className="menu-item-container" key={item}>
                <a target="_blank" className="menu-link" href="/">
                  {item}
                </a>
              </li>
            ))}

            <li className="menu-ellipsis-container">
              <a target="_blank" className="menu-link" href="/">
                <UserIcons icons={FaEllipsisV} />
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="upload-container">
          <Button className="upload-btn" title="upload" />
          <Button className="create-btn" title="create" />
        </div> */}

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
