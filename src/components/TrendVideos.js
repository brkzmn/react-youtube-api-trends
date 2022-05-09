import React from "react";
import useFetch from "../hooks/useFetch";
import TrendSearchBar from "./TrendSearchBar";

const TrendVideos = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:5000/youtube/trends/tr"
  );

  return (
    <div>
      {isLoading === true && <div>loading...</div>}
      {error !== null && <div>{error}</div>}
      {data !== null &&
        data.items.map((video) => {
          return (
            <div style={{ border: "1px solid black" }}>
              <div>{video.id}</div>
              <div>{video.snippet.title}</div>
            </div>
          );
        })}
      <TrendSearchBar />
    </div>
  );
};

export default TrendVideos;
