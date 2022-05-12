import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeFrame = ({ id }) => {
  // const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // };

  //   const opts: YouTubeProps["opts"] = {
  //     height: "390",
  //     width: "640",
  //     playerVars: {
  //       // https://developers.google.com/youtube/player_parameters
  //       autoplay: 1,
  //     },
  //   };

  return (
    <div>
      <YouTube videoId={id} />
    </div>
  );
};

export default YoutubeFrame;
