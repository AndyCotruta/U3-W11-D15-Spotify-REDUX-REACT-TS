import { useEffect, useState } from "react";
import { TracksDatum } from "../redux/types/SelectedAlbum";
import { BsPlayFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ADD_LIKED_SONG, REMOVE_LIKED_SONG } from "../redux/actions/actions";
import { RootState } from "../redux/store";

interface tracksProps {
  trackData: TracksDatum;
  index: number;
}

const TracksLi = ({ trackData, index }: tracksProps) => {
  const minutes = trackData.duration / 60;
  let seconds = trackData.duration % 60;

  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(0);

  const likedSongs = useSelector((state: RootState) => state.yourLibrary.songs);

  return (
    <li
      className="track-info d-flex justify-content-between px-3"
      onMouseEnter={() => {
        setHovered(trackData.id);
      }}
      onMouseLeave={() => {
        setHovered(0);
      }}
    >
      <span className="mr-3 tracks-index">
        {hovered === trackData.id ? <BsPlayFill /> : index + 1}
      </span>
      <div className="tracks-section d-flex align-items-center">
        {trackData.title}
      </div>
      <div className="tracks-section text-center d-flex align-items-center justify-content-center">
        {" "}
        {trackData.artist.name}
      </div>
      <div className="tracks-section d-flex align-items-center">
        {" "}
        {trackData.explicit_lyrics}
      </div>

      <div className="tracks-section  d-flex align-items-center justify-content-end px-1">
        {hovered === trackData.id && !likedSongs.includes(trackData.id) && (
          <div className="px-3">
            <BsHeart
              onClick={() => {
                dispatch({ type: ADD_LIKED_SONG, payload: trackData.id });
              }}
            />
          </div>
        )}
        {likedSongs.includes(trackData.id) && (
          <div
            className="px-3 liked-song"
            onClick={() => {
              const deletedSongs = likedSongs.filter(
                (likedSong: number) => likedSong !== trackData.id
              );
              dispatch({
                type: REMOVE_LIKED_SONG,
                payload: deletedSongs,
              });
            }}
          >
            <BsHeartFill />
          </div>
        )}
        <div className="track-duration">
          {Math.floor(minutes)}:{seconds > 9 ? seconds : `0${seconds}`}
        </div>
      </div>
    </li>
  );
};

export default TracksLi;
