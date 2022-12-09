import { MainAlbum } from "./Album";

export interface SearchType {
  search: {
    search: MainAlbum[];
    browseAll: MainAlbum[];
  };
}
