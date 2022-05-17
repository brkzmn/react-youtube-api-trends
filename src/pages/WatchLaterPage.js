import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { WatchLaterContext } from "../contexts/WatchLaterContext";
import YoutubeFrame from "../components/YoutubeFrame";
import WatchLaterListElement from "../components/WatchLaterListElement";
import Footer from "../components/Footer";

const WatchLaterPage = () => {
  const { videosList } = useContext(WatchLaterContext);
  const [activeVideoId, setActiveVideoId] = useState(videosList[0]);

  return (
    <div className="watch-later-page-container">
      <Navbar />
      <div className="container">
        <h2>Your Video Library</h2>
        <h3>You can find here your saved videos to watch later</h3>
        {videosList.length === 0 && (
          <div>You haven't chosen any videos to watch later yet!</div>
        )}
        {videosList.length !== 0 && (
          <div className="watch-later-list-player">
            <YoutubeFrame activeVideoId={activeVideoId} />
            <div className="watch-later-list">
              {videosList.length !== 0 &&
                videosList.map((videoId, index) => {
                  return (
                    <WatchLaterListElement
                      key={index}
                      videoId={videoId}
                      setActiveVideoId={setActiveVideoId}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WatchLaterPage;
