import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import TrendSearchBar from "./TrendSearchBar";
import { SearchBarContext } from "../contexts/SearchBarContext";
import TrendVideoDetailsCard from "./TrendVideoDetailsCard";
import LinearProgress from "@mui/material/LinearProgress";
import ErrorIcon from "@mui/icons-material/Error";
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=FJ&key=AIzaSyDaIgJHYSBYqwrZQjuqCSRn2epWcHvWTD4

const TrendVideos = () => {
  const {
    countryCode,
    setCountryCode,
    countryName,
    setCountryName,
    resultsNumber,
    setResultsNumber,
  } = useContext(SearchBarContext);

  const url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${resultsNumber}&regionCode=${countryCode}&key=AIzaSyDaIgJHYSBYqwrZQjuqCSRn2epWcHvWTD4`;

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
        data.items.map((video) => {
          return <TrendVideoDetailsCard video={video} />;
        })}
    </div>
  );
};

export default TrendVideos;
