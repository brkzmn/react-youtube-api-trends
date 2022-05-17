import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const NavbarList = () => {
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
    </ul>
  );
};

export default NavbarList;
