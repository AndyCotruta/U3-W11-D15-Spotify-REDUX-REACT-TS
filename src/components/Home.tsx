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
import { RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch();
  const goodMorning = useSelector((state: RootState) => state.home.goodMorning);
  const recentlyPlayed = useSelector(
    (state: RootState) => state.home.recentlyPlayed
  );
  const showsToTry = useSelector((state: RootState) => state.home.showsToTry);
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
    dispatch(fetchAlbumAction(endPoint, query2, options, action2));
    dispatch(fetchAlbumAction(endPoint, query3, options, action3));
  }, []);

  return (
    <div>
      <div className="good-morning-section pt-3">
        <h2 className="px-3 mt-5">Good Morning</h2>
        <div className="row mx-1">
          {goodMorning &&
            goodMorning.slice(0, 6).map((album: MainAlbum) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
                key={album.id}
              >
                <AlbumCard albumData={album} />
              </div>
            ))}
        </div>
      </div>
      <div className="recently-played-section">
        <h2 className="px-3">Recently Played</h2>
        <div className="recently-played row mx-1">
          {recentlyPlayed &&
            recentlyPlayed.slice(0, 6).map((album: MainAlbum) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
                key={album.id}
              >
                <AlbumCard albumData={album} />
              </div>
            ))}
        </div>
      </div>
      <div className="shows-to-try-section">
        <h2 className="px-3">Shows To Try</h2>
        <div className="shows-to-try row mx-1">
          {showsToTry &&
            showsToTry.slice(0, 6).map((album: MainAlbum) => (
              <div
                className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4"
                key={album.id}
              >
                <AlbumCard albumData={album} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
