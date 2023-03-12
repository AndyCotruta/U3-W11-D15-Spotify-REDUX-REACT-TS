import { TracksDatum } from "./SelectedAlbum";

export interface MusicPlayerType {
  currentTrackIndex: number;
  currentTrack: TracksDatum | null;
  audioArray: HTMLAudioElement[];
  isPlaying: boolean;
  isPause: boolean;
}
