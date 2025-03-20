import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SubMenu.module.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const SidebarLabel = styled("span")(({ theme }) => ({
  position: "relative",
  top: "-3px",
}));

const SubMenu = ({ item, onItemClick }) => {
  const [subnav, setSubnav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to get current path

  // Handle click for both main items and submenu items
  const handleClick = (item) => {
    if (item) {
      onItemClick(item);
      navigate(item); // Use path passed into the function
    }
  };
  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <div
        onClick={() => handleClick(item.path)} // Use item.path for main items
        className={`${styles.sidebarLink} ${
          window.location.pathname === item.path ? styles.sidebarLinkActive : ""
        }`}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {item.icon &&
            React.cloneElement(item.icon, {
              fontSize: "large",
              sx: { color: item?.icon?.props?.sx?.color ?? "" },
            })}
          <SidebarLabel className="ml-5 mt-2">{item.title}</SidebarLabel>
        </div>
        {item.subNav && item.subNav.length > 0 && (
          <div onClick={showSubnav}>
            {subnav ? <ExpandLess /> : <ExpandMore />}
          </div>
        )}
      </div>

      {/* Render subnav items if they exist and subnav is open */}
      {subnav &&
        item.subNav &&
        item.subNav.map((subItem, index) => (
          <div
            key={index}
            onClick={() => handleClick(subItem.path)} // Use subItem.path for submenu items
            className={`${styles.sidebarLink2} ${
              window.location.pathname === subItem.path
                ? styles.sidebarLinkActive2
                : ""
            }`}
          >
            {subItem.icon}
            <span className={styles.subNavTitle}>{subItem.title}</span>
          </div>
        ))}
    </div>
  );
};

export default SubMenu;
