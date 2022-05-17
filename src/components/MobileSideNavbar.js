import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarList from "./NavbarList";

const MobileSideNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="sidebar-container">
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <NavbarList />
      </Drawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default MobileSideNavbar;
