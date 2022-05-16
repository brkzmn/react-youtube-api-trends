import React from "react";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <header className="navbar">
      <FaYoutube className="logo" />
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
    </header>

    // <div>NAVBAR</div>
  );
};

export default Navbar;
