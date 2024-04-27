import React from "react";
import "./SidebarRow.css";
import SideBar from "../SideBar/SideBar";
import { Avatar } from "@mui/material";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
