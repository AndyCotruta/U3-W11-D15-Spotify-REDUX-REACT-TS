import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeType } from "../redux/types/HomeType";
import { fetchAlbumAction } from "../redux/actions/actions";
import { Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import { MainAlbum } from "../redux/types/Album";

const Home = () => {
  const dispatch = useDispatch();
  const goodMorning = useSelector((state: HomeType) => state.home.goodMorning);
  const query1: string = "goodmorning";
  const endPoint: string =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query1;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  useEffect(() => {
    dispatch(fetchAlbumAction(endPoint, options));
    console.log(goodMorning);
  }, []);

  return (
    <div>
      <div className="center-section">
        <div className="center-nav-bar px-35 py-2">
          <div className="btns-prev-next">
            <img className="img-btn" src="img/prev.svg" alt="" />

            <img className="img-btn" src="img/next.svg" alt="" />
          </div>

          <div className="user-name-div d-flex text-white">
            <div className="user-name-image px-1">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="user-name-text px-1">User Name</div>
            <div className="px-1">
              <i className="dropdownBtn bi bi-caret-down-fill"></i>
            </div>
          </div>
          <button className="btn d-none navbar-signup-btn">Sign Up</button>
          <button className="btn d-none navbar-login-btn">Log In</button>
          <ul className="dropMenu d-none">
            <li>Account</li>
            <li>Profile</li>
            <li>Upgrade to Premium</li>
            <li>Settings</li>
            <li className="logout-btn">Log out</li>
          </ul>
        </div>

        <div className="good-morning-section">
          <h2 className="px-35">Good Morning</h2>
          <div className="good-morning row mx-1">
            {" "}
            {goodMorning.slice(0, 6).map((album: MainAlbum) => (
              <AlbumCard albumData={album} key={album.id} />
            ))}
          </div>
        </div>
        <div className="recently-played-section">
          <h2 className="px-35">Recently Played</h2>
          <div className="recently-played row mx-1"></div>
        </div>
        <div className="shows-to-try-section">
          <h2 className="px-35">Shows To Try</h2>
          <div className="shows-to-try row mx-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
