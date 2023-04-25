import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TracksDatum } from "../redux/types/SelectedAlbum";
import BannerNav from "./BannerNav";
import TracksLi from "./TracksLi";
import { ReactComponent as Play } from "./icons/play.svg";

const LikedSongs = () => {
  const likedSongs = useSelector((state: RootState) => state.yourLibrary.songs);
  const imageElement =
    "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png";

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

  return (
    <div style={style} className="liked-songs text-white">
      <div className="liked-songs-header d-flex px-3">
        <img
          className="liked-songs-png"
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
        />
        <div className="liked-songs-text px-3 align-self-end">
          <div>PLAYLIST</div>
          <div className="LS">Liked Songs</div>
          <div>Andy Cotruta - {likedSongs.length}</div>
        </div>
      </div>
      <div className="big-play m-3">
        <Play className="big-play-triangle" />
      </div>
      <div className="px-3">
        {likedSongs.map((likedSong: TracksDatum, index: number) => (
          <div key={likedSong.id}>
            <TracksLi trackData={likedSong} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedSongs;
