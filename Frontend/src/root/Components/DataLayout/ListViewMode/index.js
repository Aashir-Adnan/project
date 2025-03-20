import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import CardViewIcon from "@mui/icons-material/ViewModule"; // Example icon for "Card" view

const ListViewDropdown = ({
  viewMode = "Table",
  setListView,
  iconColor = "white",
  presentation = [],
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedView, setSelectedView] = useState(viewMode); // Normalize initial viewMode
  const open = Boolean(anchorEl);

  const handleViewClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleViewClose = () => {
    setAnchorEl(null);
  };

  const handleViewChange = (view) => {
    const normalizedView = view;
    setSelectedView(normalizedView);
    setListView(normalizedView);
    handleViewClose();
  };

  const renderSelectedIcon = () => {
    switch (selectedView) {
      case "Grid":
        return <GridViewIcon style={{ color: iconColor }} />;
      case "Table":
        return <ViewListIcon style={{ color: iconColor }} />;
      case "Cell":
        return <ViewStreamIcon style={{ color: iconColor }} />;
      case "Card":
        return <CardViewIcon style={{ color: iconColor }} />;
      default:
        return <GridViewIcon style={{ color: iconColor }} />;
    }
  };

  const renderViewIcon = (view) => {
    switch (view) {
      case "Grid":
        return <GridViewIcon style={{ marginRight: 8 }} />;
      case "Table":
        return <ViewListIcon style={{ marginRight: 8 }} />;
      case "Cell":
        return <ViewStreamIcon style={{ marginRight: 8 }} />;
      case "Card":
        return <CardViewIcon style={{ marginRight: 8 }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <IconButton onClick={handleViewClick}>{renderSelectedIcon()}</IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleViewClose}
        TransitionComponent={Fade}
      >
        {presentation.map((view) => {
          const normalizedView = view;
          const icon = renderViewIcon(normalizedView);
          if (!icon) return null; // Skip unimplemented views

          return (
            <MenuItem
              key={normalizedView}
              onClick={() => handleViewChange(normalizedView)}
            >
              {icon}
              {view.charAt(0).toUpperCase() + view.slice(1)} View
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ListViewDropdown;
