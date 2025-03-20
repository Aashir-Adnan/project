import React, { useState } from "react";
import {
    Box,
    FormControl,
    TextField,
    Checkbox,
    FormControlLabel,
  } from "@mui/material";  
  
import { handleInputChange, initializeFieldValues, checkDependancy } from "./HelperFunctions";

export default function PasswordField({
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
  fields,
  parentFields
}) {  
  const [showPassword, setShowPassword] = useState(false);

  if (field.hidden){
    initializeFieldValues (field, formValues[currentStep])
    return null;
  }

  if (!checkDependancy (field, formValues, parentValues)) {
    return null; // Skip rendering if field is not dependent on any other field
  }
  else{
    if (field.isPrefilled) {
      const toPrefill = field.prefillField;
      let fieldFound = undefined;
      const findField = (field, toPrefill) => {
        if (field.type === "section"){
          field.childFields.map(child => {
            const found = findField(child, toPrefill)
            if (found) return found
          })
        }
        else {
          if (field.dynamicKey === toPrefill) {
            fieldFound = field
          }
        }
      }

      fields.map(step => {
        step[0].map(field => {
          findField(field, toPrefill)
        })
      }) 

      if (!fieldFound) {
        parentFields.map(step => {
          step[0].map(field => {
            findField(field, toPrefill)
          })
        }) 
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
            formValues[currentStep][field.dynamicKey] = dependantFieldValue
          }
        }
      }
    }
    initializeFieldValues (field, formValues[currentStep])
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flexStart",
        gap: 2,
        mb: 2,
      }}
    >
      <FormControl key={field.name} fullWidth>
        <TextField
          fullWidth
          key={field.name}
          type={showPassword ? "text" : "password"}
          name={field.name}
          label={field.label}
          onChange={(e) =>
            handleInputChange(
              e,
              field,
              currentStep,
              formValues,
              setFormValues,
              errors,
              setErrors,
            )
          }
          defaultValue={field.defaultValue}
          value={
        Array.isArray(formValues)
          ? formValues[currentStep]?.[field?.dynamicKey] || ""
          : formValues[field?.dynamicKey] || ""
      }
          margin="normal"
          variant={variant}
          required={isRequired && field.required}
          disabled={field.disabled || isReadOnly}
          error={Boolean(errors[field?.dynamicKey])}
          helperText={errors[field?.dynamicKey]}
          sx={{
            ...(inputFields && {
              color: inputFields?.color,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: inputFields?.color,
                },
                "&:hover fieldset": {
                  borderColor: inputFields?.color,
                },
                "&.Mui-focused fieldset": {
                  borderColor: inputFields?.color,
                },
                "& input": {
                  color: inputFields?.color,
                },
              },
              "& .MuiInputLabel-root": {
                color: inputFields?.color,
                "&.Mui-focused": {
                  color: inputFields?.color,
                },
              },
              "& .MuiInputLabel-shrink": {
                color: inputFields?.color,
              },
            }),
          }}
        />
        {(
          <FormControlLabel
            control={
              <Checkbox
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            }
            label="Show Password"
          />
        )}
      </FormControl>
    </Box>
  );
}
