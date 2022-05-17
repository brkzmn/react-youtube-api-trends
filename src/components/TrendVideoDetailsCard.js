import React from "react";
import { GrChannel } from "react-icons/gr";
import { WiTime2 } from "react-icons/wi";
import WatchLaterButton from "./WatchLaterButton";
import { parse } from "tinyduration";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const TrendVideoDetailsCard = ({ video }) => {
  const durationObj = parse(video.contentDetails.duration);
  let videoDuration;

  if (durationObj.hours === undefined) {
    videoDuration = `${durationObj.minutes}:${durationObj.seconds}`;
  } else {
    videoDuration = `${durationObj.hours}:${durationObj.minutes}:${durationObj.seconds}`;
  }

  return (
    <div className="video-card-wrapper">
      <div className="video-img-wrapper">
        <div className="play-icon-wrapper">
          <Link to={`/watch-video/${video.id}`}>
            <PlayCircleIcon />
          </Link>
        </div>

        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <span className="video-duration">{videoDuration}</span>
      </div>

      <div className="video-details-wrapper">
        <WatchLaterButton id={video.id} />
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

export default TrendVideoDetailsCard;
