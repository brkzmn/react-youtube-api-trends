import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { SearchBarContext } from "../contexts/SearchBarContext";
import TrendVideoDetailsCard from "./TrendVideoDetailsCard";
import LinearProgress from "@mui/material/LinearProgress";
import ErrorIcon from "@mui/icons-material/Error";

const TrendVideos = () => {
  const { countryCode, resultsNumber } = useContext(SearchBarContext);

  const url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${resultsNumber}&regionCode=${countryCode}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  const { data, isLoading, error } = useFetch(url);

  return (
    <div className="trend-videos-container">
      {isLoading === true && <LinearProgress color="secondary" />}
      {error !== null && error === "HTTP Error" && (
        <div className="not-found">
          <ErrorIcon /> Currently trending videos in this country are not
          available through our application.
        </div>
      )}
      {error !== null && error !== "HTTP Error" && (
        <div>Something went wrong</div>
      )}
      {data !== null &&
        data.items.map((video, index) => {
          return <TrendVideoDetailsCard key={video.id} video={video} />;
        })}
    </div>
  );
};

export default TrendVideos;
