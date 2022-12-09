import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeType } from "../redux/types/HomeType";
import { fetchAlbumAction } from "../redux/actions/actions";
import { AnyAction, Dispatch } from "redux";

const Home = () => {
  const dispatch = useDispatch();
  const goodMorning = useSelector<HomeType>((state) => state.goodMorning);
  const query1: string = "goodmorning";
  const endPoint: string =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query1;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4fb92d580fmsh29489d65e968a28p1565bbjsncea4009bc4b4",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  useEffect(() => {
    dispatch(fetchAlbumAction(endPoint, options));
    console.log(goodMorning);
  }, []);

  return <h1>This is the homepage</h1>;
};

export default Home;
