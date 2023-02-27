import { MainAlbum } from "../redux/types/Album";
import { BsPlayCircleFill } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_MAIN_ALBUM, fetchMainAlbum } from "../redux/actions/actions";
import { useEffect } from "react";
import { SelectedAlbum } from "../redux/types/SelectedAlbum";

interface AlbumProps {
  albumData: SelectedAlbum;
}

const YourLibraryAlbumCard = ({ albumData }: AlbumProps) => {
  console.log(albumData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const endPoint: string = `https://striveschool-api.herokuapp.com/api/deezer/album/${albumData.id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const action = ADD_MAIN_ALBUM;
  // useEffect(() => {
  //   dispatch(fetchMainAlbum(endPoint, options, action));
  // }, []);
  return (
    <div>
      <Card
        className="liked-album-card"
        onClick={async () => {
          await dispatch(fetchMainAlbum(endPoint, options, action));
          navigate(`/album/${albumData.id}`);
        }}
      >
        <Card.Img className="cardImg" variant="top" src={albumData.cover} />

        <Card.Body>
          <Card.Title>{albumData.title}</Card.Title>
          <Card.Text>{albumData.artist.name}</Card.Text>
        </Card.Body>
        <div className="greenPlayBtn">
          <BsPlayCircleFill className="greenPlay" />
        </div>
      </Card>
    </div>
  );
};

export default YourLibraryAlbumCard;
