import React from "react";
import WatchLaterButton from "./WatchLaterButton";

const YoutubeFrame = ({ activeVideoId }) => {
  return (
    <div className="video-frame-wrapper">
      {/* <WatchLaterButton id={id} /> */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${activeVideoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeFrame;
