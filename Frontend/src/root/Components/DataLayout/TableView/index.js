import React, { useEffect, useState  } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, AvatarGroup, Avatar, Box } from "@mui/material";
import ActionButtons from "../ActionButtons"; 
import {HasPermission} from "../constants/permissionChecker";
import { useSelector } from "react-redux";

const TableView = ({
  appearanceProp,
  configProp,
  dataProp,
  additionalProp,
  onRowAction,
  onUpdateRefreshData,
}) => {
    const{currentUserPermissions} = useSelector((state) => state.main);
  
  const rowActionsIsServerDriven =
    configProp?.features?.rowActions?.operationalMode == "server"
      ? true
      : false;
  const { bulkActionArray, setbulkActionArray } =
    additionalProp?.bulkActions || {};
  const [checkboxEnabled, setCheckboxEnabled] = useState(
    configProp?.grid?.checkBoxEnable
  );
  useEffect(() => {
  }, [dataProp?.features?.list]);

  useEffect(() => {
    setCheckboxEnabled(configProp?.grid?.checkBoxEnable);
  }, [configProp?.grid?.checkBoxEnable]);

  const handleCheckboxChange = (selectionModel) => {
    const selectedItems = additionalProp?.data.filter((item) =>
      selectionModel.includes(item.id)
    );
    setbulkActionArray?.(selectedItems);
  };

  if (
    !additionalProp?.data?.length ||
    !dataProp?.features?.parameters?.fields?.length
  ) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Typography variant="h6">No data found</Typography>
      </div>
    );
  }
  const processedColumns = dataProp?.features?.parameters?.fields
    .filter((col) => col?.visible == true || false)
    .map((col) => ({
      field: col.dynamicKey || col.name,
      headerName: col.displayName || col.label || "-",
      sortable: false,
      width: col.width || 400, // Divide 100% by number of columns
      renderCell: (params) => {
        if (col.type === "image") {
          if (Array.isArray(params.value)) {
            return (
              <AvatarGroup max={3}>
                {params.value.map((imageUrl, index) => (
                  <Avatar
                    key={index}
                    alt={`Image ${index + 1}`}
                    src={imageUrl}
                    style={{
                      border: `2px solid ${
                        appearanceProp?.grid?.image?.borderColor || "#7479ed"
                      }`,
                    }}
                  />
                ))}
              </AvatarGroup>
            );
          }
          if (
            typeof params.value === "string" &&
            params.value.startsWith("http")
          ) {
            return (
              <Avatar
                alt="Single Image"
                src={params.value}
                style={{
                  border: `2px solid ${
                    appearanceProp?.grid?.image?.borderColor || "#7479ed"
                  }`,
                }}
              />
            );
          }
          // If params.value is neither an array nor a valid image URL string
          return <span>-</span>;
        }
        return params.value || "-";
      },
    }));

  const handleAction = (action, row, index) => {
    if (rowActionsIsServerDriven && onRowAction) {
      onRowAction(action, row, index);
     
    } else {
      onUpdateRefreshData(action, row, index);
    }
  };
  const filteredActions = configProp?.features?.rowActions?.permission? dataProp?.features?.rowActions?.actions?.filter((action) =>
    HasPermission(action.permission,currentUserPermissions)
  ):dataProp?.features?.rowActions?.actions;
  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 200,
    sortable: false,
    renderCell: (params) => (
      <Box sx={{ display: "flex" }}>
        <ActionButtons
          displayMode="table"
          color="black"
          actions={filteredActions}
          onAction={(action, index) => handleAction(action, params.row, index)} // Pass row data here
        />
      </Box>
    ),
  };

  const handleRowDoubleClick = () => {
    if (configProp?.grid?.checkBoxEnable) {
      setCheckboxEnabled((prev) => !prev);
    }
  };
  console.log("additionalProp?.data",additionalProp?.data)
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={additionalProp?.data}
        columns={[
          ...processedColumns,
          configProp?.features?.rowActions?.enable && filteredActions.length > 0
            ? actionColumn
            : null, // Only include the action column if filteredActions has items
        ].filter(Boolean)} 
        getRowId={(row) => row.id}
        autoHeight
        pagination
        paginationMode="client"
        disableColumnMenu
        disableVirtualization={false}
        checkboxSelection={checkboxEnabled}
        disableRowSelectionOnClick
        onSelectionModelChange={handleCheckboxChange}
        onRowDoubleClick={handleRowDoubleClick}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor:
              appearanceProp?.grid?.header?.headColor || "#f0f0f0",
            color: appearanceProp?.grid?.header?.headTextColor || "#000",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-virtualScroller": {
            "&::-webkit-scrollbar": {
              width: "10px",
              height: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: appearanceProp?.grid?.header?.headColor,
              borderRadius: "10px",
            },
          },
          "& .MuiDataGrid-footerContainer": {
            display: "none",
          },
        }}
      />
    </div>
  );
};

export default TableView;
