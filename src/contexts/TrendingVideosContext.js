import { createContext, useState } from "react";

export const TrendingVideosContext = createContext();

export const TrendingVideosProvider = (props) => {
  const [videosList, setVideosList] = useState(null);

  const trendingVideos = {
    videosList,
    setVideosList,
  };

  return (
    <TrendingVideosContext.Provider value={trendingVideos}>
      {props.children}
    </TrendingVideosContext.Provider>
  );
};
