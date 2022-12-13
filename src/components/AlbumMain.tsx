import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_MAIN_ALBUM } from "../redux/actions/actions";
import { SelectedAlbum } from "../redux/types/SelectedAlbum";
import { SelectedAlbumType } from "../redux/types/SelectedAlbumType";
import BannerNav from "./BannerNav";

const AlbumMain = () => {
  const { id } = useParams();

  const mainAlbum = useSelector((state: SelectedAlbumType) => state.album);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(mainAlbum);
    console.log(mainAlbum.album.title);
  }, [mainAlbum]);

  return (
    <div className="center-section text-white">
      <BannerNav />
      <div className="d-flex mt-5">
        <div className="card-album">
          <img
            src="${chosenAlbumInfo.cover_medium}"
            className="rendered-image"
            alt="album-image"
          />
        </div>
        <div className="album-details px-3">
          <h3 className="albumTitle">ALBUM</h3>
          <h1 className="title-album">{mainAlbum.album.title}</h1>

          <div>
            <div className="d-flex artist-description">
              <img className="avatar" src="${chosenAlbumInfo.cover}" alt="" />
              <p className="artist-info-banner artist-numbers">
                <span className="artist-decoration">chosenArtist</span> - 1994 -
                15 songs, 38 min 22 sec
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumMain;
