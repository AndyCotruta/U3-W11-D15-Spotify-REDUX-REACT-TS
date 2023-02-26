import { TracksDatum } from "../redux/types/SelectedAlbum";

interface tracksProps {
  trackData: TracksDatum;
  index: number;
}

const TracksLi = ({ trackData, index }: tracksProps) => {
  const minutes = trackData.duration / 60;
  let seconds = trackData.duration % 60;

  return (
    <li className="track-info d-flex justify-content-between px-3">
      <span className="mr-3 tracks-index">{index + 1}</span>
      <div className="tracks-section d-flex align-items-center">
        {trackData.title}
      </div>
      <div className="tracks-section text-center d-flex align-items-center justify-content-center">
        {" "}
        {trackData.artist.name}
      </div>
      <div className="tracks-section d-flex align-items-center">
        {" "}
        {trackData.explicit_lyrics}
      </div>

      <div className="tracks-section  d-flex align-items-center justify-content-end px-1">
        {Math.floor(minutes)}:{seconds > 9 ? seconds : `0${seconds}`}
      </div>
    </li>
  );
};

export default TracksLi;
