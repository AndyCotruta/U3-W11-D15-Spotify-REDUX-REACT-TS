import { AnyAction } from "redux";
import { ADD_MAIN_ALBUM } from "../actions/actions";
import { SelectedAlbumType } from "../types/SelectedAlbumType";

const initialState: SelectedAlbumType = {
  album: [],
};

const albumReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_MAIN_ALBUM: {
      return {
        ...state,
        album: action.payload,
      };
    }

    default:
      return state;
  }
};

export default albumReducer;
