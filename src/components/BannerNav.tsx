import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  ADD_LIBRARY_TABS,
  ADD_SEARCH_RESULTS,
  fetchAlbumAction,
} from "../redux/actions/actions";
import { AiOutlineMenu } from "react-icons/ai";

interface BannerNavProps {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const BannerNav = (props: BannerNavProps) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const endPoint: string =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const action = ADD_SEARCH_RESULTS;

  const fetchSearchResults = (query: string) => {
    dispatch(fetchAlbumAction(endPoint, query, options, action));
    if (query === "") {
      dispatch({
        type: ADD_SEARCH_RESULTS,
        payload: [],
      });
    }
  };

  useEffect(() => {
    fetchSearchResults(query);
  }, [query]);

  return (
    <div className="p-3 bannerNav text-white d-flex align-items-center justify-content-between">
      <div className="web-buttons">Buttons</div>
      <div
        className={
          props.showMobileNav ? "mobile-buttons-moved" : "mobile-buttons"
        }
        onClick={() => {
          props.setShowMobileNav(!props.showMobileNav);
        }}
      >
        <AiOutlineMenu />
      </div>

      <input
        className={location.pathname === "/search" ? "input" : "hidden"}
        type="text"
        placeholder="What do you want to listen to?"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div
        className={
          location.pathname === "/yourlibrary"
            ? "library-tabs d-flex"
            : "hidden"
        }
      >
        <div
          className="l-tabs px-3"
          onClick={() => {
            dispatch({ type: ADD_LIBRARY_TABS, payload: "Playlists" });
          }}
        >
          Playlists
        </div>
        <div
          className="l-tabs px-3"
          onClick={() => {
            dispatch({ type: ADD_LIBRARY_TABS, payload: "Podcasts" });
          }}
        >
          Podcasts
        </div>
        <div
          className="l-tabs px-3"
          onClick={() => {
            dispatch({ type: ADD_LIBRARY_TABS, payload: "Artists" });
          }}
        >
          Artists
        </div>
        <div
          className="l-tabs px-3"
          onClick={() => {
            dispatch({ type: ADD_LIBRARY_TABS, payload: "Albums" });
          }}
        >
          Albums
        </div>
      </div>

      <div>Profile</div>
    </div>
  );
};

export default BannerNav;
