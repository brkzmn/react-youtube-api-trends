import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <FaYoutube className="logo" />
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/trends">
        <Button>Explore Trends</Button>
      </Link>
      <Link to="/library">
        <Button>Video Library</Button>
      </Link>
    </div>
  );
};

export default Navbar;
