import { Artist, MainAlbum } from "./Album";
import { SelectedAlbum, TracksDatum } from "./SelectedAlbum";

export interface YourLibraryType {
  tab: String;
  playlists: SelectedAlbum[];
  podcasts: MainAlbum[];
  artists: Artist[];
  albums: SelectedAlbum[];
  songs: TracksDatum[];
  songsIds: number[];
}
