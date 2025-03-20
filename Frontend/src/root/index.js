import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "./Components/LeftSidebar/index";
import TopNavbar from "./Components/TopNavbar/index";
import Login from "./Pages/General/Login/Page";
import Settings from "./Pages/General/Settings/settings/account";
import ErrorPage from "./Pages/General/404";
import { data, config, appearance } from "./Utils/Props/sidebarConfig";
import LoadingOverlay from "./Components/Loading/LoadingOverLay";
import CRUDS from "./Pages/CRUDS/index";
import { Admin_Dashboard, IT_Dashboard } from "./Pages/Dashboards/dashboards";

const Components = () => {
  const theme = useTheme();
  const [isSidebarActive, setIsSidebarActive] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const mainData = useSelector((state) => state.main);
  const navigate = useNavigate();
  const { userSelectedRole, currentUser, isLoading } = mainData;
  const pathSegments = location.pathname.split("/");
  const firstPathSegment = pathSegments[1];
  const lastPathSegment = pathSegments[pathSegments.length - 1].split("&");
  useEffect(() => {
    if (!currentUser) {
      navigate("/error");
    }
  }, [currentUser, navigate]);

  const renderComponent = () => {
    if (isLoading) {
      return <LoadingOverlay isLoading={isLoading} />;
    }
    switch (firstPathSegment) {
      case "dashboard":
      case "login":
        if (userSelectedRole?.role_name === "Admin") return <Admin_Dashboard />;
        else if (userSelectedRole?.role_name === "It Operator")
          return <IT_Dashboard />;
        else return <div>Dashboard</div>;
      // case "user-permissions":
      // case "user-managements":
      // case "designation-heirarchy":
      // case "templates":
      // case "taskflows":
      // case "logs":
      case "404" :
        return <ErrorPage></ErrorPage>
      case "profile":
        return <Settings selectedComponent={lastPathSegment[0]} />;
      default:
        return <CRUDS selectedComponent={lastPathSegment[0]} />;
    }
  };
  const toogleActive = () => {
    setIsSidebarActive((prev) => {
      const newState = !prev;
      config.viewMode.isOpen = newState;
      return newState;
    });
  };

  return (
    <Grid
      container
      style={{
        paddingLeft: isMobile ? 10 : isSidebarActive ? 0 : 50,
        paddingRight: isMobile ? 10 : isSidebarActive ? 0 : 50,
        margin: 0,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        md={isSidebarActive ? 2 : 0}
        lg={isSidebarActive ? 2 : 0}
        style={{
          display: isSidebarActive ? "block" : "none",
          zIndex: isMobile ? 20 : "auto",
          position: isMobile ? "fixed" : "static",
        }}
      >
        <Sidebar
          data={data}
          config={config}
          appearance={appearance}
          toogleActive={toogleActive}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={isSidebarActive ? 9 : 12}
        lg={isSidebarActive ? 9 : 12}
        style={{
          marginLeft: isSidebarActive && !isMobile ? "300px" : "0",
        }}
      >
        <TopNavbar toogleActive={toogleActive} />
        <Grid container style={{ width: "100%" }}>
          <Grid item xs={12}>
            {renderComponent()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/*" element={<Components />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

const LoginWrapper = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return <Login onLogin={handleLogin} />;
};
export default App;
// const GroupCrudsTest = () => {
//   return (
//     <Grid
//       container
//       sx={{
//           width: '100%',
//           height: '100%',
//           overflow: 'auto',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: '2rem'
//       }}
//     >
//       <Grid item xs={9}>
//         <GroupCruds data={groupCrudProps.data} config={groupCrudProps.config} appearance={groupCrudProps.appearance}/>
//       </Grid>
//     </Grid>
//   );
// };

// export default GroupCrudsTest;

// const formTestDashboard = () => {
//   return (
//     <Grid
//       container
//       sx={{
//           width: '100%',
//           height: '100%',
//           overflow: 'auto',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: '2rem'
//       }}
//     >
//       <Grid item xs={9}>
//         <FormDashboard></FormDashboard>
//       </Grid>
//     </Grid>
//   );
// };

// export default formTestDashboard;
