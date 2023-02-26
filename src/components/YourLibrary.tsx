import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BannerNav from "./BannerNav";

const YourLibrary = () => {
  const [playlists, setPlaylists] = useState("");
  const selectedTab = useSelector((state: RootState) => state.yourLibrary.tab);

  return (
    <div className="center-section text-white">
      <BannerNav />
      <div className="d-flex mt-5">
        <h1>{selectedTab}</h1>
      </div>
    </div>
  );
};

export default YourLibrary;
