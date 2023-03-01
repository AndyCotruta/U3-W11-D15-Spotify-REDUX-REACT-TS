import { Dispatch } from "redux";

export const ADD_GOOD_MORNING: string = "ADD_GOOD_MORNING";
export const ADD_RECENTLY_PLAYED: string = "ADD_RECENTLY_PLAYED";
export const ADD_SHOWS_TO_TRY: string = "ADD_SHOWS_TO_TRY";
export const ADD_BROWSE_ALL: string = "ADD_BROWSE_ALL";
export const ADD_SEARCH_RESULTS: string = "ADD_SEARCH_RESULTS";
export const ADD_MAIN_ALBUM: string = "ADD_MAIN_ALBUM";
export const arrOfColors: string[] = [
  "#E13400",
  "#1E3164",
  "#E8105B",
  "#148A06",
  "#BC5900",
  "#E91528",
  "#E0128B",
  "#8C67AB",
  "#7358FF",
  "#D74000",
  "#777777",
  "#527AA1",
  "#8B1A32",
  "#7D4A32",
  "#4F3750",
  "#E13400",
  "#1E3164",
  "#E8105B",
  "#148A06",
  "#BC5900",
];
export const ADD_LIBRARY_TABS = "ADD_LIBRARY_TABS";
export const ADD_LIKED_ALBUMS = "ADD_LIKED_ALBUMS";
export const REMOVE_LIKED_ALBUMS = "REMOVE_LIKED_ALBUMS";
export const ADD_LIKED_SONG = "ADD_LIKED_SONG";
export const REMOVE_LIKED_SONG = "REMOVE_LIKED_SONG";
export const ADD_LIKED_SONG_ID = "ADD_LIKED_SONG_ID";
export const REMOVE_LIKED_SONG_ID = "REMOVE_LIKED_SONG_ID";
export const SET_CURRENT_TRACK_INDEX = "SET_CURRENT_TRACK_INDEX";
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";
export const SET_AUDIO_ARRAY = "SET_AUDIO_ARRAY";
export const SET_IS_PLAYING = "SET_IS_PLAYING";
export const SET_IS_PAUSE = "SET_IS_PAUSE";

export const fetchAlbumAction: any =
  (endPoint: string, query: string, options: any, action: string) =>
  async (dispatch: Dispatch) => {
    try {
      let response = await fetch(endPoint + query, options);
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: action,
          payload: data.data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

export const fetchMainAlbum: any =
  (endPoint: string, options: any, action: string) =>
  async (dispatch: Dispatch) => {
    console.log("Fetching main album data...");

    try {
      let response = await fetch(endPoint, options);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        dispatch({
          type: action,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
