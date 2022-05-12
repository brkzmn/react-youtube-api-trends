import { createContext, useState } from "react";

export const WatchLaterContext = createContext();

export const WatchLaterProvider = (props) => {
  const [videosList, setVideosList] = useState([]);

  const setWatchLaterVideosIds = (id) => {
    let ids = [...videosList];

    if (!ids.includes(id)) {
      ids.push(id);
      setVideosList(ids);
      return;
    }

    if (ids.includes(id)) {
      ids = ids.filter((addedId) => {
        return addedId !== id;
      });
      setVideosList(ids);
      return;
    }

    return;
  };

  const watchLater = {
    videosList,
    setVideosList,
    setWatchLaterVideosIds,
  };

  return (
    <WatchLaterContext.Provider value={watchLater}>
      {props.children}
    </WatchLaterContext.Provider>
  );
};
