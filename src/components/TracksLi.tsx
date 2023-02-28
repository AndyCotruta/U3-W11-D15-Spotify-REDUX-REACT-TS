import { useState } from "react";
import { TracksDatum } from "../redux/types/SelectedAlbum";
import { BsPlayFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_LIKED_SONG,
  ADD_LIKED_SONG_ID,
  REMOVE_LIKED_SONG,
  REMOVE_LIKED_SONG_ID,
} from "../redux/actions/actions";
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
  const likedSongsIds = useSelector(
    (state: RootState) => state.yourLibrary.songsIds
  );
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
        {hovered === trackData.id ? (
          <div
            onClick={() => {
              const audio = new Audio(trackData.preview);
              audio.play();
              audio.addEventListener("ended", () => {});
            }}
          >
            <BsPlayFill />
          </div>
        ) : (
          index + 1
        )}
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
        {hovered === trackData.id && !likedSongsIds.includes(trackData.id) && (
          <div
            className="px-3 absolute"
            onClick={() => {
              dispatch({ type: ADD_LIKED_SONG, payload: trackData });
              dispatch({ type: ADD_LIKED_SONG_ID, payload: trackData.id });
            }}
          >
            <BsHeart />
          </div>
        )}
        {likedSongsIds.includes(trackData.id) && (
          <div
            className="px-3 liked-song"
            onClick={() => {
              const deletedSongsIds = likedSongsIds.filter(
                (likedSongId: number) => likedSongId !== trackData.id
              );
              const deletedSongs = likedSongs.filter(
                (likedSong: TracksDatum) => likedSong !== trackData
              );
              dispatch({
                type: REMOVE_LIKED_SONG,
                payload: deletedSongs,
              });
              dispatch({
                type: REMOVE_LIKED_SONG_ID,
                payload: deletedSongsIds,
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
