import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../assets/images/ITU - name.png";

const SidebarNav = styled("nav")(({ appearance, isOpen }) => ({
  background: appearance.background || "#fff",
  width: isOpen ? appearance.width || "300px" : "0px",
  padding: isOpen ? "30px 10px" : "0px",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  transition: "width 350ms ease, padding 350ms ease, visibility 0ms 350ms, opacity 350ms ease", // Transition for visibility and opacity along with width/padding
  zIndex: "10",
  overflowY: "auto",
  visibility: isOpen ? "visible" : "hidden",
  boxShadow: isOpen
    ? appearance.boxShadow || "0px 4px 20px rgba(47, 143, 232, 0.07)"
    : "none",
    opacity: isOpen ? "1" : "0", // Smooth fade-in and fade-out effect
}));

const SidebarWrap = styled("div")(() => ({
  width: "100%",
}));

const Overlay = styled("div")(({ isOpen }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  visibility: isOpen ? "visible" : "hidden",
  opacity: isOpen ? "1" : "0",
  transition: "opacity 0.3s ease, visibility 0ms 350ms", // Visibility delay to ensure opacity is handled first
  zIndex: "9",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: "11",
  color: theme.palette.text.primary,
}));

const Sidebar = ({ data, config, appearance, toogleActive }) => {
  const mainData = useSelector((state) => state.main || {});
  const { currentUserPermissions } = mainData;
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Adjust the breakpoint as needed

  const handleItemClick = (componentName, ComponentId) => {
  };

  const toggleOpen = (val = null) => {
    const newState = val !== null ? val : !config.viewMode.isOpen;
    config.viewMode.isOpen = newState; // Update config directly
    toogleActive?.(newState); // Notify parent component
  };

  useEffect(() => {
    if (!isMobile) {
      config.viewMode.isOpen = true; // Open sidebar on larger screens
      toogleActive?.(true); // Notify parent component
    } else {
    }
  }, [isMobile, config]);

  const checkPermission = (item) => {
    const hasPermission =
    item.permission?Array.isArray(currentUserPermissions) && Array.isArray(item.permission)
        ? item.permission.some((perm) => currentUserPermissions.includes(perm))
        : false:true;

    if (hasPermission) return true;

    if (item.subNav) {
      return item.subNav.some((subItem) =>
        subItem.permission?Array.isArray(currentUserPermissions) && Array.isArray(subItem.permission)
          ? subItem.permission.some((perm) => currentUserPermissions.includes(perm))
          : false:true
      );
    }

    return false;
  };

  const filteredData = Array.isArray(data.features.sidebarItems)
    ? data.features.sidebarItems
        .filter((item) => checkPermission(item))
        .map((item) => ({
          ...item,
          subNav: item.subNav
            ? item.subNav.filter((subItem) =>
              subItem?.permission?Array.isArray(currentUserPermissions) && Array.isArray(subItem.permission)
                  ? subItem.permission.some((perm) => currentUserPermissions.includes(perm))
                  : false:true
              )
            : [],
        }))
    : [];

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay for mobile view */}
      {isMobile && <Overlay isOpen={config.viewMode.isOpen} onClick={() => toggleOpen(false)} />}
      
      {/* Sidebar */}
      <SidebarNav appearance={appearance} isOpen={config.viewMode.isOpen}>
        {/* Close Button (Mobile Only) */}
        {/* {isMobile && (
          <CloseButton onClick={() => toggleOpen(false)}>
            <CloseIcon />
          </CloseButton>
        )} */}
        
        <SidebarWrap>
          {/* Logo */}
          <Box
            sx={{
              mb: "20px",
              px: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to={"/"}>
              <img
                src={data?.features?.logo || logo}
                alt="Logo"
                style={{
                  marginLeft: "40px",
                  width: appearance.logoWidth || "180px",
                  height: appearance.logoHeight || "100px",
                }}
              />
            </Link>
          </Box>

          {/* Sidebar Items */}
          {filteredData?.map((item, index) => (
            <SubMenu
              key={index}
              item={item}
              onItemClick={handleItemClick}
              isActive={isActiveRoute(item.path)}
            />
          ))}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
