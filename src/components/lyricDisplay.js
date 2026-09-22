import { player } from "../textalive.js";

export function initializeLyrics() {

  const lyricsDiv =
    document.getElementById("lyrics");

  player.addListener({

    onTimeUpdate(position) {

      if (!player.video) return;

      // For character-level lyrics, you can find the current character like this:
      //const char = player.video.findChar(position);
      //lyricsDiv.textContent = char ? char.text : "";

      // For word-level lyrics, you can find the current line like this:
      const word = player.video.findWord(position);
      lyricsDiv.textContent = word ? word.text : "";

      // For line-level lyrics, you can find the current line like this:
      //const phrase = player.video.findPhrase(position);
      //lyricsDiv.textContent = phrase ? phrase.text : "";

    }
  });
}