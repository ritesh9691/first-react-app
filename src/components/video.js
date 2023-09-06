import "./video.css";

function Video({ title, channel, views, time, verify, id, children }) {
  console.log("video render");
  return (
    <div className="thumbnail hover:bg-gray-700">
      <img
        src={`https://picsum.photos/id/${id}/300/150`}
        alt="placeholder image"
      />
      <h2>{title}</h2>
      <div>
        <h3>{channel}</h3>
        {verify ? <span>☑</span> : <span></span>}
      </div>
      <div>
        <span>{views} views</span>
        <span>{time}</span>
      </div>
      <div> {children}</div>
    </div>
  );
}

export default Video;
