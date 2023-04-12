import UserIcons from "../../commons/Icons";
import { FaEllipsisV, FaUser } from "react-icons/fa";
import "./NavBar.css";
import Button from "../../commons/Button";
import SearchBar from "../SearchBar/SearchBar";
import GiphyGif from "../../assets/png/giphy-gif.gif";
import GiphyLogo from "../../assets/png/giphy-logo.gif";

const NavBar = ({ search, setSearch, handleSubmit, handleClick, gif }) => {
  return (
    <div id="header-container">
      <div id="navigationbar-container">
        <img
          className="giphy-gif"
          src={GiphyGif}
          alt="giphy-gif.gif"
          width="100"
        />
        <img
          className="gif_logo"
          src={GiphyLogo}
          alt="giphy-gif.gif"
          width="320"
          height="80"
        />

        <div className="navigation-list-container">
          <ul>
            <li>Reactions</li>
            <li>Entertainment</li>
            <li>Sports</li>
            <li>Stickers</li>
            <li>Artists</li>

            <li>
              <UserIcons icons={FaEllipsisV} />
            </li>
          </ul>
        </div>

        <div className="upload-btn-container">
          <Button className="upload-btn" title="upload" />
          <Button className="create-btn" title="create" />
        </div>

        <div className="login-btn-container">
          <div className="fauser">
            <UserIcons icons={FaUser} />
          </div>

          <div className="login-container">
            <Button className="log-in-btn" title="Log in" />
          </div>
        </div>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />

      <div className="navigation-hash-container">
        <div className="explore-container">
          <p className="explore-contents">
            Explore <span className="explore-gifs">explore</span> GIFs
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
