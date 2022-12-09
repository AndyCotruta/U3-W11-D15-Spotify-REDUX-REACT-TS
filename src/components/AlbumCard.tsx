import { MainAlbum } from "../redux/types/Album";
import { BsPlayCircleFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";

interface AlbumProps {
  albumData: MainAlbum;
}

const AlbumCard = ({ albumData }: AlbumProps) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
      <Card>
        <Card.Img
          className="cardImg"
          variant="top"
          src={albumData.album.cover}
        />

        <Card.Body>
          <Card.Title>{albumData.album.title}</Card.Title>
          <Card.Text>{albumData.artist.name}</Card.Text>
        </Card.Body>
        <div className="greenPlayBtn">
          <BsPlayCircleFill className="greenPlay" />
        </div>
      </Card>
    </div>
  );
};

export default AlbumCard;
