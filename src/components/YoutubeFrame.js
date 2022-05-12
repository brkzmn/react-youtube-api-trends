import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeFrame = ({ id }) => {
  return (
    <div className="video-frame-wrapper">
      {/* <YoutubeFrame id={videoId} /> */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeFrame;
