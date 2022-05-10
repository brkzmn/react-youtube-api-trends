import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card-wrapper">
      <div className="video-img-wrapper">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <span className="video-duration">{video.contentDetails.duration}</span>
      </div>

      <div className="video-details-wrapper">
        <h2>{video.snippet.title}</h2>
        <div className="video-details-info">
          <span className="channel-title">{video.snippet.channelTitle}</span>
          <span className="view-count">{video.statistics.viewCount}</span>
          <span className="publishing-time">{video.snippet.publishedAt}</span>
        </div>
        <div className="video-description">
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
