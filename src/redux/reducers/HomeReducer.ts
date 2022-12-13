import { AnyAction } from "redux";
import {
  ADD_GOOD_MORNING,
  ADD_RECENTLY_PLAYED,
  ADD_SHOWS_TO_TRY,
} from "../actions/actions";
import { HomeType } from "../types/HomeType";

const initialState: HomeType = {
  home: {
    goodMorning: [],
    recentlyPlayed: [],
    showsToTry: [],
  },
};

const homeReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_GOOD_MORNING: {
      return {
        ...state,
        goodMorning: action.payload,
      };
    }

    case ADD_RECENTLY_PLAYED: {
      return {
        ...state,
        recentlyPlayed: action.payload,
      };
    }

    case ADD_SHOWS_TO_TRY: {
      return {
        ...state,
        showsToTry: action.payload,
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
