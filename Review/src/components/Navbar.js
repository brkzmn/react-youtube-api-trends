import React from "react";
import { FaYoutube } from "react-icons/fa";
import AppBar from "@mui/material/AppBar";
import MobileSideNavbar from "./MobileSideNavbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const isMatch = useMediaQuery("(max-width:600px)");

  return (
    <header>
      <AppBar
        className="navbar"
        sx={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <div className="logo-wrapper">
          <FaYoutube />
          <span className="logo-text">YOUTUBE API</span>
        </div>
        {isMatch ? <MobileSideNavbar /> : <NavbarList />}
      </AppBar>
    </header>
  );
};

export default Navbar;
