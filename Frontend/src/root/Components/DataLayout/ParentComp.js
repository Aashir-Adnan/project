import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Paper,
  IconButton,
  Toolbar,
  Typography,
  TablePagination,
  ThemeProvider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styled, alpha } from "@mui/material/styles";
import SortData from "./SortData";
import Grids from "./Grid";
import InputBase from "@mui/material/InputBase";
import { createTheme, getContrastRatio } from "@mui/material/styles";
import ExportDropdown from "./ExportList";
import ListViewDropdown from "./ListViewMode";
import TableView from "./TableView";
import FilterComponent from "./FilterComponent";
import AddIcon from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MoreHoriz } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { Form } from "../Form/Form";
import fetchData from "../../Common/Store/Sagas/SagaHelper";
import LoadingOverlay from "../Loading/LoadingOverLay";
import { flattenFieldsFromSteps } from "./parametersParser";
import { HasPermission } from "./constants/permissionChecker";
import { runSaga } from "redux-saga";
import { store } from "../../Common/Store/configureStore";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import ImportList from "./ImportList";
import { getServerResponse } from "../Helpers/getServerResponse";
const colorBase = "#FFFFFF";
const colorMain = alpha(colorBase);

const theme = createTheme({
  palette: {
    customColor: {
      main: colorMain,
      light: alpha(colorBase, 0.5),
      dark: alpha(colorBase, 0.9),
      contrastText: getContrastRatio(colorMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

const Search = styled("div")(({ theme, open }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: open
    ? alpha(theme.palette.common.white, 0.15)
    : "transparent",
  "&:hover": {
    backgroundColor: open
      ? alpha(theme.palette.common.white, 0.25)
      : "transparent",
  },
  marginLeft: 0,
  display: "flex",
  alignItems: "center",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shortest,
  }),
  width: open ? "250px" : "40px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme, open }) => ({
  color: "inherit",
  width: open ? "100%" : "0px",
  opacity: open ? 1 : 0,
  transition: theme.transitions.create(["width", "opacity"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.shortest,
  }),
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export default function ParentComp({ CustomCard, data, config, appearance }) {
  const location = useLocation();
  const paramsArray = location.pathname.substring(1).split("&").slice(1);
  const lastParam = paramsArray.length > 0 ? `&${paramsArray.join("&")}` : "";

  const parametersArray =
    flattenFieldsFromSteps(data?.features?.parameters)?.steps?.map((step) => ({
      fields: step?.parameters?.fields,
    })) || data?.features?.parameters;
  let temp = {
    ...data,
    features: {
      ...data?.features,
      parameters: Array.isArray(parametersArray)
        ? parametersArray[0] || {}
        : parametersArray,
    },
  };

  data = temp;
  const listIsServerDriven =
    config?.features?.list?.operationalMode == "server" ? true : false;
  const rowActionsIsServerDriven =
    config?.features?.rowActions?.operationalMode == "server" ? true : false;
  const exportIsServerDriven =
    config?.features?.export?.operationalMode == "server" ? true : false;
  const filterIsServerDriven =
    config?.features?.filter?.operationalMode == "server" ? true : false;
  const sortIsServerDriven =
    config?.features?.sort?.operationalMode == "server" ? true : false;
  const searchIsServerDriven =
    config?.features?.search?.operationalMode == "server" ? true : false;
  const paginationIsServerDriven =
    config?.features?.pagination?.operationalMode == "server" ? true : false;
  const bulkActionIsServerDriven =
    config?.features?.bulkActions?.operationalMode == "server" ? true : false;
  const serverCommunication = listIsServerDriven
    ? data?.features?.list?.serverCommunication
    : {};

  const [myUpdatedData, setMyUpdatedData] = useState(data);
  const [page, setPage] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState({});
  const [selectedRow, setSelectedRow] = useState({});
  const { currentUserPermissions } = useSelector((state) => state.main);
  const [parameterData, setData] = useState(
    listIsServerDriven
      ? data?.features?.list?.data || []
      : data?.features?.list?.data
  );
  const [filteredData, setFilteredData] = useState(
    data?.features?.list?.data || []
  );
  const [bulkActionArray, setbulkActionArray] = useState([]);
  const [viewMode, setViewMode] = useState(
    config?.viewMode?.presentation[0] || ""
  );
  const [rowsPerPage, setRowsPerPage] = useState(
    data?.features?.pagination?.options?.pageSize || 10
  );
  const [pagination, setPagination] = useState("&page_size=10&page_no=1");
  const [queryParameters, setQueryParameters] = useState(
    paginationIsServerDriven ? pagination : ""
  );
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [localFilteredDataCount, setLocalFilteredDataCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [permissions, setPermissions] = useState({
    addActionPermission: false,
    filterActionPermission: false,
    searchActionPermission: false,
    sortActionPermission: false,
    exportActionPermission: false,
  });
  // useEffect(() => {
  //   if (config?.features?.list?.permission && config?.features?.list?.permission) {
  //     const permission = HasPermission(data?.features?.list?.permission, currentUserPermissions);
  //     if (!permission) return;
  //   }
  //   setMyUpdatedData({
  //     ...data,
  //     features: {
  //       ...data.features,
  //       list: { ...data.features.list, data: [] }
  //     }
  //   }
  //   );
  //   setFilteredData([]);
  //   setTotalDataCount(0);
  //   setLocalFilteredDataCount(0);
  //   setQueryParameters('&page_size=10&page_no=1')
  //   setPagination('&page_size=10&page_no=1');
  //   setPage(0)
  //   setRowsPerPage(10)
  //   getTableData();
  // }, [location]);

  // useEffect(() => { }, [isLoading, myUpdatedData]);

  useEffect(() => {
    const checkPermissions = () => {
      try {
        const addActionPermission = config?.features?.bulkAction?.permission
          ? HasPermission(
            data?.features?.bulkAction?.add?.permission,
            currentUserPermissions
          )
          : true;

        const filterActionPermission = config?.features?.filter?.permission
          ? HasPermission(
            data?.features?.filter?.permission,
            currentUserPermissions
          )
          : true;

        const searchActionPermission = config?.features?.search?.permission
          ? HasPermission(
            data?.features?.search?.permission,
            currentUserPermissions
          )
          : true;

        const sortActionPermission = config?.features?.sort?.permission
          ? HasPermission(
            data?.features?.sort?.permission,
            currentUserPermissions
          )
          : true;

        const exportActionPermission = config?.features?.export?.permission
          ? HasPermission(
            data?.features?.export?.permission,
            currentUserPermissions
          )
          : true;

        setPermissions({
          addActionPermission,
          filterActionPermission,
          searchActionPermission,
          sortActionPermission,
          exportActionPermission,
        });
      } catch (error) {
        console.error("Error checking permissions:", error);
      }
    };

    checkPermissions();
  }, [
    currentUserPermissions,
    JSON.stringify(data.features?.parameters?.fields),
    config,
  ]);
  useEffect(() => {
    if (!listIsServerDriven || !serverCommunication) return;
    let query = pagination;
    if (paginationIsServerDriven && searchQuery === "") {
      query = queryParameters.includes("filter_columns")
        ? queryParameters
        : pagination;
    } else if (
      queryParameters !== pagination &&
      (filterIsServerDriven || sortIsServerDriven) &&
      searchQuery != ""
    ) {
      query = queryParameters;
    } else if (searchIsServerDriven && searchQuery !== "") {
      query = pagination + searchQuery;
    }

    getTableData(lastParam + query);
  }, [serverCommunication?.apiUrl, queryParameters, searchQuery]);

  // }, [serverCommunication?.apiUrl, pagination, queryParameters, searchQuery]);
  const updateActionState = async (state) => {
    setShowForm(state);
    if (state === false) {
      setCurrentAction(null);
      HasPermission(data?.features?.list?.permission, currentUserPermissions) && await getTableData(pagination)
    }
  };

  const addSortingParams = (sortParams) => {
    const updatedParams = pagination + sortParams;
    setQueryParameters(updatedParams);
  };
  const getTableData = async (qparam) => {
    console.log("getTableData", qparam);
    setIsLoading(true);
    const onSuccess = serverCommunication.onSuccess;
    const onFailure = serverCommunication.onFailure;
    function updatedOnSuccess(res) {
      onSuccess(res);
      setData(res.return);
      setFilteredData(res.return);
      const updatedData = {
        ...data,
        features: {
          ...data.features,
          list: {
            ...data.features.list,
            data: res.return,
          },
        },
      };
      setMyUpdatedData(updatedData);

      if (listIsServerDriven) {
        setTotalDataCount(res?.total_count || res.return?.length || 1);
        setLocalFilteredDataCount(res?.total_count || res.return?.length || 1);
      } else {
        setTotalDataCount(res.return?.length);
        setLocalFilteredDataCount(res?.total_count || res.return?.length || 1);
      }
      setIsLoading(false);
    }

    function updatedOnFailure(err) {
      console.error("Error from Table comp", err);
      const updatedData = {
        ...data,
        features: {
          ...data.features,
          list: {
            ...data.features.list,
            data: [],
          },
        },
      };
      setMyUpdatedData(updatedData);
      setFilteredData([]);
      setIsLoading(false);
      onFailure();
    }

    // Assign the callbacks
    serverCommunication.onSuccess = updatedOnSuccess;
    serverCommunication.onFailure = updatedOnFailure;
    getServerResponse(serverCommunication, qparam, null, setIsLoading);
  };

  const updateDataLocaly = (action, row, index) => {
    setCurrentAction(action);
    if (action.name === "Delete") {
      const updatedData = parameterData?.filter((item) => item.id !== row.id);
      setData(updatedData);
      setFilteredData(updatedData);
      action.onAction(row);
    } else {
      setShowForm(true);
      action.onAction(row);
    }
  };
  const handleRowAction = (action, row, index) => {
    if (action.form) {
      setShowForm(true);
      setCurrentAction(action);
      setSelectedRow(row);
    } else {
      if (action.serverCommunication) {
        hitServer(action, row);
      } else {
        if (action.onAction) {
          action.onAction(row, index);
        } else {
          console.log("Action not defined for ", action.name);
        }
      }
    }
  };
  const hitServer = async (action, row) => {
    if (action.name !== "Download PDF") {
      await getServerResponse(action.serverCommunication, "", row.id, setIsLoading);
      await getTableData();
    } else {
      const onSuccess = action.serverCommunication.onSuccess;

      function updatedOnSuccess(response) {
        setSelectedRow({});
        onSuccess(response); // Call the original onSuccess function
        downloadPDF(response, row); // Call downloadPDF with the response and row
      }

      // Update the action's onSuccess to the new function
      action.serverCommunication.onSuccess = updatedOnSuccess;

      // Trigger the server call
      await getServerResponse(action.serverCommunication, "", row.id, setIsLoading);
    }
  };
  const downloadPDF = async (response, row) => {
    try {
      // Ensure the response is in HTML format
      if (!response || typeof response !== "string") {
        throw new Error("Invalid HTML response from the server");
      }

      // Step 2: Create a jsPDF instance
      const pdf = new jsPDF("p", "pt", "a4"); // Portrait, points, A4 size

      // Step 3: Add HTML content to the PDF
      await pdf.html(response, {
        x: 20, // Left margin
        y: 20, // Top margin
        html2canvas: {
          scale: 1.2, // Adjust scaling for better quality
        },
        callback: (pdf) => {
          // Step 4: Save the PDF file
          const fileName = `row_${row.id}_response.pdf`;
          pdf.save(fileName);
        },
      });
    } catch (error) {
      console.error("Error while generating or downloading PDF:", error);
    }
  };

  const handleClickAddButton = () => {
    if (data?.features?.bulkAction?.add?.form) {
      setCurrentAction({ form: data?.features?.bulkAction?.add.form });
      setSelectedRow({});
      setShowForm(true);
    }
  };

  // Adjusted filtering logic to exclude certain keys
  const searchedData = filteredData?.filter((item) =>
    Object.keys(item).some((key) => {
      if (data?.search?.excludeSearch?.includes(key)) return false; // Exclude specific keys
      const val = item[key];
      const normalizedVal = val ? String(val).toLowerCase() : "";
      return normalizedVal.includes(searchQuery.toLowerCase());
    })
  );

  const paginatedData = paginationIsServerDriven
    ? filteredData
    : rowsPerPage === -1
      ? searchedData // No pagination, return all rows
      : searchedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (event) => {
    if (searchIsServerDriven) {
      setSearchQuery(
        `&filter_columns_or=${JSON.stringify([
          "all",
        ])}&filter_values_or=${JSON.stringify([event.target.value])}`
      );
    } else {
      const localFilteredData = parameterData.filter((item) =>
        Object.keys(item).some((key) => {
          if (data?.search?.excludeSearch?.includes(key)) return false; // Exclude specific keys
          const value = item[key];
          return value
            ? String(value).toLowerCase().includes(event.target.value)
            : false;
        })
      );
      if (event.target.value !== "") {
        setLocalFilteredDataCount(localFilteredData?.length);
        setFilteredData(localFilteredData);
      } else {
        setLocalFilteredDataCount(totalDataCount);
        setFilteredData(parameterData);
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setPagination(`&page_size=${rowsPerPage}&page_no=${newPage + 1}`);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("event.target.value", parseInt(event.target.value, 10));
    setRowsPerPage(parseInt(event.target.value, 10));
    if (event.target.value == "-1") {
      setPagination("");
    } else {
      setPagination(`&page_size=${parseInt(event.target.value)}&page_no=${1}`);
    }
    setPage(0);
  };

  const renderView = () => {
    if (!filteredData || (filteredData && filteredData?.length === 0)) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Typography variant="h6">No results found</Typography>
        </Box>
      );
    }
    if (!filteredData[0].id) {
      return <Typography variant="h6">No unique Id available</Typography>;
    }

    switch (viewMode) {
      case "Grid":
        return (
          <>
            {!isLoading && (
              <Grids
                CustomCard={CustomCard}
                dataProp={myUpdatedData}
                configProp={config}
                appearanceProp={appearance}
                additionalProp={{
                  data: paginatedData,
                  bulkActions: {
                    bulkActionArray: bulkActionArray,
                    setbulkActionArray: setbulkActionArray,
                  },
                }}
                onRowAction={handleRowAction}
                onUpdateRefreshData={
                  rowActionsIsServerDriven
                    ? () => getTableData()
                    : (action, row, index) =>
                      updateDataLocaly(action, row, index)
                }
              />
            )}
            <LoadingOverlay isLoading={isLoading} />
          </>
        );
      case "Table":
        return (
          <>
            {!isLoading && (
              <>
                <TableView
                  dataProp={myUpdatedData}
                  configProp={config}
                  appearanceProp={appearance}
                  additionalProp={{
                    data: paginatedData,
                    bulkActions: {
                      bulkActionArray: bulkActionArray,
                      setbulkActionArray: setbulkActionArray,
                    },
                  }}
                  onRowAction={handleRowAction}
                  onUpdateRefreshData={
                    rowActionsIsServerDriven
                      ? () => getTableData()
                      : (action, row, index) =>
                        updateDataLocaly(action, row, index)
                  }
                />
              </>
            )}
            {/* <LoadingOverlay isLoading={isLoading} /> */}
          </>
        );
      default:
        return <Typography variant="h6">Invalid view mode selected</Typography>;
    }
  };

  const isStandardColor = (color) =>
    ["inherit", "primary", "secondary", "default"].includes(color);

  const [anchorEl, setAnchorEl] = useState(null);

  // Handle opening and closing of the dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor:
            appearance?.parent?.appBarColor &&
              isStandardColor(appearance?.parent?.appBarColor)
              ? undefined
              : appearance?.parent?.appBarColor,
          color: appearance?.parent?.appBarTextColor || "inherit", // Default to 'inherit' if undefined
        }}
        color={
          isStandardColor(appearance?.parent?.appBarColor)
            ? appearance?.parent?.appBarColor
            : undefined
        }
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            overflowX: { xs: "auto", md: "visible" },
            whiteSpace: "nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              whiteSpace: "nowrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <IconButton size="large" edge="start" color="inherit">
                <MenuIcon
                  sx={{
                    color: appearance?.parent?.appBarTextColor || "inherit",
                  }} // Default color if undefined
                />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { sm: "flex-end" },
                width: "100%",
              }}
            >
              {config?.features?.bulkAction?.enable &&
                permissions.addActionPermission && (
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={handleClickAddButton}
                  >
                    <AddIcon
                      sx={{
                        color: appearance?.parent?.appBarTextColor || "inherit",
                      }}
                    />
                  </IconButton>
                )}

              {config?.features?.filter?.enable &&
                permissions.filterActionPermission && (
                  <>
                    <FilterComponent
                      color={appearance?.parent?.appBarTextColor || "inherit"} // Default color if undefined
                      data={parameterData}
                      serverCommunucation={
                        data?.features?.filter?.serverCommunication
                      }
                      setFilteredData={
                        filterIsServerDriven
                          ? addSortingParams
                          : setFilteredData
                      }
                      parameterFields={parametersArray}
                      isServerDriven={filterIsServerDriven}
                      filterBy={data?.features?.filter?.options?.filterBy}
                      permission={data?.features?.filter?.permission}
                      onAction={data?.features?.filter?.onAction}
                    />
                  </>
                )}

              {config?.features?.search?.enable &&
                permissions.searchActionPermission && (
                  <div>
                    <Search open={searchOpen}>
                      {searchOpen ? (
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                      ) : null}
                      <StyledInputBase
                        open={searchOpen}
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        onChange={handleSearchChange} // Capture search input
                      />
                      <IconButton onClick={handleSearchClick} color="inherit">
                        {searchOpen ? (
                          <CloseIcon
                            sx={{
                              color:
                                appearance?.parent?.appBarTextColor ||
                                "inherit",
                            }}
                          />
                        ) : (
                          <SearchIcon
                            sx={{
                              color:
                                appearance?.parent?.appBarTextColor ||
                                "inherit",
                            }}
                          />
                        )}
                      </IconButton>
                    </Search>
                  </div>
                )}

              {config?.features?.viewModes &&
                config?.viewMode?.presentation?.length > 1 && (
                  <ListViewDropdown
                    viewMode={viewMode}
                    setListView={setViewMode}
                    iconColor={appearance?.parent?.appBarTextColor || "inherit"} // Default color if undefined
                    presentation={config?.viewMode?.presentation}
                  />
                )}

              <div>
                {(config?.features?.export?.enable &&
                  permissions.exportActionPermission) ||
                  (config?.features?.sort?.enable &&
                    permissions.sortActionPermission) ? (
                  <Tooltip title="More actions">
                    <IconButton
                      aria-label="more"
                      onClick={handleMenuOpen}
                      size="large"
                      edge="start"
                      color="inherit"
                      sx={{
                        color: appearance?.parent?.appBarTextColor || "inherit", // Default color if undefined
                        size: "small",
                        transform: "rotate(90deg)", // Rotate the button to make it vertical
                      }}
                    >
                      <MoreHoriz fontSize="medium" />
                    </IconButton>
                  </Tooltip>
                ) : null}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  sx={{
                    "& .MuiPaper-root": {
                      borderRadius: 3,
                      minWidth: 180,
                      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
                      padding: "8px 0",
                      transition: "transform 0.2s ease",
                    },
                  }}
                >
                  {config?.features?.export?.enable &&
                    permissions.exportActionPermission && (
                      <MenuItem
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          padding: "10px 20px",
                          color: "black",
                        }}
                      >
                        <ExportDropdown
                          headers={
                            config?.features?.export?.operationalMode ===
                              "server"
                              ? null
                              : data?.features?.parameters?.fields || []
                          }
                          data={
                            config?.features?.export?.operationalMode ==
                              "server"
                              ? data?.features?.export?.serverCommunication
                              : filteredData || data?.features?.parameters?.data
                          }
                          formats={
                            data?.features?.export?.options?.formats || []
                          }
                          includeHeaders={
                            data?.features?.export?.options?.includeHeaders ||
                            true
                          }
                          onSuccess={data?.features?.export?.onSuccess}
                          onFailure={data?.features?.export?.onFailure}
                          onAction={data?.features?.export?.onAction}
                        />
                      </MenuItem>
                    )}


                  <MenuItem
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      padding: "10px 20px",
                      color: "black",
                    }}
                  >
                    {console.log("data?.features?.bulkAction?.add?.form?", data?.features?.bulkAction?.add?.form)}
                    <ImportList
                      parameters={data?.features?.parameters?.fields || []}
                      addSagaCommunication={data?.features?.bulkAction?.add?.form?.data?.features?.submission?.serverCommunication || null}
                      onSuccess={(message) => console.log(message)}
                      onFailure={(error) => console.error(error)}
                    />

                  </MenuItem>
                  {config?.features?.sort?.enable &&
                    permissions.sortActionPermission && (
                      <MenuItem
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          padding: "10px 20px",
                          color: "black",
                        }}
                      >
                        <SortData
                          dataHeaders={data?.features?.parameters?.fields || []}
                          data={filteredData || []}
                          setData={
                            !sortIsServerDriven ? setFilteredData : () => { }
                          }
                          isServerDriven={sortIsServerDriven}
                          excludeSort={["image"]}
                          buttonColor="black"
                          options={data?.features?.sort?.options || {}}
                          sx={{ mr: 2 }}
                          onAction={
                            sortIsServerDriven
                              ? (q) => addSortingParams(q)
                              : typeof data?.features?.sort?.onAction ===
                                "function"
                                ? data?.features?.sort?.onAction
                                : () => { }
                          }
                        />
                      </MenuItem>
                    )}
                </Menu>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ backgroundColor: "#f5f5f5", width: "100%" }}>
        <Box sx={{ elevation: 10 }}>{renderView()}</Box>
      </Box>

      <AppBar
        position="static"
        sx={{
          backgroundColor:
            appearance?.parent?.appBarColor &&
              isStandardColor(appearance?.parent?.appBarColor)
              ? undefined
              : appearance?.parent?.appBarColor,
        }}
        color={
          isStandardColor(appearance?.parent?.appBarColor)
            ? appearance?.parent?.appBarColor
            : undefined
        }
      >
        {config?.features?.pagination?.enable && (
          <TablePagination
            component="div"
            count={localFilteredDataCount} // Safely handle undefined lengths
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={
              data?.features?.pagination?.options?.pageSizeOptions || []
            }
            sx={{
              ".MuiTablePagination-toolbar": {
                color: appearance?.parent?.appBarTextColor || "inherit",
              },
              ".MuiTablePagination-selectIcon": {
                color: appearance?.parent?.appBarTextColor || "inherit",
              },
              ".MuiTablePagination-actions button": {
                color: appearance?.parent?.appBarTextColor || "inherit",
              },
            }}
          />
        )}
        {showForm && (
          <Form
            data={currentAction.form.data}
            config={currentAction.form.config}
            appearance={currentAction.form.appearance}
            isModalOpen={showForm}
            setIsModalOpen={updateActionState}
            queryParamsId={selectedRow.id}
          />
        )}
      </AppBar>
    </ThemeProvider>
  );
}
