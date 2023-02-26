import { AnyAction } from "redux";
import { ADD_BROWSE_ALL, ADD_SEARCH_RESULTS } from "../actions/actions";
import { SearchReducer } from "../types/SearchType";

const initialState: SearchReducer = {
  searchResults: [],
  browseAll: [],
};

const searchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_BROWSE_ALL: {
      return {
        ...state,

        browseAll: action.payload,
      };
    }

    case ADD_SEARCH_RESULTS: {
      return {
        ...state,

        searchResults: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
