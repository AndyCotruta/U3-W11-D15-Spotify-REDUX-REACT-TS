import { BsHeart, BsPlayCircleFill, BsMusicNoteList } from "react-icons/bs";
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

const MusicPlayer = () => {
  return (
    <div className="wrapper1">
      <div className="wrapper2">
        <div className="now-playing">
          <div className="song-details d-flex align-items-center ml-3">
            <div className="mini-song-album px-3">
              <img
                src="https://i.scdn.co/image/ab67616d0000b27307744e2ed983efa3e6620a47"
                alt="mini-song-album"
              />
            </div>
            <div className="title-wrapper">
              <div className="song-info px-3">
                <div className="song-title">Another One Bites The Dust</div>
                <div className="song-artist">Queen</div>
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
          <div className="song-controls">
            <div className=" d-flex justify-content-center">
              <div className="shuffle-button  px-3">
                <BiShuffle className="play-buttons" />
              </div>
              <div className="skip-left-button px-3">
                <BiSkipPrevious className="play-buttons" />
              </div>
              <div className="play-button px-3">
                <BsPlayCircleFill className="play-buttons" />
              </div>
              <div className="skip-right-button px-3">
                <BiSkipNext className="play-buttons" />
              </div>
              <div className="repeat-button px-3">
                <BiRepeat className="play-buttons" />
              </div>
            </div>
            <div className="song-duration d-flex align-items-center">
              <div className="passed-time px-2">0:12</div>
              <div className="progress-initial px-2"></div>
              <div className="progress-white px-2"></div>
              <div className="total-time px-2">3:34</div>
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
      </div>
    </div>
  );
};

export default MusicPlayer;
