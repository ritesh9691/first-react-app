import Video from "./components/video.js";
import "./App.css";
import videos from "./data/data.js";
import PlayButton from "./components/playbutton.js";
import "./components/playbutton.css";
import AddVideo from "./components/addVideo.js";


function App() {
  console.log("app render");
  return (
    <>
     <AddVideo/>
      <div className="App">
        {/* <h1>YouTube </h1> */}
        {videos.map((v) => (
          <Video
            key={v.id}
            id={v.id}
            channel={v.channel}
            views={v.views}
            time={v.time}
            verify={v.verify}
            title={v.title}
          >
            <div style={{ clear: "both" }}>
              <PlayButton
                onPlay={() => console.log("started playing")}
                onPuase={() => console.log("Paused")}
              >
                Play
              </PlayButton>
            </div>
          </Video>
        ))}
      </div>
     
    </>
  );
}
export default App;
