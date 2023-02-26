import { AnyAction } from "redux";
import {
  ADD_LIBRARY_TABS,
  ADD_LIKED_ALBUMS,
  REMOVE_LIKED_ALBUMS,
} from "../actions/actions";
import { YourLibraryType } from "../types/YourLibraryType";

const initialState: YourLibraryType = {
  tab: "",
  playlists: [],
  podcasts: [],
  artists: [],
  albums: [],
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
    default:
      return state;
  }
};

export default yourLibraryReducer;
