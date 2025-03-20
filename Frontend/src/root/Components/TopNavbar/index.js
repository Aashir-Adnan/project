import * as React from "react";
import { AppBar, Toolbar, IconButton, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import SearchForm from "./SearchForm";
import Email from "./Email";
import Notification from "./Notification";
import Profile from "./Profile";
import Tooltip from "@mui/material/Tooltip";
import CurrentDate from "./CurrentDate";
import MenuIcon from "@mui/icons-material/Menu"; // Material-UI Icon

const TopNavbar = ({ toogleActive }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Adjust the breakpoint as needed

  return (
    <>
      <div className="topNavbarDark">
        <AppBar
          color="inherit"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
            py: "6px",
            mb: "30px",
            position: "sticky",
            zIndex: isMobile ? 10 : "auto", // Lower zIndex in mobile view
          }}
          className="top-navbar-for-dark"
        >
          <Toolbar>
            <Tooltip title="Hide/Show" arrow>
              <IconButton size="small" edge="start" color="inherit" onClick={toogleActive}>
                <MenuIcon />
              </IconButton>
            </Tooltip>

            {/* Search form */}
            <SearchForm />

            <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

            <Stack direction="row" spacing={2}>
              {/* CurrentDate */}
              <CurrentDate />

              {/* Notification */}
              <Email />

              {/* Notification */}
              <Notification />

              {/* Profile */}
              <Profile />
            </Stack>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default TopNavbar;
