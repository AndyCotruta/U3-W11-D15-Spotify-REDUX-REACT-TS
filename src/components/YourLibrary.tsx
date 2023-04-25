import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BannerNav from "./BannerNav";
import { BsPlayCircleFill } from "react-icons/bs";
import YourLibraryAlbumCard from "./YourLibraryAlbumCard";
import { SelectedAlbum, TracksDatum } from "../redux/types/SelectedAlbum";

const YourLibrary = () => {
  const selectedTab = useSelector((state: RootState) => state.yourLibrary.tab);
  const likedAlbums = useSelector(
    (state: RootState) => state.yourLibrary.albums
  );
  const likedSongs = useSelector((state: RootState) => state.yourLibrary.songs);

  return (
    <div className="text-white">
      <div className="d-flex flex-column mt-5 px-3">
        <h2 className="py-3">{selectedTab}</h2>
        <div className=" d-flex w-full">
          {selectedTab === "Playlists" && (
            <div className="liked-songs-card">
              {likedSongs.length === 0 ? (
                <div>Please like some songs before you can see them here</div>
              ) : (
                <div>
                  {likedSongs.map((likedSong: TracksDatum) => (
                    <div>
                      <span>{likedSong.artist.name} - </span>
                      <span>{likedSong.title}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="liked-songs-playBtn">
                <BsPlayCircleFill className="ls-btn" />
              </div>
            </div>
          )}

          <div className="px-3 row">
            {selectedTab === "Albums" &&
              likedAlbums.map((album: SelectedAlbum) => (
                <YourLibraryAlbumCard albumData={album} key={album.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourLibrary;
