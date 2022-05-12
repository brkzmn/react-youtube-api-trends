import React, { useContext } from "react";
import { WatchLaterContext } from "../contexts/WatchLaterContext";

const WatchLaterButton = ({ id }) => {
  const { videosList, setVideosList, setWatchLaterVideosIds } =
    useContext(WatchLaterContext);
  console.log(videosList, "video list");

  const isInList = videosList.includes(id);

  return (
    <div
      className="watch-later-btn-wrapper"
      onClick={() => {
        setWatchLaterVideosIds(id);
      }}
    >
      WatchLaterButton
      {!isInList ? " add" : " added"}
    </div>
  );
};

export default WatchLaterButton;
