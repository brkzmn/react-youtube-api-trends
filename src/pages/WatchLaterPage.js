import React, { useState, useContext } from "react";

import Navbar from "../components/Navbar";
import { WatchLaterContext } from "../contexts/WatchLaterContext";
import YoutubeFrame from "../components/YoutubeFrame";

const WatchLaterPage = () => {
  const { videosList, setVideosList, setWatchLaterVideosIds } =
    useContext(WatchLaterContext);
  console.log(videosList);

  return (
    <div className="watch-later-page-container">
      <Navbar />
      <div className="container">
        <h2>Your Video Library</h2>
        <h3>You can find here your saved videos to watch later</h3>
        {videosList.length === 0 && (
          <div>You haven't chosen any videos to watch later yet!</div>
        )}
        <div className="video-frames-container">
          {videosList.length !== 0 &&
            videosList.map((videoId) => {
              return <YoutubeFrame id={videoId} />;
            })}
        </div>
      </div>
    </div>
  );
  //     <div>
  //       <div className="trend-videos-container">
  //         {isLoading === true && <LinearProgress color="secondary" />}
  //         {error !== null && error === "HTTP Error" && (
  //           <div className="not-found">
  //             <ErrorIcon /> Currently trending videos in this country are not
  //             available through our application.
  //           </div>
  //         )}
  //         {error !== null && error !== "HTTP Error" && (
  //           <div>Something went wrong</div>
  //         )}
  //         {data !== null &&
  //           data.items.map((video) => {
  //             return <VideoCard video={video} />;
  //           })}
  //       </div>
  //     </div>
  //   );
};

export default WatchLaterPage;
