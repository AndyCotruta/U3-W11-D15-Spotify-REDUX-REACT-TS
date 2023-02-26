import { format, parseISO, secondsToMinutes } from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { SelectedAlbum } from "../redux/types/SelectedAlbum";
import { SelectedAlbumType } from "../redux/types/SelectedAlbumType";
import BannerNav from "./BannerNav";
import TracksLi from "./TracksLi";

const AlbumMain = () => {
  const { id } = useParams();

  const mainAlbum = useSelector((state: RootState) => state.album.album);
  console.log(mainAlbum);
  const dispatch = useDispatch();

  return (
    <div className="center-section text-white">
      <BannerNav />
      <div className="d-flex mt-5">
        <div className="card-album px-3">
          <img
            src={mainAlbum && mainAlbum.cover}
            className="rendered-image"
            alt="album-image"
          />
        </div>
        <div className="album-details px-3">
          <h3 className="albumTitle">ALBUM</h3>
          <h1 className="title-album">{mainAlbum && mainAlbum.title}</h1>

          <div>
            <div className="d-flex artist-description">
              <img className="avatar" src="${chosenAlbumInfo.cover}" alt="" />
              <div className="artist-info-banner artist-numbers">
                {mainAlbum && mainAlbum.artist.name}
              </div>
              <div className="ml-1">
                -{" "}
                {format(parseISO(mainAlbum && mainAlbum.release_date), "yyyy")}
              </div>
              <div className="ml-1">
                - {mainAlbum && mainAlbum.tracks.data.length} songs{" "}
              </div>
              <div className="ml-1">
                - {secondsToMinutes(mainAlbum && mainAlbum.duration)} minutes{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="track-list px-3">
        {mainAlbum &&
          mainAlbum.tracks.data.map((track: any, i: number) => (
            <TracksLi trackData={track} index={i} />
          ))}
      </ul>
    </div>
  );
};

export default AlbumMain;
