import { AnyAction } from "redux";
import {
  ADD_LIBRARY_TABS,
  ADD_LIKED_ALBUMS,
  ADD_LIKED_SONG,
  ADD_LIKED_SONG_ID,
  REMOVE_LIKED_ALBUMS,
  REMOVE_LIKED_SONG,
  REMOVE_LIKED_SONG_ID,
} from "../actions/actions";
import { YourLibraryType } from "../types/YourLibraryType";

const initialState: YourLibraryType = {
  tab: "Playlists",
  playlists: [],
  podcasts: [],
  artists: [],
  albums: [],
  songs: [],
  songsIds: [],
};

const yourLibraryReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_LIBRARY_TABS: {
      return {
        ...state,
        tab: action.payload,
      };
    }
    case ADD_LIKED_ALBUMS: {
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };
    }
    case REMOVE_LIKED_ALBUMS: {
      return {
        ...state,
        albums: action.payload,
      };
    }
    case ADD_LIKED_SONG: {
      if (state.songs.includes(action.payload)) {
        return state;
      } else {
        return {
          ...state,
          songs: [...state.songs, action.payload],
        };
      }
    }
    case REMOVE_LIKED_SONG: {
      return {
        ...state,
        songs: action.payload,
      };
    }
    case ADD_LIKED_SONG_ID: {
      return {
        ...state,
        songsIds: [...state.songsIds, action.payload],
      };
    }
    case REMOVE_LIKED_SONG_ID: {
      return {
        ...state,
        songsIds: action.payload,
      };
    }
    default:
      return state;
  }
};

export default yourLibraryReducer;
