import { MainAlbum } from "./Album";

export interface YourLibraryType {
  tab: String;
  playlists: MainAlbum[];
  podcasts: MainAlbum[];
  artists: MainAlbum[];
  albums: MainAlbum[];
}
