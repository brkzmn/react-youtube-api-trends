import React, { useContext } from "react";
import { WatchLaterContext } from "../contexts/WatchLaterContext";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const WatchLaterButton = ({ id }) => {
  const { videosList, setWatchLaterVideosIds } = useContext(WatchLaterContext);

  const isInList = videosList.includes(id);

  return (
    <div
      className="watch-later-btn-wrapper"
      onClick={() => {
        setWatchLaterVideosIds(id);
      }}
    >
      watch later
      {!isInList ? <AccessTimeIcon /> : <CheckCircleOutlineIcon />}
    </div>
  );
};

export default WatchLaterButton;
