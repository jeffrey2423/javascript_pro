import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() {}

  public run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;
