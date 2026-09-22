import "./style.css";

import { loadSong } from "./textalive.js";

import { initializeControls }
  from "./components/playerControls.js";

import { initializeLyrics }
  from "./components/lyricDisplay.js";

loadSong();

initializeControls();

initializeLyrics();

