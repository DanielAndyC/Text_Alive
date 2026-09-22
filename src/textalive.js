import { Player } from "textalive-app-api";

export const player = new Player({
  app: {
    token: "yjM9ohQuWT6LPPWW"
  }
});

export function loadSong() {

  player.addListener({

    onAppReady(app) {
      console.log("App ready");

      if (!app.managed) {
        player.createFromSongUrl(
          "https://www.youtube.com/watch?v=ygY2qObZv24" //Because You're Here - PinocchioP
          //"https://www.youtube.com/watch?v=8Zds1FvEtKw"
        );
      }
    },

    onVideoReady(video) {

      const songName =
        video?.data?.song?.name ?? "Unknown Song";

      const artistName =
        video?.data?.song?.artist?.name ??
        "Unknown Artist";

      document.getElementById("songInfo").innerHTML =
      `
        <h2>${songName}</h2>
        <p>${artistName}</p>
      `;
    },

    onTimerReady() {
      console.log("Timer ready");
    },

    onPlay() {
      console.log("Playing");
    },

    onPause() {
      console.log("Paused");
    },

    onError(e) {
      console.error("TextAlive Error:", e);
    }
  });
}