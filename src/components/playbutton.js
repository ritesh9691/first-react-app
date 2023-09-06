import { useState } from "react";

function PlayButton({ onPlay, onPuase }) {
  console.log("playbutton render");
//   let playing = false;
  const [playing, playstate] = useState(false);
  function HandleClick(e) {
    // to stop parent event to run on childs function events
    e.stopPropagation();
    if (playing) {
      onPuase();
    } else {
      onPlay();
    }
playstate(!playing);
//    playstate(playing=>playing = !playing);
  }
  return <button onClick={HandleClick}>{playing ? "Paused" : "Play"}</button>;
}
export default PlayButton;
