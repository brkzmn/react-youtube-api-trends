import React from "react";
import { GrChannel } from "react-icons/gr";
import { WiTime2 } from "react-icons/wi";
import WatchLaterButton from "./WatchLaterButton";

const VideoCard = ({ video }) => {
  console.log(video.id);
  return (
    <div className="video-card-wrapper">
      <div className="video-img-wrapper">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <span className="video-duration">{video.contentDetails.duration}</span>
        <WatchLaterButton id={video.id} />
      </div>

      <div className="video-details-wrapper">
        <h2>{video.snippet.title}</h2>
        <div className="video-details-info">
          <span className="channel-title">
            <GrChannel /> {video.snippet.channelTitle}
          </span>
          <span className="view-count">{video.statistics.viewCount} views</span>
          <span className="publishing-time">
            <WiTime2 /> {video.snippet.publishedAt}
          </span>
        </div>
        <div className="video-description">
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
