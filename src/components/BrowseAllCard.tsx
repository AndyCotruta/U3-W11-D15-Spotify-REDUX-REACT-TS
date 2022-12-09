import { MainAlbum } from "../redux/types/Album";

interface BrowseProps {
  browseData: MainAlbum;
  index: number;
}

const BrowseAllCard = ({ browseData, index }: BrowseProps) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      {index}.{browseData.title}
    </div>
  );
};

export default BrowseAllCard;
