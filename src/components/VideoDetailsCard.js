import React, { useState } from "react";
import { GrChannel } from "react-icons/gr";
import { WiTime2 } from "react-icons/wi";
import WatchLaterButton from "./WatchLaterButton";
import { parse } from "tinyduration";

const VideoCard = ({ video }) => {
  console.log(video.contentDetails.duration);
  const durationObj = parse(video.contentDetails.duration);
  let videoDuration;

  if (durationObj.hours === undefined) {
    videoDuration = `${durationObj.minutes}:${durationObj.seconds}`;
  } else {
    videoDuration = `${durationObj.hours}:${durationObj.minutes}:${durationObj.seconds}`;
  }

  console.log(durationObj.hours);

  return (
    <div className="video-card-wrapper">
      <WatchLaterButton id={video.id} />
      <div className="video-img-wrapper">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <span className="video-duration">{videoDuration}</span>
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
