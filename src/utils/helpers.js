export function formatTime(ms) {

  const seconds =
    Math.floor(ms / 1000);

  const min =
    Math.floor(seconds / 60);

  const sec =
    seconds % 60;

  return `${min}:${sec
    .toString()
    .padStart(2, "0")}`;
}