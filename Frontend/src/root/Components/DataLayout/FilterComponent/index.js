import React, { useEffect, useState } from "react";
import { Tune } from "@mui/icons-material";
import {
  IconButton,
  Modal,
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

// const filterConditions = {
//   text: ["like", "=", "starts with", "ends with"],
//   number: ["=", "greater than", "less than"],
//   date: ["<", ">", "="],
// };
const filterObjectConditions = {
  text: [
    { label: "Contains", value: "like" },
    { label: "Equals", value: "=" },
    { label: "Starts With", value: "starts_with" },
    { label: "Ends With", value: "ends_with" },
  ],
  number: [
    { label: "Equals", value: "=" },
    { label: "Greater Than", value: ">" },
    { label: "Less Than", value: "<" },
  ],
  date: [
    { label: "Before", value: "<" },
    { label: "After", value: ">" },
    { label: "Equals", value: "=" },
  ],
};

const FilterInput = ({ filter, handleChange }) => {
  console.log('filter.type', filter)
  switch (filter.type) {
    case "text":
      return (
        <TextField
          label="Value"
          value={filter.value}
          onChange={(e) => handleChange(filter.id, "value", e.target.value)}
          fullWidth
        />
      );
    case "number":
      return (
        <TextField
          type="number"
          label="Value"
          value={filter.value}
          onChange={(e) => handleChange(filter.id, "value", e.target.value)}
          fullWidth
        />
      );
    case "date":
      return (
        <TextField
          type="date"
          label="Date"
          value={filter.value}
          onChange={(e) => handleChange(filter.id, "value", e.target.value)}
          fullWidth
        />
      );
    default:
      return null;
  }
};

export default function FilterComponent({
  color,
  data,
  setFilteredData,
  filterBy = [],
  permission = true,
  onAction,
  parameterFields,
  isServerDriven = false,
  serverCommunucation,
}) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [queryParam, setQueryParam] = useState("");
  const [fields, setFields] = useState([]); // State to store field names
  useEffect(() => {
    if (filters.length === 0) {
      setQueryParam("");
    } else {
      const filterColumns = filters.map((filter) => filter.field);
      const filterConditions = filters.map((filter) => {
        return filter.condition.value === "starts_with" || filter.condition.value === "ends_with"
          ? "like"
          : filter.condition.value;
      });      
      const filterValues = filters.map((filter) => {
        let value = filter.value;
  
        switch (filter.condition.value) {
          case "like": // Contains → Modulus on both sides
            return `%${value}%`;
          case "=": // Equals → No Modulus
            return `${value}`;
          case "starts_with": // Starts With → Modulus at end
            return `${value}%`;
          case "ends_with": // Ends With → Modulus at start
            return `%${value}`;
          default:
            return value;
        }
      });
  
      let encodedFilterValues = encodeURIComponent(encodeURIComponent(JSON.stringify(filterValues)));
  
      console.log("FilterValues", filterValues, encodedFilterValues);
  
      let queryParams = `&filter_columns_and=${JSON.stringify(filterColumns)}&filter_values_and=${encodedFilterValues}&filter_conditions_and=${JSON.stringify(filterConditions)}`;
  
      setQueryParam(queryParams);
    }
  }, [filters]);
  
  useEffect(() => {
    if (data && data.length > 0) {
      setFields(Object.keys(data[0])); // Initialize fields from data[0]
      setFilters([]);
    }
  }, [data]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Helper function to detect the type of a field
  const detectFieldType = (field) => {
    if (parameterFields.length == 0) {
      const value = data[0][field];
      console.log("data[0][field]", data)
      if (typeof value === "string") {
        return "text";
      } else if (typeof value === "number") {
        return "number";
      } else if (value instanceof Date || !isNaN(Date.parse(value))) {
        return "date";
      }
      return "";
    }
    else {
      const type = getFieldType(parameterFields[0]['fields'], field);
      console.log("Valueeeee", type)
      if (type === "date" || type == "time" || type == 'dateTime') {
        return "date";
      } else if (type === "number") {
        return "number";
      } else {
        return "text";
      }
      return "";
    }
  };
  const getFieldType = (fields, fieldName) => {
    const field = fields?.find((f) => f.dynamicKey === fieldName) || null;
    if (!field) {
      return ""; // Return empty string if field not found
    }
    if (field.type) {
      return field.type;
    }
    return "text";
  };

  // Add a new filter
  const addFilter = () => {
    setFilters((prevFilters) => [
      ...prevFilters,
      { id: Date.now(), field: "", condition: {label:'',value:''}, value: "", type: "" },
    ]);
  };

  // Remove a filter
  const removeFilter = (id) => {
    const updatedFilters = filters.filter((filter) => filter.id !== id);
    setFilters(updatedFilters);

    console.log("Updated Params", updatedFilters);

    if (updatedFilters.length === 0) {
      setQueryParam("");
      setFilteredData("");
      handleClose();
    }
  };


  // Handle changes in filter fields
  const handleFilterChange = (id, key, value) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.id === id ? { ...filter, [key]: value } : filter
      )
    );
  };

  // Apply filters based on the condition and value
  const applyFilters = () => {
    if (!isServerDriven) {
      let filtered = data;

      filters.forEach((filter) => {
        if (filter.field && filter.condition && filter.value) {
          switch (filter.type) {
            case "text":
              if (filter.condition.value === "like") {
                filtered = filtered.filter((item) =>
                  item[filter.field].toLowerCase().includes(filter.value.toLowerCase())
                );
              } else if (filter.condition.value === "=") {
                filtered = filtered.filter(
                  (item) => item[filter.field].toLowerCase() === filter.value.toLowerCase()
                );
              } else if (filter.condition.value === "starts_with") {
                filtered = filtered.filter((item) =>
                  item[filter.field].toLowerCase().startsWith(filter.value.toLowerCase())
                );
              } else if (filter.condition.value === "ends_with") {
                filtered = filtered.filter((item) =>
                  item[filter.field].toLowerCase().endsWith(filter.value.toLowerCase())
                );
              }
              break;

              case "number":
                if (filter.condition.value === "=") {
                  filtered = filtered.filter(
                    (item) => item[filter.field] === Number(filter.value)
                  );
                } else if (filter.condition.value === ">") {
                  filtered = filtered.filter(
                    (item) => item[filter.field] > Number(filter.value)
                  );
                } else if (filter.condition.value === "<") {
                  filtered = filtered.filter(
                    (item) => item[filter.field] < Number(filter.value)
                  );
                }
                break;
              
              case "date":
                const filterDate = new Date(filter.value);
                if (filter.condition.value === "<") {
                  filtered = filtered.filter(
                    (item) => new Date(item[filter.field]) < filterDate
                  );
                } else if (filter.condition.value === ">") {
                  filtered = filtered.filter(
                    (item) => new Date(item[filter.field]) > filterDate
                  );
                } else if (filter.condition.value === "=") {
                  filtered = filtered.filter(
                    (item) =>
                      new Date(item[filter.field]).toDateString() ===
                      filterDate.toDateString()
                  );
                }
                break;
              

            default:
              break;
          }
        }
      });

      setFilteredData(filtered);
    } else {
      console.log("IN APPLY FILTERS", queryParam);
      setFilteredData(queryParam);
    }
    handleClose();
    if (onAction) onAction(); // Invoke onAction callback if provided
  };

  return (
    <>
      <IconButton
        sx={{
          color: { color },
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: 1,
          padding: "8px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={handleOpen}
      >
        <Tune sx={{ fontSize: 20 }} />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          Filter
          {filters.length > 0 && filters[0].value && (
            <Box
              sx={{
                position: "absolute",
                top: 15,
                right: -15,
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                width: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: 1,
              }}
            >
              {filters.length}
            </Box>
          )}
        </Box>
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {console.log("filtersxx", filters)}
          {fields.length > 0 &&
            filters.map((filter) => (
              <Box key={filter.id} mb={2}>
                {/* Select field to filter on */}
                <Select
                  fullWidth
                  value={filter.field}
                  onChange={(e) => {
                    const field = e.target.value;
                    const fieldType = detectFieldType(field);
                    handleFilterChange(filter.id, "field", field);
                    handleFilterChange(filter.id, "type", fieldType);
                  }}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Field
                  </MenuItem>
                  {console.log("data", data, fields)}
                  {fields
                    .filter(
                      (field) =>
                        filterBy.length === 0 ||
                        filterBy
                          .map((f) => f.toLowerCase())
                          .includes(field.toLowerCase())
                    ) // Case-insensitive filtering
                    .map((field) => (
                      <MenuItem key={field} value={field}>
                        {field}
                      </MenuItem>
                    ))}
                </Select>

                {/* Select condition */}
                {/* Select condition */}
                {filter.field && (
                  <Select
                    fullWidth
                    value={filter.condition?.value || ""}
                    onChange={(e) => {
                      const selectedCondition = filterObjectConditions[filter.type]?.find(
                        (cond) => cond.value === e.target.value
                      );
                      handleFilterChange(filter.id, "condition", selectedCondition);
                    }}
                    displayEmpty
                    sx={{ mt: 1 }}
                  >
                    <MenuItem value="" disabled>
                      Select Condition
                    </MenuItem>
                    {filterObjectConditions[filter.type]?.map((condition) => (
                      <MenuItem key={condition.value} value={condition.value}>
                        {condition.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}

                {/* Filter input */}
                {filter.field && filter.condition && (
                  <FilterInput
                    filter={filter}
                    handleChange={handleFilterChange}
                  />
                )}

                <Button
                  sx={{ mt: 1 }}
                  color="error"
                  onClick={() => removeFilter(filter.id)}
                >
                  Remove
                </Button>
              </Box>
            ))}

          {/* Aligning Add and Apply buttons */}
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" onClick={addFilter}>
              Add Filter
            </Button>

            <Button
              variant="contained"
              color="success"
              onClick={
                applyFilters
                // isServerDriven
                //   ? () => setFilteredData(queryParam)
                //   : applyFilters
              }
              disabled={!permission} // Disable if no permission
            >
              Apply Filters
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
