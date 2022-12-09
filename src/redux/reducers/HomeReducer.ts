import { Action } from "@remix-run/router";
import { AnyAction } from "redux";
import { ADD_GOOD_MORNING } from "../actions/actions";
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

    default:
      return state;
  }
};

export default homeReducer;
