import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import homeReducer from "../reducers/HomeReducer";
import searchReducer from "../reducers/SearchReducer";
import albumReducer from "../reducers/AlbumReducer";
import yourLibraryReducer from "../reducers/YourLibraryReducer";
import musicPlayerReducer from "../reducers/MusicPlayerReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const bigReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
  album: albumReducer,
  yourLibrary: yourLibraryReducer,
  musicPlayer: musicPlayerReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
