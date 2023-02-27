import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { MainAlbum } from "../redux/types/Album";
import BannerNav from "./BannerNav";

const YourLibrary = () => {
  const [playlists, setPlaylists] = useState("");
  const selectedTab = useSelector((state: RootState) => state.yourLibrary.tab);
  const likedAlbums = useSelector(
    (state: RootState) => state.yourLibrary.albums
  );

  return (
    <div className="center-section text-white">
      <BannerNav />
      <div className="d-flex flex-column mt-5">
        <h1>{selectedTab}</h1>
        <div>
          {selectedTab === "Albums" &&
            likedAlbums.map((album: MainAlbum) => (
              <div>We have liked albums</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default YourLibrary;
