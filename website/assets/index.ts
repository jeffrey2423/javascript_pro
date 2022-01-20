import MediaPlayer from "../../mediaplayer/src/MediaPlayer";
import AutoPlay from "../../mediaplayer/src/plugins/AutoPlay";
import AutoPause from "../../mediaplayer/src/plugins/AutoPause";
import Ads from "../../mediaplayer/src/plugins/Ads";

const video: HTMLMediaElement = document.querySelector("video");
const button: HTMLButtonElement = document.querySelector("button");
const muteButton: HTMLButtonElement = document.querySelector("#muteButton");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

button.onclick = () => {
  player.togglePlay();
};

muteButton.onclick = () => {
  player.toggleMute();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.error(error.message);
  });
}
