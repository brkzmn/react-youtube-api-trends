import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import TrendSearchBar from "./TrendSearchBar";
import { SearchBarContext } from "../contexts/SearchBarContext";

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
  if (error) {
    return (
      <div>
        <p>this is error message::</p>
        <div>{error} </div>;
      </div>
    );
  }

  return (
    <div>
      {isLoading === true && <div>loading...</div>}
      {error !== null && <div>{error} </div>}
      {data !== null &&
        data.items.map((video) => {
          return (
            <div style={{ border: "1px solid black" }}>
              <div>{video.id}</div>
              <div>{video.snippet.title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default TrendVideos;
