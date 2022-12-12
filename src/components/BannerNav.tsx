import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_SEARCH_RESULTS, fetchAlbumAction } from "../redux/actions/actions";
import { SearchType } from "../redux/types/SearchType";

const BannerNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();

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
    console.log(query);
    dispatch(fetchAlbumAction(endPoint, query, options, action));
    if (query === "") {
      dispatch({
        type: ADD_SEARCH_RESULTS,
        payload: [],
      });
    }
  };

  return (
    <div className="p-3 bannerNav text-white d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <div> Buttons</div>
        <input
          className={location.pathname === "/search" ? "input" : "hidden"}
          type="text"
          placeholder="What do you want to listen to?"
          onChange={(e) => {
            fetchSearchResults(e.target.value);
          }}
        />
      </div>
      <div>Profile</div>
    </div>
  );
};

export default BannerNav;
