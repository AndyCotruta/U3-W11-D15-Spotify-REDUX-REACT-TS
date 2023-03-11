import { format, parseISO, secondsToMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BannerNav from "./BannerNav";
import TracksLi from "./TracksLi";
import { BsHeart, BsThreeDots, BsHeartFill, BsPauseFill } from "react-icons/bs";
import { ReactComponent as Play } from "./icons/play.svg";
import { useEffect, useState } from "react";
import {
  ADD_LIKED_ALBUMS,
  REMOVE_LIKED_ALBUMS,
  SET_AUDIO_ARRAY,
  SET_CURRENT_TRACK,
  SET_CURRENT_TRACK_INDEX,
  SET_IS_PLAYING,
} from "../redux/actions/actions";
import { MainAlbum } from "../redux/types/Album";
import { TracksDatum } from "../redux/types/SelectedAlbum";
import useAverageColor from "./hooks/useAverageColor";

const AlbumMain = () => {
  const mainAlbum = useSelector((state: RootState) => state.album.album);
  const likedAlbums = useSelector(
    (state: RootState) => state.yourLibrary.albums
  );
  const isLiked = likedAlbums.find(
    (album: MainAlbum) => album.id === mainAlbum.id
  );
  const dislikeAlbum = likedAlbums.filter(
    (album: MainAlbum) => album.id !== mainAlbum.id
  );

  const dispatch = useDispatch();

  const imageElement = mainAlbum.cover_medium;

  const averageColor = useAverageColor(imageElement);

  const style = {
    background: averageColor
      ? `linear-gradient(to top, black, rgb(${averageColor.red}, ${averageColor.green}, ${averageColor.blue}))`
      : "black",
    transition: `all 0.9s ease-in-out`,
  };

  const currentTrackIndex = useSelector(
    (state: RootState) => state.musicPlayer.currentTrackIndex
  );
  const isPlaying = useSelector(
    (state: RootState) => state.musicPlayer.isPlaying
  );
  const audioArray = useSelector(
    (state: RootState) => state.musicPlayer.audioArray
  );

  const [trackArray, setTrackArray] = useState<HTMLAudioElement[]>([]);
  const tracksArray = mainAlbum.tracks;

  useEffect(() => {
    // Create audio elements for each track
    const audioElements = tracksArray.data.map(
      (track: TracksDatum) => new Audio(track.preview)
    );
    console.log(audioElements);
    setTrackArray(audioElements);
    dispatch({ type: SET_AUDIO_ARRAY, payload: audioElements });
    dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: 0 });
    dispatch({
      type: SET_CURRENT_TRACK,
      payload: tracksArray.data[currentTrackIndex],
    });
  }, [currentTrackIndex, dispatch, tracksArray.data]);
  useEffect(() => {
    // Pause or play the current track when the isPlaying state changes
    if (isPlaying && trackArray.length > 0) {
      if (currentTrackIndex < trackArray.length) {
        trackArray[currentTrackIndex].play();

        // Set up event listeners to update state
        trackArray.forEach((element: HTMLAudioElement) =>
          element.addEventListener("ended", () => {
            const nextTrackIndex = currentTrackIndex + 1;
            dispatch({
              type: SET_CURRENT_TRACK_INDEX,
              payload: nextTrackIndex,
            });
            if (nextTrackIndex !== trackArray.length) {
              dispatch({
                type: SET_CURRENT_TRACK,
                payload: tracksArray.data[nextTrackIndex],
              });
            }
          })
        );
      }
      if (currentTrackIndex === trackArray.length) {
        dispatch({ type: SET_IS_PLAYING, payload: false });
        dispatch({
          type: SET_CURRENT_TRACK_INDEX,
          payload: 0,
        });
      }
    } else if (
      !isPlaying &&
      trackArray.length > 0 &&
      currentTrackIndex !== trackArray.length
    ) {
      trackArray[currentTrackIndex].pause();
    }
  }, [isPlaying, currentTrackIndex, trackArray, dispatch, tracksArray.data]);
  const handlePlay = () => {
    dispatch({ type: SET_IS_PLAYING, payload: true });
  };

  const handlePause = () => {
    dispatch({ type: SET_IS_PLAYING, payload: false });
  };

  const handlePrevious = () => {
    const previousTrackIndex =
      (currentTrackIndex - 1 + trackArray.length) % trackArray.length;
    dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: previousTrackIndex });
    dispatch({
      type: SET_CURRENT_TRACK,
      payload: tracksArray.data[previousTrackIndex],
    });
    dispatch({ type: SET_IS_PLAYING, payload: true });
  };

  const handleNext = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % trackArray.length;
    dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: nextTrackIndex });
    dispatch({
      type: SET_CURRENT_TRACK,
      payload: tracksArray.data[nextTrackIndex],
    });
    dispatch({ type: SET_IS_PLAYING, payload: true });
  };

  return (
    <div style={style} className="center-section text-white">
      <BannerNav />
      <div className="d-flex mt-5">
        <div id="target" className="card-album px-3">
          <img
            src={mainAlbum && mainAlbum.cover}
            className="rendered-image"
            alt="album cover"
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
      <div className="d-flex align-items-center px-3">
        <div className="big-play  my-3">
          {isPlaying ? (
            <div
              onClick={() => {
                // const tracksArray = mainAlbum.tracks;
                // dispatch({ type: SET_IS_PAUSE, payload: true });
                // playAlbum(tracksArray);
                handlePause();
              }}
            >
              <BsPauseFill />
            </div>
          ) : (
            <div>
              <Play
                className="big-play-triangle"
                onClick={() => {
                  // const tracksArray = mainAlbum.tracks;
                  // dispatch({ type: SET_IS_PAUSE, payload: false });
                  // dispatch({ type: SET_IS_PLAYING, payload: true });
                  // playAlbum(tracksArray);
                  handlePlay();
                }}
              />
            </div>
          )}
        </div>
        <div className="px-4 like-album">
          {isLiked ? (
            <BsHeartFill
              className="liked-album"
              onClick={() => {
                dispatch({
                  type: REMOVE_LIKED_ALBUMS,
                  payload: dislikeAlbum,
                });
              }}
            />
          ) : (
            <BsHeart
              onClick={() => {
                dispatch({ type: ADD_LIKED_ALBUMS, payload: mainAlbum });
              }}
            />
          )}
        </div>
        <div className=" like-album">
          <BsThreeDots />
        </div>
      </div>

      <ul className="track-list px-3">
        {mainAlbum &&
          mainAlbum.tracks.data.map((track: any, i: number) => (
            <TracksLi key={i} trackData={track} index={i} />
          ))}
      </ul>
    </div>
  );
};

export default AlbumMain;
