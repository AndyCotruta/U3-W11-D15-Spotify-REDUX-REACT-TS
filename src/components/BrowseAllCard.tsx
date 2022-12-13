import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ADD_MAIN_ALBUM,
  arrOfColors,
  fetchMainAlbum,
} from "../redux/actions/actions";
import { MainAlbum } from "../redux/types/Album";

interface BrowseProps {
  browseData: MainAlbum;
  index: number;
}

const BrowseAllCard = ({ browseData, index }: BrowseProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const endPoint: string = `https://striveschool-api.herokuapp.com/api/deezer/album/${browseData.album.id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const action = ADD_MAIN_ALBUM;

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div
        onClick={() => {
          navigate(`/album/${browseData.id}`);
          dispatch(fetchMainAlbum(endPoint, options, action));
        }}
        className="browse-all-card mb-4"
        style={{ backgroundColor: arrOfColors[index] }}
      >
        {browseData.title}
        <img
          src={browseData.album.cover}
          className="browse-all-img card-img-top"
          alt="..."
        ></img>
      </div>
    </div>
  );
};

export default BrowseAllCard;
