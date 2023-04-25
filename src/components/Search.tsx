import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_BROWSE_ALL, fetchAlbumAction } from "../redux/actions/actions";
import { RootState } from "../redux/store";
import { MainAlbum } from "../redux/types/Album";
import AlbumCard from "./AlbumCard";
import BannerNav from "./BannerNav";
import BrowseAllCard from "./BrowseAllCard";

const Search = () => {
  const dispatch = useDispatch();
  const browseAll = useSelector((state: RootState) => state.search.browseAll);
  const searchResults = useSelector(
    (state: RootState) => state.search.searchResults
  );

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
    dispatch(fetchAlbumAction(endPoint, query, options, action));
  }, []);

  return (
    <div className="">
      <h2 className="px-3 mt-5 pt-4">Browse All</h2>
      <div className="browse-all row mx-1">
        {searchResults && searchResults.length === 0
          ? browseAll.map((album: MainAlbum, i: number) => (
              <BrowseAllCard browseData={album} key={album.id} index={i} />
            ))
          : searchResults &&
            searchResults.map((album: MainAlbum, i: number) => (
              <AlbumCard albumData={album} key={album.id} />
            ))}
      </div>
    </div>
  );
};
export default Search;
