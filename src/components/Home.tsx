import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeType } from "../redux/types/HomeType";
import {
  ADD_GOOD_MORNING,
  ADD_RECENTLY_PLAYED,
  ADD_SHOWS_TO_TRY,
  fetchAlbumAction,
} from "../redux/actions/actions";
import { Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";
import { MainAlbum } from "../redux/types/Album";
import BannerNav from "./BannerNav";

const Home = () => {
  const dispatch = useDispatch();
  const goodMorning = useSelector((state: HomeType) => state.home.goodMorning);
  const recentlyPlayed = useSelector(
    (state: HomeType) => state.home.recentlyPlayed
  );
  const showsToTry = useSelector((state: HomeType) => state.home.showsToTry);
  const query1: string = "goodmorning";
  const action1 = ADD_GOOD_MORNING;
  const action2 = ADD_RECENTLY_PLAYED;
  const action3 = ADD_SHOWS_TO_TRY;
  const query2: string = "rihanna";
  const query3: string = "luis";
  const endPoint: string =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  useEffect(() => {
    dispatch(fetchAlbumAction(endPoint, query1, options, action1));
    console.log(goodMorning);
    dispatch(fetchAlbumAction(endPoint, query2, options, action2));
    dispatch(fetchAlbumAction(endPoint, query3, options, action3));
  }, []);

  return (
    <div className="center-section">
      <BannerNav />

      <div className="good-morning-section">
        <h2 className="px-4 mt-5">Good Morning</h2>
        <div className="good-morning row mx-1">
          {" "}
          {goodMorning.slice(0, 6).map((album: MainAlbum) => (
            <AlbumCard albumData={album} key={album.id} />
          ))}
        </div>
      </div>
      <div className="recently-played-section">
        <h2 className="px-4">Recently Played</h2>
        <div className="recently-played row mx-1">
          {" "}
          {recentlyPlayed.slice(0, 6).map((album: MainAlbum) => (
            <AlbumCard albumData={album} key={album.id} />
          ))}
        </div>
      </div>
      <div className="shows-to-try-section">
        <h2 className="px-4">Shows To Try</h2>
        <div className="shows-to-try row mx-1">
          {" "}
          {showsToTry.slice(0, 6).map((album: MainAlbum) => (
            <AlbumCard albumData={album} key={album.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
