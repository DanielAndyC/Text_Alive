import { player } from "../textalive.js";

export function initializeControls() {

  document
    .getElementById("playBtn")
    .addEventListener("click", () => {

        if (!player.video) {
        console.log("Video not ready yet");
        return;
        }
        player.requestPlay();
    });

  document
    .getElementById("pauseBtn")
    .addEventListener("click", () => {
      if (!player.video) {
        console.log("Video not ready yet");
        return;
      }
      player.requestPause();
    });
}