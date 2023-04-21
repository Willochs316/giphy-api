import UserIcons from "../../commons/Icons";
import { FaEllipsisV, FaUser } from "react-icons/fa";
import "./NavBar.css";
import Button from "../../commons/Button";
import SearchBar from "../SearchBar/SearchBar";
import GiphyGif from "../../assets/png/giphy-gif.gif";
import GiphyLogo from "../../assets/png/giphy-logo.gif";

const NavBar = ({ searchValue, setSearchValue, handleSubmit, handleClick }) => {
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
          className="gif-logo"
          src={GiphyLogo}
          alt="giphy-gif.gif"
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
              <li key={item}>{item}</li>
            ))}

            <li>
              <UserIcons icons={FaEllipsisV} />
            </li>
          </ul>
        </div>

        <div className="upload-container">
          <Button className="upload-btn" title="upload" />
          <Button className="create-btn" title="create" />
        </div>

        <div className="login-container">
          <div className="fauser">
            <UserIcons icons={FaUser} />
          </div>

          <Button className="login-btn" title="Log in" />
        </div>
      </div>

      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
