import { MainAlbum } from "./Album";

export interface SearchReducer {
  searchResults: MainAlbum[];
  browseAll: MainAlbum[];
}
