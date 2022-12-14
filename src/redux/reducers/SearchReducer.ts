import { AnyAction } from "redux";
import { ADD_BROWSE_ALL, ADD_SEARCH_RESULTS } from "../actions/actions";
import { SearchType } from "../types/SearchType";

const initialState: SearchType = {
  search: { search: [], browseAll: [] },
};

const searchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_BROWSE_ALL: {
      return {
        ...state,
        ...state.search.search,
        browseAll: [...state.search.browseAll, action.payload],
      };
    }

    case ADD_SEARCH_RESULTS: {
      return {
        ...state,
        ...state.search.browseAll,
        search: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
