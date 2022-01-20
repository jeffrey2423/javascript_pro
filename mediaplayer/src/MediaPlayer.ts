class MediaPlayer {
  public media: HTMLMediaElement;
  private plugins: Array<any>;
  public container: HTMLElement;

  constructor(config: any) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins();
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  private initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";

    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private isVideoPlaying(video: HTMLMediaElement): boolean {
    return !!(
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
    );
  }

  public play() {
    this.media.play();
  }

  public pause() {
    this.media.pause();
  }

  public mute() {
    this.media.muted = true;
  }

  public unmute() {
    this.media.muted = false;
  }

  public togglePlay() {
    if (this.isVideoPlaying(this.media)) {
      this.pause();
    } else {
      this.play();
    }
  }

  public toggleMute() {
    if (this.media.muted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}

export default MediaPlayer;
