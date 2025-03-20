import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import ActionButtons from "../../ActionButtons";
import Checkbox from "@mui/material/Checkbox";
import { HasPermission } from "../../constants/permissionChecker";
import {
  Avatar,
  AvatarGroup,
  Box,
  createTheme,
  getContrastRatio,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";

const GridCard = ({
  dataProp,
  member,
  configProp,
  appearanceProp,
  additionalProp,
  onRowAction,
  onUpdateRefreshData,
}) => {
  // Added userPermissions prop

  const { bulkActionArray, setbulkActionArray } = additionalProp?.bulkActions;
  const { currentUserPermissions } = useSelector((state) => state.main);
  const [filteredActions, setFilteredActions] = useState({});

  const [enableCheckBox, setEnableCheckBox] = useState(false);
  function adjustColor(color, percent) {
    // Color adjustment logic remains the same
    color = color.replace(/^#/, "");
    let r = parseInt(color.substring(0, 2), 16);
    let g = parseInt(color.substring(2, 4), 16);
    let b = parseInt(color.substring(4, 6), 16);
    r = Math.min(255, Math.max(0, Math.floor(r * (1 + percent / 100))));
    g = Math.min(255, Math.max(0, Math.floor(g * (1 + percent / 100))));
    b = Math.min(255, Math.max(0, Math.floor(b * (1 + percent / 100))));
    r = r.toString(16).padStart(2, "0");
    g = g.toString(16).padStart(2, "0");
    b = b.toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
  }

  useEffect(() => {
    // Create a timeout to delay the execution
    const timeout = setTimeout(() => {
      const actions = configProp?.features?.rowActions?.permission
        ? dataProp?.features?.rowActions?.actions?.filter((action) => 
              HasPermission(action.permission, currentUserPermissions)
          )
        : dataProp?.features?.rowActions?.actions;

      setFilteredActions(actions);
      // console.log("filteredActions", actions);
    }, 500); // Delay of 500ms

    // Cleanup the timeout on unmount or dependency change
    return () => clearTimeout(timeout);
  }, [dataProp?.features?.list?.apiUrl]);

  const buttonColor = appearanceProp?.grid?.button?.buttonColor || "#000";
  const buttonTextColor =
    appearanceProp?.grid?.button?.buttonTextColor ||
    getContrastRatio(buttonColor, "#fff") > 4.5
      ? "#fff"
      : "#111";

  const theme = createTheme({
    palette: {
      color: {
        main: buttonColor,
        light: adjustColor(buttonColor, 30),
        dark: adjustColor(buttonColor, -30),
        contrastText: buttonTextColor,
      },
    },
  });

  const [visible, image] = useMemo(() => {
    const _visible = [];
    const _image = [];
    dataProp?.features?.parameters?.fields.forEach((head) => {
      if (head?.type === "image") {
        _image.push(head);
      } else if (head?.visible) {
        _visible.push(head);
      }
    });
    return [_visible, _image];
  }, [dataProp?.features?.parameters?.fields]);

  const handleCheckboxChange = (isChecked, member) => {
    if (isChecked) {
      setbulkActionArray((prevArray) => [...prevArray, member]);
    } else {
      setbulkActionArray((prevArray) =>
        prevArray.filter((item) => item !== member)
      );
    }
  };

  const handleLongPress = (e) => {
    let pressTimer;
    pressTimer = setTimeout(() => {
      if (dataProp?.features?.grid?.checkBoxEnable) {
        setEnableCheckBox((prev) => !prev);
      }
    }, 1000);
    e.target.onmouseup = () => clearTimeout(pressTimer);
    e.target.onmouseleave = () => clearTimeout(pressTimer);
  };

  const gridHead = (
    image,
    headColor,
    headTextColor,
    actionButtons,
    visible,
    data,
    onRowAction,
    onUpdateRefreshData
  ) => {
    const headTextColor1 = "#260143";
    const headTextColor2 = "#260143";
    // console.log("gridHead", headTextColor1);
    const handleAction = (action, row, index) => {
      console.log("Action", action, row, index);
      if (onRowAction) {
        onRowAction(action, row, index);
        console.log("Actions", action);
      }
      if (onUpdateRefreshData) {
        onUpdateRefreshData(action, row, index);
      }
    };
    // console.log("actionButtons", actionButtons);

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "20px",
          background: headColor || "#e5e5e5",
          height: 95,
        }}
        className="team-card-dark"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {data && image.length !== 0 ? (
            <AvatarGroup max={3}>
              {image.map((imge) => (
                <Avatar
                  alt={imge.label}
                  src={data[imge.name]}
                  style={{
                    border: `2px solid ${
                      appearanceProp?.grid?.image?.borderColor || "#7479ed"
                    }`,
                  }}
                />
              ))}
            </AvatarGroup>
          ) : null}
          {data && visible && visible.length > 0 && (
            <Box className="ml-4">
              <Typography
                key={visible[0]?.dynamicKey}
                as="h1"
                sx={{
                  fontSize: appearanceProp?.grid?.cardFont?.headingSize,
                  fontWeight: appearanceProp?.grid?.cardFont?.headingWeight,
                  color: headTextColor || headTextColor1,
                }}
              >
                {data[visible[0]?.dynamicKey] || ""}
              </Typography>
              {visible.length > 1 && (
                <Typography
                  key={visible[1]?.dynamicKey}
                  as="h1"
                  sx={{
                    fontSize: appearanceProp?.grid?.cardFont?.headingSize,
                    fontWeight: appearanceProp?.grid?.cardFont?.headingWeight,
                    color: headTextColor || headTextColor2,
                  }}
                >
                  {data[visible[1]?.dynamicKey] || ""}
                </Typography>
              )}
            </Box>
          )}
        </Box>
        {/* {console.log("actionButtons", actionButtons)} */}

        {actionButtons ? (
          // Check for permission before rendering ActionButtons
          <Box sx={{ display: "inline-block" }}>
            <ActionButtons
              color={appearanceProp?.grid?.actionButtons?.color}
              actions={filteredActions}
              onAction={(action, index) => handleAction(action, data, index)} // Pass row data here
            />
          </Box>
        ) : null}
      </Box>
    );
  };

  const gridData = (label, field, data) => {
    return (
      <Box mb={2}>
        <Typography
          as="h3"
          sx={{
            fontSize: appearanceProp?.grid?.cardFont?.headingSize,
            fontWeight: appearanceProp?.grid?.cardFont?.headingWeight,
            mb: "5px",
            color: appearanceProp?.grid?.cardFont?.heading,
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontSize: appearanceProp?.grid?.cardFont?.textSize,
            fontWeight: appearanceProp?.grid?.cardFont?.textWeight,
            color: appearanceProp?.grid?.cardFont?.color,
          }}
        >
          {data[field]}
        </Typography>
      </Box>
    );
  };

  const viewMore = (buttonVarient, buttonEnable, checkBox, member) => {
    return buttonEnable ? (
      <ThemeProvider theme={theme}>
        <Box>
          <Button
            variant={buttonVarient}
            color="color"
            sx={{
              borderRadius: "4px",
              textTransform: "capitalize",
            }}
          >
            view details
          </Button>
          {checkBox && (
            <Checkbox
              sx={{ float: "right" }}
              checked={bulkActionArray.includes(member)}
              onChange={(e) => handleCheckboxChange(e.target.checked, member)}
            />
          )}
        </Box>
      </ThemeProvider>
    ) : checkBox ? (
      <Checkbox
        checked={bulkActionArray.includes(member)}
        onChange={(e) => handleCheckboxChange(e.target.checked, member)}
      />
    ) : null;
  };

  return (
    <Card
      onDoubleClick={() => {
        if (dataProp?.features?.grid?.checkBoxEnable) {
          setEnableCheckBox((prev) => !prev);
        }
      }}
      onMouseDown={(event) => handleLongPress(event)}
      sx={{
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, margin 0.3s ease",
        position: "relative",
        "&:hover": {
          transform: "translateZ(5px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
        boxShadow: "none",
        borderRadius: "10px",
        zIndex: 1,
      }}
    >
      {gridHead(
        image,
        appearanceProp?.grid?.header?.headColor,
        appearanceProp?.grid?.header?.headTextColor,
        dataProp?.features?.grid?.actionButtonEnable,
        visible,
        member,
        onRowAction,
        onUpdateRefreshData
      )}

      <Box sx={{ p: "20px" }}>
        {visible.slice(2).map((heading) => {
          return gridData(heading.label, heading.dynamicKey, member);
        })}
        {viewMore(
          appearanceProp?.grid?.button?.buttonVarient,
          dataProp?.features?.grid?.buttonEnable,
          dataProp?.features?.grid?.checkBoxEnable && enableCheckBox,
          member
        )}
      </Box>
    </Card>
  );
};

export default GridCard;
