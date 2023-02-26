import { MainAlbum } from "./Album";

export interface SearchType {
  search: {
    searchResults: MainAlbum[];
    browseAll: MainAlbum[];
  };
}
