import React from "react";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import MobileSideNavbar from "./MobileSideNavbar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const isMatch = useMediaQuery("(max-width:600px)");
  console.log(isMatch, "mathess");
  return (
    // <header className="navbar">
    //   <FaYoutube className="logo" />
    //   <ul className="navbar-paths">
    //     <li>
    //       <NavLink
    //         className={(navData) => (navData.isActive ? "active" : "")}
    //         to="/"
    //       >
    //         <Button>Home</Button>
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={(navData) => (navData.isActive ? "active" : "")}
    //         to="/trends"
    //       >
    //         <Button>Explore Trends</Button>
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={(navData) => (navData.isActive ? "active" : "")}
    //         to="/library"
    //       >
    //         <Button>Video Library</Button>
    //       </NavLink>
    //     </li>
    //   </ul>
    // </header>
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
          <span>YOUTUBE API</span>
        </div>
        {isMatch ? <MobileSideNavbar /> : <NavbarList />}
      </AppBar>
    </header>
  );
};

export default Navbar;
