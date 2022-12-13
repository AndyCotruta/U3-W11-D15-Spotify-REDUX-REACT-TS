import { TracksDatum } from "../redux/types/SelectedAlbum";

interface tracksProps {
  trackData: TracksDatum;
  index: number;
}

const TracksLi = ({ trackData, index }: tracksProps) => {
  return (
    <li className="track-info d-flex justify-content-between">
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
        {Math.floor(trackData.duration / 60)}:{trackData.duration % 60}
      </div>
    </li>
  );
};

export default TracksLi;
