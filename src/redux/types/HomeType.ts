import { MainAlbum } from "./Album";

export interface HomeType {
  home: {
    goodMorning: MainAlbum[];
    recentlyPlayed: MainAlbum[];
    showsToTry: MainAlbum[];
  };
}
