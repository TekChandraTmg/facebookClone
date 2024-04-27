import React from "react";
import "./SideBar.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import Storefront from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const SideBar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        title="Tek Chandra"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="Posts" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Reels" />
    </div>
  );
};

export default SideBar;
