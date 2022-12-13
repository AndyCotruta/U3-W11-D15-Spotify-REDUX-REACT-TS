import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import homeReducer from "../reducers/HomeReducer";
import searchReducer from "../reducers/SearchReducer";
import albumReducer from "../reducers/AlbumReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const bigReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
  album: albumReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
