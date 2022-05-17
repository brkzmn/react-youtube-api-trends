import React from "react";
import useFetch from "../hooks/useFetch";
import WatchLaterButton from "./WatchLaterButton";

const WatchLaterListElement = ({ videoId, setActiveVideoId }) => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  const { data, error } = useFetch(url);
  return (
    <div className="watch-later-list-element">
      {error !== null && error !== "HTTP Error" && (
        <div>Something went wrong</div>
      )}

      {data !== null && (
        <div
          className="watch-later-list-element-wrapper"
          onClick={() => {
            setActiveVideoId(videoId);
          }}
        >
          <WatchLaterButton id={videoId} />
          <span className="watch-later-list-element-title">
            {data.items[0].snippet.title}
          </span>
          <img
            className="watch-later-list-element-image"
            src={data.items[0].snippet.thumbnails.medium.url}
            alt={data.items[0].snippet.title}
          />
        </div>
      )}
    </div>
  );
};

export default WatchLaterListElement;
