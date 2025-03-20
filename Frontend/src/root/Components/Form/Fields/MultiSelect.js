import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  Typography,
} from "@mui/material";

import ListSubheader from "@mui/material/ListSubheader";
import Chip from "@mui/material/Chip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  handleInputChange,
  initializeFieldValues,
  checkDependancy,
} from "./HelperFunctions";
import { useEffect, useState } from "react";
import fetchData from "../../../Common/Store/Sagas/SagaHelper";

export default function MultiSelectField({
  serverMode,
  field,
  inputFields,
  formValues,
  isRequired,
  isReadOnly,
  setFormValues,
  currentStep,
  errors,
  setErrors,
  variant,
  parentValues,
  fields,
  parentFields,
}) {
  const countries = [
    { label: "Afghanistan", value: "AF" },
    { label: "Albania", value: "AL" },
    { label: "Algeria", value: "DZ" },
    { label: "Andorra", value: "AD" },
    { label: "Angola", value: "AO" },
    { label: "Argentina", value: "AR" },
    { label: "Armenia", value: "AM" },
    { label: "Australia", value: "AU" },
    { label: "Austria", value: "AT" },
    { label: "Azerbaijan", value: "AZ" },
    // Add more countries as needed
  ];
  const [options, setOptions] = useState([]);

  async function getServerResponse(serverCommunication, qparam, queryParamsId) {
    const generator = fetchData(serverCommunication, qparam, queryParamsId);

    // Step through the generator
    let step = generator.next(); // Start the generator

    while (!step.done) {
      const response = await step.value; // Await the yielded value
      step = generator.next(response); // Pass the response back to the generator
    }

    // Final result
    const finalResult = step.value;
    // setOptions(finalResult.return);
  }
  function SuccessResponseFromServer(res) {
    if (Array.isArray(res.return)) {
      res.return.forEach((item) => {
        if (typeof item.value === "string") {
          try {
            item.value = JSON.parse(item.value);
            setOptions(res.return);
          } catch (error) {
            setOptions([]);
            console.error("Error parsing JSON for options:", error);
          }
        }
      });
    }
  }

  function errorResponseFromServer(err) {
    console.log("Error from Server:", err);
  }
  useEffect(() => {
    console.log("field.selectServer", field.selectServer);
    if (field.selectServer) {
      const sagaCommunication = {
        apiActionType: "",
        permission: true,
        requestType: "GET",
        apiUrl: field.selectServerUrl,
        metaData: true,
        body: {},
        reduxActionType: "",
        onSuccess: (res) => {
          SuccessResponseFromServer(res);
        },
        onFailure: (err) => {
          errorResponseFromServer(err);
        },
      };
      getServerResponse(sagaCommunication, "", "");
    } else {
      setOptions(field?.options);
    }
  }, [field]);

  if (field.hidden) {
    initializeFieldValues(field, formValues[currentStep]);
    return null;
  }

  if (!checkDependancy(field, formValues, parentValues)) {
    return null; // Skip rendering if field is not dependent on any other field
  } else {
    if (field.isPrefilled) {
      const toPrefill = field.prefillField;
      let fieldFound = undefined;
      const findField = (field, toPrefill) => {
        if (field.type === "section") {
          field.childFields.map((child) => {
            const found = findField(child, toPrefill);
            if (found) return found;
          });
        } else {
          if (field.dynamicKey === toPrefill) {
            fieldFound = field;
          }
        }
      };

      fields.map((step) => {
        step[0].map((field) => {
          findField(field, toPrefill);
        });
      });

      if (!fieldFound) {
        parentFields.map((step) => {
          step[0].map((field) => {
            findField(field, toPrefill);
          });
        });
      }

      let dependantFieldValue = null;

      // Function to search for dependantField in provided values object
      const findDependantFieldValue = (values) => {
        for (let step in values) {
          if (values[step][field.prefillField] !== undefined) {
            return values[step][field.prefillField];
          }
        }
        return null;
      };

      // First, try to find the value in formValues
      dependantFieldValue = findDependantFieldValue(formValues);

      // If not found, try to find the value in parentValues
      if (dependantFieldValue === null && parentValues) {
        dependantFieldValue = findDependantFieldValue(parentValues);
      }

      if (fieldFound) {
        if (field.type === fieldFound.type) {
          if (dependantFieldValue) {
            formValues[currentStep][field.dynamicKey] = dependantFieldValue;
          }
        }
      }
    }
    initializeFieldValues(field, formValues[currentStep]);
  }

  function handleChildOptionChange(event, value) {
    // Get the current values for the specific dynamicKey field in the current step
    const newValue = [...(formValues[currentStep][field.dynamicKey] || [])];

    // Add or remove the value based on the checkbox state
    if (event.target.checked) {
      // Add the value
      newValue.push(value);
    } else {
      // Remove the value
      const index = newValue.indexOf(value);
      if (index > -1) {
        newValue.splice(index, 1);
      }
    }

    // Update formValues with the new state for the current step
    const updatedFormValues = [...formValues];
    updatedFormValues[currentStep] = {
      ...updatedFormValues[currentStep], // Copy the existing values for the current step
      [field.dynamicKey]: newValue, // Update the dynamicKey field with the new value
    };

    setFormValues(updatedFormValues); // Update the form state with the new values
  }

  function handleAllselected(event, option) {
    const checked = event.target.checked;

    // Get the current values for the specific dynamicKey field in the current step
    const newValue = [...(formValues[currentStep][field.dynamicKey] || [])];

    // Check/uncheck all child options based on the parent checkbox state
    if (checked) {
      // Add all child values if the parent checkbox is checked
      option.value.forEach((childOption) => {
        if (!newValue.includes(childOption.value)) {
          newValue.push(childOption.value);
        }
      });
    } else {
      // Remove all child values if the parent checkbox is unchecked
      option.value.forEach((childOption) => {
        const index = newValue.indexOf(childOption.value);
        if (index > -1) {
          newValue.splice(index, 1);
        }
      });
    }

    // Update formValues with the new state for the current step
    const updatedFormValues = [...formValues];
    updatedFormValues[currentStep] = {
      ...updatedFormValues[currentStep],
      [field.dynamicKey]: newValue,
    };

    setFormValues(updatedFormValues); // Update the form state with the new values
  }

  function renderOptions(options) {
    console.log("Myoptions", options);
    return (
      options &&
      options?.map((option) => {
        // If the value is an array, handle it
        if (Array.isArray(option?.value)) {
          const allChecked = option.value.every((val) =>
            formValues[currentStep][field.dynamicKey]?.includes(val.value)
          );

          console.log("allChecked: ", option.label, allChecked);

          // Render group with Accordion
          return (
            <Accordion key={option.label} sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start", // Align content to the left
                  flexDirection: "row-reverse", // This moves the expand icon to the left
                }}
              >
                <Checkbox
                  checked={allChecked}
                  onChange={(e) => handleAllselected(e, option)}
                />
                <Typography
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  {option.label}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  marginTop: "-20px",
                  marginBottom: "-10px",
                  marginLeft: "30px",
                }}
              >
                {console.log("option", option)}
                {option.value.map((childOption) => (
                  <MenuItem key={childOption.value} value={childOption.value}>
                    <Checkbox
                      checked={formValues[currentStep][
                        field.dynamicKey
                      ]?.includes(childOption.value)}
                      onChange={(e) =>
                        handleChildOptionChange(e, childOption.value)
                      }
                    />
                    <ListItemText primary={childOption.label} />
                  </MenuItem>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        } else {
          // Default case for non-array option.value
          return (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                checked={formValues[currentStep][field.dynamicKey]?.includes(
                  option.value
                )}
              />
              <ListItemText primary={option.label} />
            </MenuItem>
          );
        }
      })
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 2,
        mb: 2,
      }}
    >
      <FormControl
        fullWidth
        margin="normal"
        error={Boolean(errors[field?.dynamicKey])}
      >
        <InputLabel
          sx={{
            color: inputFields?.color,
            "&.Mui-focused": { color: inputFields?.color },
            "&.MuiInputLabel-shrink": { color: inputFields?.color },
            backgroundColor: "white",
            padding: "0 4px",
          }}
        >
          {field.label}
        </InputLabel>
        <Select
          key={field.name}
          name={field.name}
          multiple
          value={formValues[currentStep][field.dynamicKey] || []}
          defaultValue={field.defaultValue || []}
          onChange={(e) =>
            handleInputChange(
              e,
              field,
              currentStep,
              formValues,
              setFormValues,
              errors,
              setErrors
            )
          }
          margin="normal"
          variant={variant}
          required={isRequired && field.required}
          disabled={field.disabled || isReadOnly}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {console.log("Selected", selected)}

              {selected &&
                selected.map((value) => {
                  if (!Array.isArray(value)) {
                    return <Chip key={value} label={value} />;
                  }
                })}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 200, // Set a max height for the dropdown
                overflowY: "auto", // Enable vertical scrolling if content overflows
              },
            },
          }}
          sx={{
            ...(inputFields && {
              color: inputFields?.color,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: inputFields?.color,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: inputFields?.color,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: inputFields?.color,
              },
              "& .MuiSelect-icon": { color: inputFields?.color },
            }),
          }}
        >
          {renderOptions(options)}
        </Select>
        {errors[field?.dynamicKey] && (
          <Typography color="error" variant="caption">
            {errors[field?.dynamicKey]}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
}
