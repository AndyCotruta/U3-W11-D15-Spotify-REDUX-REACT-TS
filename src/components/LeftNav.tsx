import { ImHome3 } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { BsFillPlusSquareFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav">
      <div className="logo px-3">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="Spotify Logo"
        />
      </div>
      <ul className="nav-pages py-2">
        <Link to={"/"}>
          <li className="d-flex align-items-center px-3">
            <ImHome3 />
            <span className="nav-page-text px-2">Home</span>
          </li>
        </Link>
        <Link to={"/search"}>
          {" "}
          <li className="d-flex align-items-center px-3">
            <BsSearch />
            <span className="nav-page-text px-2">Search</span>
          </li>
        </Link>
        <Link to={"/yourlibrary"}>
          <li className="d-flex align-items-center px-3">
            <BiLibrary />
            <span className="nav-page-text px-2">Your Library</span>
          </li>
        </Link>
      </ul>
      <ul className="nav-extra py-2">
        <div className="unselectable">
          <li className="d-flex align-items-center px-3">
            <BsFillPlusSquareFill />
            <span className="nav-page-text px-2">Create Playlist</span>
          </li>
        </div>

        <Link to={"/likedsongs"}>
          <li className="d-flex align-items-center px-3">
            <BsFillHeartFill />
            <span className="nav-page-text px-2">Liked Songs</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LeftNav;
