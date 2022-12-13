import { TracksDatum } from "../redux/types/SelectedAlbum";

interface tracksProps {
  trackData: TracksDatum;
  index: number;
}

const TracksLi = ({ trackData, index }: tracksProps) => {
  return (
    <li>
      {index + 1}.{trackData.title}
      {Math.floor(trackData.duration / 60)}:{trackData.duration % 60}
    </li>
  );
};

export default TracksLi;
