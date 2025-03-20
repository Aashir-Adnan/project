import React, { Fragment } from "react";
import {
  Box,
  Button,
  FormControl,
  Typography,
  IconButton,
  Card,
  List,
  ListItem,
  Link,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useDropzone } from "react-dropzone";

import {
  handleFileChange,
  handleRemoveFile,
  handleRemoveAllFiles,
  initializeFieldValues,
  checkDependancy
} from "./HelperFunctions";

// Reusable FileList Component
const FileList = ({ files, onRemoveFile, onRemoveAll, isMultiple }) => {
  const styles = {
    fileDetails: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    filePreview: {
      marginRight: "10px",
    },
    fileName: {
      fontWeight: "bold",
    },
  };

  return (
    <Fragment>
      <List>
        {(isMultiple ? files : [files]).map((file, index) => (
          <ListItem
            key={index}
            sx={{
              border: "1px solid #eee",
              justifyContent: "space-between",
              mt: "10px",
              mb: "10px",
            }}
            className="dark-border"
          >
            <div className={styles.fileDetails}>
              <div className={styles.filePreview}>
                {file.type.startsWith("image") ? (
                  <img width={38} alt={file.name} src={URL.createObjectURL(file)} />
                ) : (
                  <FileCopyIcon />
                )}
              </div>
              <div>
                <Typography className={styles.fileName}>{file.name}</Typography>
              </div>
            </div>
            <IconButton onClick={() => onRemoveFile(file)}>
              <ClearIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {isMultiple && files.length > 1 && (
        <Button
          color="error"
          variant="contained"
          onClick={onRemoveAll}
          sx={{
            textTransform: "capitalize",
            color: "#fff !important",
          }}
        >
          Remove All
        </Button>
      )}
    </Fragment>
  );
};

// Main FileField Component
export default function FileField({
  field,
  errors,
  setErrors,
  isRequired,
  isReadOnly,
  inputFields,
  formValues,
  setFormValues,
  currentStep,
  parentValues,
  fields,
  parentFields
}) {

  const isMultiple = field.multiple;
  const files = formValues[currentStep][field.dynamicKey];

  const onDrop = (acceptedFiles) => {
    const event = {
      target: {
        name: field.dynamicKey,
        files: isMultiple ? acceptedFiles : [acceptedFiles[0]],
        multiple: isMultiple,
      },
    };
    handleFileChange(event, formValues, setFormValues, currentStep, setErrors);
  };
  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: isMultiple,
    disabled: field.disabled || isReadOnly,
  });

  if (field.hidden){
    initializeFieldValues (field, formValues[currentStep])
    return null;
  }

  if (!checkDependancy (field, formValues, parentValues)) {
    return null; // Skip rendering if field is not dependent on any other field
  }
  else {
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
    <FormControl key={field.name} fullWidth margin="normal">
      <Typography color={inputFields?.color}>{field.label}</Typography>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
          border: `2px dashed ${inputFields?.color || "#ccc"}`,
          position: "relative",
        }}
      >
        {/* Dropzone */}
        <Box
          {...getRootProps()}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "pointer",
            backgroundColor: isDragActive ? "#f0f8ff" : "transparent",
          }}
        >
          <input {...getInputProps()} />
          <Typography variant="h6" color={inputFields?.color}>
            {isDragActive
              ? "Drop the files here..."
              : "Drag and drop files here or click to select files"}
          </Typography>
        </Box>

        {/* Display Selected Files */}
        {files && (
          <FileList
            files={files}
            onRemoveFile={(file) =>
              handleRemoveFile(
                field.dynamicKey,
                file,
                formValues,
                setFormValues,
                currentStep,
                isMultiple
              )
            }
            onRemoveAll={() =>
              handleRemoveAllFiles(
                field.dynamicKey,
                formValues,
                setFormValues,
                currentStep
              )
            }
            isMultiple={isMultiple}
          />
        )}
      </Card>

      {/* Show error message if present */}
      {errors[field.dynamicKey] && (
        <Typography color="error" variant="caption">
          {errors[field.dynamicKey]}
        </Typography>
      )}
    </FormControl>
  );
}
