import { AnyAction } from "redux";
import { ADD_BROWSE_ALL } from "../actions/actions";
import { SearchType } from "../types/SearchType";

const initialState: SearchType = {
  search: { search: [], browseAll: [] },
};

const searchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_BROWSE_ALL: {
      return {
        ...state,
        browseAll: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
