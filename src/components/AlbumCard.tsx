import { MainAlbum } from "../redux/types/Album";
import { BsPlayCircleFill } from "react-icons/bs";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_MAIN_ALBUM, fetchMainAlbum } from "../redux/actions/actions";

interface AlbumProps {
  albumData: MainAlbum;
}

const AlbumCard = ({ albumData }: AlbumProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const endPoint: string = `https://striveschool-api.herokuapp.com/api/deezer/album/${albumData.album.id}`;
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
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
      <Card
        onClick={async () => {
          await dispatch(fetchMainAlbum(endPoint, options, action));
          navigate(`/album/${albumData.album.id}`);
        }}
      >
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
