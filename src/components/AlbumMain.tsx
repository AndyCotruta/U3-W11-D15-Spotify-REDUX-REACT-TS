import { format, parseISO, secondsToMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import BannerNav from "./BannerNav";
import TracksLi from "./TracksLi";
import { BsHeart, BsThreeDots, BsHeartFill } from "react-icons/bs";
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
import { Tracks, TracksDatum } from "../redux/types/SelectedAlbum";

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

  interface AverageColor {
    red: number;
    green: number;
    blue: number;
  }

  function useAverageColor(imageElement: string): AverageColor | null {
    const [averageColor, setAverageColor] = useState<AverageColor | null>(null);

    const getAverageColor = async () => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imageElement;

      await new Promise((resolve) => {
        img.onload = resolve;
      });

      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Unable to get context");
      }

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let red = 0;
      let green = 0;
      let blue = 0;

      for (let i = 0; i < data.length; i += 4) {
        red += data[i];
        green += data[i + 1];
        blue += data[i + 2];
      }

      const pixels = data.length / 4;
      const averageRed = Math.round(red / pixels);
      const averageGreen = Math.round(green / pixels);
      const averageBlue = Math.round(blue / pixels);

      setAverageColor({
        red: averageRed,
        green: averageGreen,
        blue: averageBlue,
      });
    };

    getAverageColor();

    return averageColor;
  }

  const averageColor = useAverageColor(imageElement);

  const style = {
    background: averageColor
      ? `linear-gradient(to top, black, rgb(${averageColor.red}, ${averageColor.green}, ${averageColor.blue}))`
      : "black",
    transition: `all 0.9s ease-in-out`,
  };

  const currentIndex = useSelector(
    (state: RootState) => state.musicPlayer.currentTrackIndex
  );

  const playAlbum = (tracksArray: Tracks) => {
    let index = 0;
    const audioArray: HTMLAudioElement[] = [];
    tracksArray.data.forEach((track) => {
      const audio = new Audio(track.preview);
      audioArray.push(audio);
    });
    // dispatch({ type: SET_AUDIO_ARRAY, payload: audioArray });
    dispatch({ type: SET_IS_PLAYING, payload: true });
    dispatch({ type: SET_CURRENT_TRACK, payload: tracksArray.data[index] });
    dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: index });
    audioArray[index].play();
    audioArray.forEach((audio) => {
      audio.addEventListener("ended", () => {
        index++;
        if (index < audioArray.length) {
          console.log("Index when playing tracks: ", index);

          dispatch({ type: SET_IS_PLAYING, payload: true });
          dispatch({
            type: SET_CURRENT_TRACK,
            payload: tracksArray.data[index],
          });
          dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: index });
          audioArray[index].play();
        }
        if (index === audioArray.length) {
          dispatch({ type: SET_IS_PLAYING, payload: false });
          dispatch({ type: SET_CURRENT_TRACK, payload: {} });
        }
      });
    });
  };

  //     // Play the first track
  //     audioElements[0].play();

  //     // Set up event listeners to update state
  //     audioElements[currentTrackIndex].addEventListener("ended", () => {
  //       const nextTrackIndex = (currentTrackIndex + 1) % audioElements.length;
  //       dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: nextTrackIndex });
  //     });
  //   }, []);

  //   useEffect(() => {
  //     // Pause or play the current track when the isPlaying state changes
  //     if (isPlaying) {
  //       audioArray[currentTrackIndex].play();
  //     } else {
  //       audioArray[currentTrackIndex].pause();
  //     }
  //   }, [isPlaying]);

  //   // Play the current track
  //   const handlePlay = () => {
  //     dispatch({ type: SET_IS_PLAYING, payload: true });
  //   };

  //   // Pause the current track
  //   const handlePause = () => {
  //     dispatch({ type: SET_IS_PLAYING, payload: false });
  //   };

  //   // Play the previous track
  //   const handlePrevious = () => {
  //     const previousTrackIndex =
  //       (currentTrackIndex - 1 + audioArray.length) % audioArray.length;
  //     dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: previousTrackIndex });
  //     dispatch({ type: SET_IS_PLAYING, payload: true });
  //   };

  //   // Play the next track
  //   const handleNext = () => {
  //     const nextTrackIndex = (currentTrackIndex + 1) % audioArray.length;
  //     dispatch({ type: SET_CURRENT_TRACK_INDEX, payload: nextTrackIndex });
  //     dispatch({ type: SET_IS_PLAYING, payload: true });
  //   };
  // };
  return (
    <div style={style} className="center-section text-white">
      <BannerNav />
      <div className="d-flex mt-5">
        <div id="target" className="card-album px-3">
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
      <div className="d-flex align-items-center px-3">
        <div className="big-play  my-3">
          <Play
            className="big-play-triangle"
            onClick={() => {
              const tracksArray = mainAlbum.tracks;
              playAlbum(tracksArray);
            }}
          />
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
            <TracksLi trackData={track} index={i} />
          ))}
      </ul>
    </div>
  );
};

export default AlbumMain;
