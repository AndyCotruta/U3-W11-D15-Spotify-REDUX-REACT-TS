import { AnyAction } from "redux";
import {
  SET_AUDIO_ARRAY,
  SET_CURRENT_AUDIO,
  SET_CURRENT_TRACK,
  SET_CURRENT_TRACK_INDEX,
  SET_IS_PAUSE,
  SET_IS_PLAYING,
} from "../actions/actions";
import { MusicPlayerType } from "../types/MusicPlayerType";
import { TracksDatum } from "../types/SelectedAlbum";
import CircularJSON from "circular-json";

const initialState: MusicPlayerType = {
  currentTrackIndex: 0,
  currentTrack: null,
  audioArray: [],
  isPlaying: false,
  currentAudio: null,
};

const musicPlayerReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CURRENT_TRACK: {
      return {
        ...state,
        currentTrack: action.payload,
      };
    }

    case SET_CURRENT_AUDIO: {
      return {
        ...state,
        currentAudio: action.payload,
      };
    }

    case SET_CURRENT_TRACK_INDEX: {
      return {
        ...state,
        currentTrackIndex: action.payload,
      };
    }

    case SET_AUDIO_ARRAY: {
      return {
        ...state,
        audioArray: action.payload,
      };
    }

    case SET_IS_PLAYING: {
      return {
        ...state,
        isPlaying: action.payload,
      };
    }

    case SET_IS_PAUSE: {
      return {
        ...state,
        isPause: action.payload,
      };
    }

    default:
      return state;
  }
};

export default musicPlayerReducer;
