import { TracksDatum } from "./SelectedAlbum";

export interface MusicPlayerType {
  currentTrackIndex: number;
  currentTrack: TracksDatum;
  audioArray: HTMLAudioElement[];
  isPlaying: boolean;
  isPause: boolean;
}
