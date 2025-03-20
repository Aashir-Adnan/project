import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import fetchData from "../../../Common/Store/Sagas/SagaHelper";
import {
  handleInputChange,
  initializeFieldValues,
  checkDependancy,
} from "./HelperFunctions";

export default function SelectField({
  serverMode,
  field,
  errors,
  setErrors,
  isRequired,
  isReadOnly,
  inputFields,
  formValues,
  setFormValues,
  currentStep,
  variant,
  parentValues,
}) {
  // console.log("formValuesIinSelect",formValues)
  const [options, setOptions] = useState(field?.options || []);
  const [isFetching, setIsFetching] = useState(false);

  async function getServerResponse(serverCommunication, qparam, queryParamsId) {
    setIsFetching(true);
    const generator = fetchData(serverCommunication, qparam, queryParamsId);
    let step = generator.next();
    while (!step.done) {
      const response = await step.value;
      step = generator.next(response);
    }
    setIsFetching(false);
    return step.value;
  }
  const handleFetchData = async () => {
    console.log("handleFetchData", isFetching, options.length,options);
    if ((!isFetching && options.length === 0 )|| !options[0].label) {
      let apiUrl = field.selectServerUrl;
      console.log("apiUrl", apiUrl, field, formValues, formValues[currentStep]);
  
      // Check if field has dependencies and append their values to the API call
      if (Array.isArray(field.dependentOn) && field.dependentOn.length > 0) {
        field.dependentOn.forEach((dependency) => {
          const dependentValue = formValues[currentStep][dependency];
          if (dependentValue) {
            apiUrl += `&${dependency}=${dependentValue}`;
          }
        });
      }
      else{
        if (field.dependentOn && formValues[currentStep][field.dependentOn]) {
          apiUrl += `&${field.dependentOn}=${formValues[currentStep][field.dependentOn]}`;
        }
      }
  
      const sagaCommunication = {
        apiActionType: "",
        permission: true,
        requestType: "GET",
        apiUrl: apiUrl,
        metaData: true,
        body: {},
        reduxActionType: "",
        onSuccess: (res) => {
          setOptions(res.return);
        },
        onFailure: (err) => {
          console.error("Error from Server:", err);
        },
      };
      await getServerResponse(sagaCommunication, "", "");
    }
  };
  const handleChange = (e) => {
    handleInputChange(
      e,
      field,
      currentStep,
      formValues,
      setFormValues,
      errors,
      setErrors
    );
  
    // Clear dependent fields dynamically if the current field is changed
    if (Array.isArray(field.hasDependents)) {
      field.hasDependents.forEach((dependentKey) => {
        setFormValues((prevValues) => ({
          ...prevValues,
          [dependentKey]: "", // Clear dependent values
        }));
      });
    }
  };
  
  
  useEffect(() => {
    if (Array.isArray(field.dependentOn)) {
      // Check if any dependency field changes, then reset options
      field.dependentOn.forEach((dependency) => {
        if (formValues[currentStep][dependency]) {
          console.log("Resetting options for", field.name,field.name != formValues[currentStep][dependency], formValues[currentStep]);
          // setOptions( field.name != formValues[currentStep][dependency] ?[]: options); // Clear previous options when dependency changes
        }
      });
    }
  }, [formValues, field.dependentOn, currentStep]);
  
  if (field.hidden) {
    initializeFieldValues(field, formValues[currentStep]);
    return null;
  }

  if (!checkDependancy(field, formValues, parentValues)) {
    return null;
  } else {
    initializeFieldValues(field, formValues[currentStep]);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: 2,
        mb: 2,
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel
          sx={{
            color: inputFields?.color,
            "&.Mui-focused": {
              color: inputFields?.color,
            },
            "&.MuiInputLabel-shrink": {
              color: inputFields?.color,
            },
            backgroundColor: "white",
            padding: "0 4px",
          }}
        >
          {field.label}
        </InputLabel>
        <Select
          key={field?.name}
          name={field?.name}
          value={formValues && formValues[currentStep]&& formValues[currentStep][field?.dynamicKey] || ""}
          onChange={handleChange}
          onOpen={formValues && formValues[currentStep]&& field?.selectServer && handleFetchData} // Fetch data on open
          variant={variant}
          required={isRequired && field.required}
          disabled={field?.disabled || isReadOnly}
          error={Boolean(errors[field?.dynamicKey])}
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
              "& .MuiSelect-icon": {
                color: inputFields?.color,
              },
            }),
          }}
        >
          {options && options.length > 0 ? (
            options.map((option) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>{isFetching ? "Loading..." : "No options available"}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
}

// import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { useEffect, useState } from "react";
// import fetchData from "../../../Common/Store/Sagas/SagaHelper";
// import {
//   handleInputChange,
//   initializeFieldValues,
//   checkDependancy,
// } from "./HelperFunctions";

// export default function SelectField({
//   serverMode,
//   field,
//   errors,
//   setErrors,
//   isRequired,
//   isReadOnly,
//   inputFields,
//   formValues,
//   setFormValues,
//   currentStep,
//   variant,
//   parentValues,
//   fields,
//   parentFields,
// }) {
//   const countries = [
//     { label: "Afghanistan", value: "AF" },
//     { label: "Albania", value: "AL" },
//     { label: "Algeria", value: "DZ" },
//     { label: "Andorra", value: "AD" },
//     { label: "Angola", value: "AO" },
//     { label: "Argentina", value: "AR" },
//     { label: "Armenia", value: "AM" },
//     { label: "Australia", value: "AU" },
//     { label: "Austria", value: "AT" },
//     { label: "Azerbaijan", value: "AZ" },
//     // Add more countries as needed
//   ];
//   const [options, setOptions] = useState([]);

//   async function getServerResponse(serverCommunication, qparam, queryParamsId) {
//     const generator = fetchData(serverCommunication, qparam, queryParamsId);

//     // Step through the generator
//     let step = generator.next(); // Start the generator

//     while (!step.done) {
//       const response = await step.value; // Await the yielded value
//       step = generator.next(response); // Pass the response back to the generator
//     }

//     // Final result
//     const finalResult = step.value;
//     // setOptions(finalResult.return);
//   }
//   function SuccessResponseFromServer(res)
//   {
//     setOptions(res.return);
//   }
//   function errorResponseFromServer(err)
//   {
//     console.log("Error from Server:",err)
//   }
//   useEffect(() => {
//     if (field.selectServer) {
//      const  sagaCommunication= {
//         apiActionType: "",
//         permission: true,
//         requestType:"GET",
//         apiUrl: field.selectServerUrl,
//         metaData: true,
//         body: {},
//         reduxActionType: "",
//         onSuccess: (res) => { SuccessResponseFromServer(res) },
//         onFailure: (err) => { errorResponseFromServer(err) },
//       }
//       getServerResponse(sagaCommunication, "", "");
      
//     }
//   }, [field]);

//   if (field.hidden) {
//     initializeFieldValues(field, formValues[currentStep]);
//     return null;
//   }

//   if (!checkDependancy(field, formValues, parentValues)) {
//     return null; // Skip rendering if field is not dependent on any other field
//   } else {
//     if (field.isPrefilled) {
//       const toPrefill = field.prefillField;
//       let fieldFound = undefined;
//       const findField = (field, toPrefill) => {
//         if (field.type === "section") {
//           field.childFields.map((child) => {
//             const found = findField(child, toPrefill);
//             if (found) return found;
//           });
//         } else {
//           if (field.dynamicKey === toPrefill) {
//             fieldFound = field;
//           }
//         }
//       };

//       fields.map((step) => {
//         step[0].map((field) => {
//           findField(field, toPrefill);
//         });
//       });

//       if (!fieldFound) {
//         parentFields.map((step) => {
//           step[0].map((field) => {
//             findField(field, toPrefill);
//           });
//         });
//       }

//       let dependantFieldValue = null;

//       // Function to search for dependantField in provided values object
//       const findDependantFieldValue = (values) => {
//         for (let step in values) {
//           if (values[step][field.prefillField] !== undefined) {
//             return values[step][field.prefillField];
//           }
//         }
//         return null;
//       };

//       // First, try to find the value in formValues
//       dependantFieldValue = findDependantFieldValue(formValues);

//       // If not found, try to find the value in parentValues
//       if (dependantFieldValue === null && parentValues) {
//         dependantFieldValue = findDependantFieldValue(parentValues);
//       }

//       if (fieldFound) {
//         if (field.type === fieldFound.type) {
//           if (dependantFieldValue) {
//             formValues[currentStep][field.dynamicKey] = dependantFieldValue;
//           }
//         }
//       }
//     }
//     initializeFieldValues(field, formValues[currentStep]);
//   }
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "flexStart",
//         gap: 2,
//         mb: 2,
//       }}
//     >
//       <FormControl fullWidth margin="normal">
//         <InputLabel
//           sx={{
//             color: inputFields?.color, // Default color for label
//             "&.Mui-focused": {
//               color: inputFields?.color, // Color when focused
//             },
//             "&.MuiInputLabel-shrink": {
//               color: inputFields?.color, // Color when label shrinks
//             },
//             backgroundColor: "white",
//             padding: "0 4px",
//           }}
//         >
//           {field.label}
//         </InputLabel>
//         <Select
//           key={field.name}
//           name={field.name}
//           defaultValue={field.defaultValue}
//           value={
//             Array.isArray(formValues)
//               ? formValues[currentStep]?.[field?.dynamicKey] || ""
//               : formValues[field?.dynamicKey] || ""
//           }
//           onChange={(e) =>
//             handleInputChange(
//               e,
//               field,
//               currentStep,
//               formValues,
//               setFormValues,
//               errors,
//               setErrors
//             )
//           }
//           margin="normal"
//           variant={variant}
//           required={isRequired && field.required}
//           disabled={field.disabled || isReadOnly}
//           error={Boolean(errors[field?.dynamicKey])} // Show error if exists
//           helperText={errors[field?.dynamicKey]} // Show error message
//           sx={{
//             ...(inputFields && {
//               color: inputFields?.color,
//               "& .MuiOutlinedInput-notchedOutline": {
//                 borderColor: inputFields?.color,
//               },
//               "&:hover .MuiOutlinedInput-notchedOutline": {
//                 borderColor: inputFields?.color,
//               },
//               "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//                 borderColor: inputFields?.color,
//               },
//               "& .MuiSelect-icon": {
//                 color: inputFields?.color, // Dropdown arrow icon color
//               },
//             }),
//           }}
//         >
//           {!field?.selectServer &&
//             field.options.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           {field?.selectServer &&
//             options.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
