import {
  BsHeart,
  BsPlayCircleFill,
  BsMusicNoteList,
  BsPauseBtnFill,
} from "react-icons/bs";
import { CgInpicture } from "react-icons/cg";
import {
  BiShuffle,
  BiSkipPrevious,
  BiSkipNext,
  BiRepeat,
  BiMusic,
  BiVolumeFull,
} from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { TracksDatum } from "../redux/types/SelectedAlbum";
import {
  SET_CURRENT_TRACK,
  SET_CURRENT_TRACK_INDEX,
  SET_IS_PLAYING,
} from "../redux/actions/actions";

const MusicPlayer = () => {
  const dispatch = useDispatch();

  const currentTrack = useSelector(
    (state: RootState) => state.musicPlayer.currentTrack
  );

  const isPlaying = useSelector(
    (state: RootState) => state.musicPlayer.isPlaying
  );

  const handlePlay = () => {
    dispatch({ type: SET_IS_PLAYING, payload: true });
  };

  const handlePause = async () => {
    dispatch({ type: SET_IS_PLAYING, payload: false });
  };

  return (
    <div className="now-playing">
      {currentTrack !== null ? (
        <div className="song-details ml-3">
          <div className="d-flex align-items-center">
            <div className="mini-song-album px-3">
              <img src={currentTrack.album.cover} alt="mini-song-album" />
            </div>
            <div className="title-wrapper">
              <div className="song-info px-3">
                <div className="song-title">{currentTrack.title}</div>
                <div className="song-artist">{currentTrack.artist.name}</div>
              </div>
            </div>

            <div className="song-buttons d-flex">
              <div className="add-to-favorites d-flex flex-column justify-content-center px-2">
                <BsHeart />
              </div>
              <div className="change-display d-flex flex-column justify-content-center px-2">
                <CgInpicture />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="song-details d-flex align-items-center ml-3">
          No current Track.
        </div>
      )}

      <div className="song-controls">
        <div className=" d-flex justify-content-center">
          <div className="shuffle-button  px-3">
            <BiShuffle className="play-buttons" />
          </div>
          <div className="skip-left-button px-3">
            <BiSkipPrevious className="play-buttons" />
          </div>
          <div className="play-button px-3">
            {isPlaying ? (
              <BsPauseBtnFill
                className="play-buttons"
                onClick={() => {
                  handlePause();
                }}
              />
            ) : (
              <BsPlayCircleFill
                className="play-buttons"
                onClick={() => {
                  handlePlay();
                }}
              />
            )}
          </div>
          <div className="skip-right-button px-3">
            <BiSkipNext className="play-buttons" />
          </div>
          <div className="repeat-button px-3">
            <BiRepeat className="play-buttons" />
          </div>
        </div>
        <div className="song-duration d-flex align-items-center">
          <div className="passed-time px-2">0:00</div>
          <div className="progress-initial px-2"></div>
          <div className="progress-white px-2"></div>
          {currentTrack !== null ? (
            <div className="total-time px-2">
              {Math.floor(currentTrack.duration / 60)}:
              {currentTrack.duration % 60}
            </div>
          ) : (
            <div>0:00</div>
          )}
        </div>
      </div>
      <div className="playlist-controls">
        <div className="playlist-button d-flex flex-column justify-content-center px-2">
          <BsMusicNoteList />
        </div>
        <div className="pc-button d-flex flex-column justify-content-center px-2">
          <HiOutlineDesktopComputer />
        </div>
        <div className="volume-controls d-flex align-items-center mr-45">
          <div className="volume-button d-flex flex-column justify-content-center px-2">
            <BiVolumeFull />
          </div>
          <div className="volume-control">
            <div className="volume-level"></div>
            <div className="volume-level-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
