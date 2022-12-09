import { MainAlbum } from "../redux/types/Album";
import { BsPlayCircleFill } from "react-icons/bs";

interface AlbumProps {
  albumData: MainAlbum;
}

const AlbumCard = ({ albumData }: AlbumProps) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div className="recently-played-cards card mb-3">
        <img
          src={albumData.album.cover}
          className="card-img-top"
          alt="album-cover"
        ></img>
        <div className="recently-played-card-body card-body">
          <p className="card-text p-cards-title">{albumData.album.title}</p>
          <p className="card-text">{albumData.artist.name}</p>
        </div>
        <button className="green-player-btn-rp">
          <BsPlayCircleFill />
        </button>
      </div>
    </div>
  );
};

export default AlbumCard;
