import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Typography, Button, IconButton, Grid } from "@mui/material";
import { renderFields, checkDependancy } from "./HelperFunctions";

export default function SectionField({
serverMode,
  field,
  inputFields,
  formValues,
  isRequired,
  isReadOnly,
  setFormValues,
  allTagValues,
  setAllTagValues,
  currentStep,
  errors,
  setErrors,
  variant,
  formKeys,
  setFormKeys,
  parentValues,
  fields,
  parentFields,
  config
}) {
  if (!checkDependancy (field, formValues, parentValues)) {
    return null; // Skip rendering if field is not dependent on any other field
  }
  return (
    <>
    {field?.title && (
      <Typography
        sx={{
          fontSize: "1.2rem", // Adjust text size for readability
          fontWeight: "bold", // Make it stand out
          color: inputFields ? inputFields?.color : "primary", // Use theme's primary color
          letterSpacing: "0.5px", // Slight spacing for elegance
          padding: "8px 16px", // Add padding for spacing
        }}
      >
        {field.title}
      </Typography>
      )}
      <Card
        sx={{
          borderRadius: "10px",
          p: "5px",
          mb: "15px",
          width: "100%",
        }}
      >
        <Grid>
          {field?.childFields?.map((child, index) => {
            return renderFields({
              field: child,
              formValues,
              inputFields,
              isRequired,
              isReadOnly,
              setFormValues,
              allTagValues,
              setAllTagValues,
              currentStep,
              errors,
              setErrors,
              variant,
              formKeys,
              setFormKeys,
              fields,
              parentFields,
              config
            });
          })}
        </Grid>
      </Card>
    </>
  );
}

// FilePreview component to handle different file
