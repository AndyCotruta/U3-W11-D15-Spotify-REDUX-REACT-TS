import { arrOfColors } from "../redux/actions/actions";
import { MainAlbum } from "../redux/types/Album";

interface BrowseProps {
  browseData: MainAlbum;
  index: number;
}

const BrowseAllCard = ({ browseData, index }: BrowseProps) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div
        className="browse-all-card mb-4"
        style={{ backgroundColor: arrOfColors[index] }}
      >
        {browseData.title}
        <img
          src={browseData.album.cover}
          className="browse-all-img card-img-top"
          alt="..."
        ></img>
      </div>
    </div>
  );
};

export default BrowseAllCard;
