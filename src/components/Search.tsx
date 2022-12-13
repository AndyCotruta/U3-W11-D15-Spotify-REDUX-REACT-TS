import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BROWSE_ALL, fetchAlbumAction } from "../redux/actions/actions";
import { SearchType } from "../redux/types/SearchType";
import AlbumCard from "./AlbumCard";
import BannerNav from "./BannerNav";
import BrowseAllCard from "./BrowseAllCard";

const Search = () => {
  const dispatch = useDispatch();
  const browseAll = useSelector((state: SearchType) => state.search.browseAll);
  const searchResults = useSelector((state: SearchType) => state.search.search);
  const endPoint: string =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const query: string = "dance";
  const action = ADD_BROWSE_ALL;

  useEffect(() => {
    console.log(query);
    dispatch(fetchAlbumAction(endPoint, query, options, action));
    console.log(browseAll);
  });

  return (
    <div className="center-section">
      <BannerNav />

      <h2 className="px-3 mt-5 pt-4">Browse All</h2>
      <div className="browse-all row mx-1">
        {searchResults.length === 0
          ? browseAll.map((album, i) => (
              <BrowseAllCard browseData={album} key={album.id} index={i} />
            ))
          : searchResults.map((album, i) => (
              <AlbumCard albumData={album} key={album.id} />
            ))}
      </div>
    </div>
  );
};
export default Search;
