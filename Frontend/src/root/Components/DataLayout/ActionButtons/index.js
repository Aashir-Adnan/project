import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import { MoreHoriz } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import DefaultIcon from "@mui/icons-material/Help"; // Default fallback icon
import { getIconComponent } from "../constants/iconsMap";

// Default color mapping
const colorMapping = {
  Edit: "blue",
  Delete: "red",
  View: "grey",
};

export default function ActionButtons({
  color,
  actions,
  displayMode,
  onAction,
}) {
  const [showActions, setShowActions] = useState(false);
  const [iconComponents, setIconComponents] = useState({});
  const containerRef = useRef(null);

  const handleToggleActions = () => {
    setShowActions((prev) => !prev);
  };

  const handleAction = (action, index) => {
    if (onAction) {
      onAction(action, index);
    }
  };

  // Close action buttons when clicking outside the container
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowActions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch the icons when the component is mounted
  useEffect(() => {
    const fetchIcons = async () => {
      const icons = {};
      if(actions.length>0){
      for (const action of actions) {
        icons[action.name] = getIconComponent(action.name);
      }
      setIconComponents(icons);
    }
    };
    fetchIcons();
  }, [actions]);

  return (
    <div ref={containerRef}>
      <Grid container justifyContent="center" alignItems="center">
        {displayMode === "table" ? (
          <Grid container item xs={12} spacing={1} justifyContent="center">
            {actions.map((action, index) => {
              const IconComponent = iconComponents[action?.name] || DefaultIcon;
              const iconColor =
                colorMapping[action?.name] || action?.color || "grey"; // Default color if no mapping is found.
              return (
                <Grid item key={index}>
                  <IconButton onClick={() => handleAction(action, index)}>
                    <IconComponent style={{ color: iconColor }} />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        ) : !showActions ? (
          <Grow in={!showActions} timeout={500}>
            <IconButton aria-label="more" onClick={handleToggleActions}>
              <MoreHoriz sx={{ color: color }} />
            </IconButton>
          </Grow>
        ) : (
          <Grid container item xs={12} spacing={1} justifyContent="flex-end">
            {actions.map((action, index) => {
              const IconComponent = iconComponents[action?.name] || DefaultIcon;
              return (
                <Grid item key={index}>
                  <Grow
                    in={showActions}
                    timeout={1000}
                    style={{ transformOrigin: "right center" }}
                  >
                    <Tooltip title={action?.name} placement="top">
                      <IconButton
                        aria-label={action?.name}
                        size="small"
                        onClick={() => handleAction(action, index)}
                        sx={{
                          background: "#ffffff",
                          ml: "5px",
                        }}
                      >
                        <IconComponent
                          style={{ color: action?.color || "black" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Grow>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Grid>
    </div>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import IconButton from "@mui/material/IconButton";
// import Grid from "@mui/material/Grid";
// import Grow from "@mui/material/Grow";
// import { MoreHoriz } from "@mui/icons-material";
// import { Tooltip } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// const iconMapping = {
//   Edit: EditIcon,
//   Delete: DeleteIcon,
//   View: VisibilityIcon,
// };

// export default function ActionButtons({
//   color,
//   actions,
//   displayMode,
//   onAction,
// }) {
//   const [showActions, setShowActions] = useState(false);
//   const containerRef = useRef(null);

//   // Toggle between showing the action buttons and the three dots
//   const handleToggleActions = () => {
//     setShowActions((prev) => !prev);
//   };
//   const handleAction = (action, index) => {
//     onAction(action, index);
//   };

//   // Close action buttons when clicking outside the container
//   const handleClickOutside = (event) => {
//     if (containerRef.current && !containerRef.current.contains(event.target)) {
//       setShowActions(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <Grid container justifyContent="center" alignItems="center">
//         {displayMode === "table" ? (
//           <Grid container item xs={12} spacing={1} justifyContent="center">
//             {actions.map((action, index) => (
//               <Grid item key={index}>
//                 <IconButton onClick={() => handleAction(action, index)}>
//                   {(() => {
//                     const IconComponent = iconMapping[action?.name];
//                     const colorMapping = {
//                       Edit: "blue",
//                       Delete: "red",
//                       View: "grey",
//                     };
//                     const iconColor = colorMapping[action?.name] || "black"; // Default color if no mapping is found.
//                     return IconComponent ? (
//                       <IconComponent style={{ color: iconColor }} />
//                     ) : null;
//                   })()}
//                 </IconButton>
//               </Grid>
//             ))}
//           </Grid>
//         ) : // Display three dots and toggle actions
//         !showActions ? (
//           <Grow in={!showActions} timeout={500}>
//             <IconButton aria-label="more" onClick={handleToggleActions}>
//               <MoreHoriz sx={{ color: color }} />
//             </IconButton>
//           </Grow>
//         ) : (
//           <Grid container item xs={12} spacing={1} justifyContent="flex-end">
//             {actions.map((icon, index) => (
//               <Grid item key={index}>
//                 <Grow
//                   in={showActions}
//                   timeout={1000}
//                   style={{ transformOrigin: "right center" }}
//                 >
//                   <Tooltip title={icon?.name} placement="top">
//                     <IconButton
//                       aria-label={icon?.name}
//                       size="small"
//                       color="danger"
//                       className="danger"
//                       sx={{
//                         background: "#ffffff",
//                         ml: "5px",
//                       }}
//                     >
//                       {icon?.options?.icon(icon?.options?.backgroundColor)}
//                     </IconButton>
//                   </Tooltip>
//                 </Grow>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Grid>
//     </div>
//   );
// }
