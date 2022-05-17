import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { WatchLaterContext } from "../contexts/WatchLaterContext";

const NavbarList = () => {
  const { videosList } = useContext(WatchLaterContext);

  return (
    <ul className="navbar-paths">
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/"
        >
          <Button>Home</Button>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/trends"
        >
          <Button>Explore Trends</Button>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/library"
        >
          <Button>Video Library</Button>
        </NavLink>
      </li>
      <li className="badge-wrapper">
        <Badge badgeContent={videosList.length} color="secondary">
          <VideoLibraryIcon color="action" />
        </Badge>
      </li>
    </ul>
  );
};

export default NavbarList;
