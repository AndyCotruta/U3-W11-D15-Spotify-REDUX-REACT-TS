import { AnyAction, Dispatch } from "redux";
import { MainAlbum } from "../types/Album";

export const ADD_GOOD_MORNING: string = "ADD_GOOD_MORNING";
export const ADD_RECENTLY_PLAYED: string = "ADD_RECENTLY_PLAYED";
export const ADD_SHOWS_TO_TRY: string = "ADD_SHOWS_TO_TRY";

export const fetchAlbumAction: any =
  (endPoint: string, query: string, options: any, action: string) =>
  async (dispatch: Dispatch) => {
    console.log("Fetching...");
    let response = await fetch(endPoint + query, options);
    console.log(response);
    try {
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: action,
          payload: data.data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
