import ListOfFields from "./ListOfFields.js";
import SectionField from "./Section.js";
import TextFieldRender from "./TextField.js";
import SelectDependant from "./SelectDependant.js";
import SelectFieldRender from "./Select.js";
import RadioFieldRender from "./Radio.js";
import MultiSelectFieldRender from "./MultiSelect.js";
import NumberFieldRender from "./Number.js";
import TextAreaFieldRender from "./TextArea.js";
import CheckboxFieldRender from "./Checkbox.js";
import ColorFieldRender from "./Color.js";
import URLFieldRender from "./Url.js";
import RangeFieldRender from "./Range.js";
import TimeFieldRender from "./Time.js";
import DateFieldRender from "./Date.js";
import DateTimeFieldRender from "./DateTime.js";
import PasswordFieldRender from "./Password.js";
import FileFieldRender from "./File.js";
import SelectOnFieldsRender from "./selectOnFields.js";
import Report from "./Report.js";
import EmailFieldRender from "./Email.js";
import mapper from "../fieldsMapper.js";
import { Grid } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions.js";

export const checkDependancy = (field, formValues, parentValues) => {
  // Dependant logic
  if (field?.dependancyCheck) {
    let dependantFieldValue = null;
    const dependantField = field?.dependancy.dependant;
    const dependValue = field?.dependancy.dependValue;

    // Function to search for dependantField in provided values object
    const findDependantFieldValue = (values) => {
      for (let step in values) {
        if (values[step][dependantField] !== undefined) {
          return values[step][dependantField];
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

    // Check if dependantFieldValue matches any value in dependValue
    const doesValueMatch =
      Array.isArray(dependValue) &&
      dependValue.some((dependObj) => {
        // Normalize values for comparison
        const normalizedDependValue =
          dependObj?.value === "true" ? true : dependObj?.value;
        const normalizedDependantFieldValue =
          dependantFieldValue === "true" ? true : dependantFieldValue;

        return normalizedDependValue === normalizedDependantFieldValue;
      });

    if (!doesValueMatch) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};

// Add the componentsMap here
const componentsMap = {
  SectionField,
  ListOfFields,
  TextFieldRender,
  SelectFieldRender,
  MultiSelectFieldRender,
  NumberFieldRender,
  TextAreaFieldRender,
  CheckboxFieldRender,
  ColorFieldRender,
  URLFieldRender,
  RangeFieldRender,
  RadioFieldRender,
  PasswordFieldRender,
  TimeFieldRender,
  DateFieldRender,
  DateTimeFieldRender,
  FileFieldRender,
  SelectDependant,
  SelectOnFieldsRender,
  Report,
  EmailFieldRender
};

const renderComponent = (field, scopeVariables) => {
  const mapperItem = mapper.find((item) => item.type === field?.type);

  if (!mapperItem) {
    return null; // Handle unknown type
  }

  const { component: ComponentName, inlineProps } = mapperItem;

  // Get the actual Component from componentsMap
  const Component = componentsMap[ComponentName];

  if (!Component) {
    return null; // Handle missing component
  }

  const props = {};

  inlineProps.forEach((propName) => {
    if (scopeVariables.hasOwnProperty(propName)) {
      props[propName] = scopeVariables[propName];
    } else {
      console.warn(`Variable ${propName} is not defined in scope`);
      return null;
    }
  });
  // Render the component with the built props

  return <Component {...props} />;
};

export const renderFields = ({
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
  ancestorsInfo,
  fields,
  parentFields,
  config,
}) => {

  // Scope variables
  const scopeVariables = {
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
    ancestorsInfo,
    fields,
    parentFields,
    serverMode,
    config,
  };
   // Extract viewMode
   const viewMode = config?.viewMode?.mode;
   // Determine if the field should be hidden in create or edit modes
   if (field.hideInCreateForm && (viewMode === "create" || viewMode === "edit" ) ) {
     return null;
   }
   if(field?.hideInViewForm && field.hideInViewForm && viewMode === "view")
   {
      return null;
   }
 
   // Render the component if the field is visible
   return renderComponent(field, scopeVariables);
};



function fieldValues(field) {
  if (field?.type === "checkbox") {
    return field?.value || false;
  } else if (field?.type === "listOfFields") {
    return field?.value || [];
  }
  else if(field?.type==="date"){
    return field?.value || new Date().toISOString().split("T")[0];
  }
  else if(field.type==="dateTime")
  {
    return field?.value || new Date().toISOString();
  }
  else if(field?.type==='number')
  {
    return field?.value ||null;
  }
  else if(field?.type==='select')
    {
      return field?.value ||null;
    }
  else {
    return field?.value || "";
  }
  
}

function generateDynamicKeysForListOfFields(field, parentKey = "") {
  field?.childFields?.forEach((childField) => {
    const isUniqueName = parentKey.split("_").pop() !== field.name;
    const dynamicKey = parentKey
      ? isUniqueName
        ? `${parentKey}_${field.name}_${childField.name}`
        : `${parentKey}_${childField.name}`
      : `${childField.name}`;

    if (childField.type === "section" && childField.childFields) {
      updateDemoFormDataWithDynamicKeys(childField, dynamicKey);
    } else if (childField.type === "listOfFields") {
      // Recursively handle nested listOfFields without adding to formValues
      generateDynamicKeysForListOfFields(childField, dynamicKey);
      // Set the dynamic key on the field object itself
      childField.dynamicKey = dynamicKey;
    } else {
      // Set the dynamic key on the field object itself
      childField.dynamicKey = dynamicKey;
    }
  });
}

export function updateDemoFormDataWithDynamicKeys(field, parentKey = "") {
  if (field.type === "section" && field.childFields) {
    field.childFields.forEach((childField) => {
      // Check if parentKey already includes field.name to avoid duplication
      const isUniqueName = parentKey.split("_").pop() !== field.name;
      const dynamicKey = parentKey
        ? isUniqueName
          ? `${parentKey}_${field.name}_${childField.name}`
          : `${parentKey}_${childField.name}`
        : `${field.name}_${childField.name}`;

      // Set the dynamic key on the field object itself
      childField.dynamicKey = dynamicKey;

      if (childField.type === "section" && childField.childFields) {
        // Recursively process nested sections
        updateDemoFormDataWithDynamicKeys(childField, dynamicKey);
      } else if (childField.type === "listOfFields") {
        // Recursively process
        updateDemoFormDataWithDynamicKeys(childField, dynamicKey);
      }
    });
  } else if (field.type === "listOfFields" && field.childFields) {
    // Set the dynamicKey for listOfFields itself
    generateDynamicKeysForListOfFields(field);
    if (parentKey === "") {
      field.dynamicKey = parentKey
        ? `${parentKey}_${field?.name}`
        : field?.name;
    }
  } else {
    // Set dynamicKey for non-section fields at the top level
    field.dynamicKey = parentKey ? `${parentKey}_${field?.name}` : field?.name;
  }
}

export function initializeFieldValues(field, formValuesStep) {
  // Check if `field` is valid
    if (!field) {
    console.error("Invalid field object: ", field);
    return;
  }

  if (field.type === "section") {
    // Check if `childFields` is an array
    if (Array.isArray(field.childFields)) {
      field.childFields.forEach((childField) => {
        initializeFieldValues(childField, formValuesStep); // Recursive call
      });
    } else {
      console.warn("Field has no childFields or is not an array: ", field);
    }
  } 
  else {
    // Ensure `formValuesStep` and `dynamicKey` are valid
  

    if (formValuesStep && field.dynamicKey) {
      if (!formValuesStep[field.dynamicKey]) {
        formValuesStep[field.dynamicKey] = fieldValues(field);
      }
    } 
    else {
      console.warn(
        "Either formValuesStep is undefined or field.dynamicKey is invalid: ",
        { formValuesStep, dynamicKey: field?.dynamicKey }
      );
    }
  }
}



export const handleInputChange = (
  event,
  field,
  currentStep,
  formValues,
  setFormValues,
  errors,
  setErrors,
  ancestorsInfo,
  formKeys,
  setFormKeys
) => {
  const { name, value, type, checked } = event.target;

  const updatedValues =  formValues?.length ? [...formValues] : []; // Copy the form values array
  const stepValues = { ...updatedValues[currentStep] }; // Copy current step values

  // Use dynamicKey if it exists, otherwise fall back to name
  const key = field?.dynamicKey || name;

  // Update the value based on the input type
  if (type === "checkbox") {
    stepValues[key] = checked;
  } else {
    stepValues[key] = value;
  }

  // Set the updated step values back to the form values array
  updatedValues[currentStep] = stepValues;
  setFormValues(updatedValues);

  if (formValues[0] && name === "name" && formValues[0].type === "section") {
    const keyToMatch = ancestorsInfo
      ? ancestorsInfo + "_" + formValues[0].name
      : formValues[0].name;

    const keyToReplace = ancestorsInfo
      ? ancestorsInfo + "_" + updatedValues[0].name
      : updatedValues[0].name;

    const updatedFormKeys = formKeys.map((key) => {
      if (key.startsWith(keyToMatch)) {
        const suffix = key.slice(keyToMatch.length);
        return keyToReplace + suffix;
      }
      // If the key does not match, return it as is
      return key;
    });

    setFormKeys(updatedFormKeys);
  }

  // Clear the error for the field? if it's being updated
  setErrors({
    ...errors,
    [field?.dynamicKey || name]: null,
  });
};

export const handleAdditionofListOfFields = (
  submittedData,
  field,
  formValues,
  setFormValues,
  currentStep
) => {
  const currentName = field?.dynamicKey;

  // Create a copy of the current formValues
  const updatedFormValues = Array.isArray(formValues) 
  ? [...formValues] 
  : { ...formValues }; // Handle as an object if not an array


  // Update the specific field? with submittedData
  updatedFormValues[currentStep] = {
    ...updatedFormValues[currentStep],
    [currentName]: submittedData, // Replace the previous value with submittedData
  };

  // Update the state with the new formValues
  setFormValues(updatedFormValues);
};

export function selectDependantField(
  field,
  formValues,
  currentStep,
  setFormValues
) {
  if (!field?.selectDependantHandled) {
    let valuesOfDependant = [];

    const dependOptions = field?.dependOptionsOn;
    const keyMatch = field?.dependOptionsKeymatch;

    const extractedKey = field?.dynamicKey;
    const newNamePath = `${extractedKey}.dependOptionsPath`;
    const newNameKey = `${extractedKey}.dependOptionsKey`;

    // Initialize dependant options path and key in form values if not set

    if (!formValues[currentStep][newNamePath]) {
      formValues[currentStep][newNamePath] = field?.dependOptionsOn;
    }
    if (!formValues[currentStep][newNameKey]) {
      formValues[currentStep][newNameKey] = field?.dependOptionsKeymatch;
    }

    // Traverse through each object in formValues to find the dependOptions key
    formValues.forEach((formObj, index) => {
      if (formObj[dependOptions] !== undefined) {
        valuesOfDependant = formObj[dependOptions];
      }
    });

    let valuesHere = [];
    valuesOfDependant.forEach((depend) => {
      if (depend && typeof depend === "object") {
        if (Array.isArray(depend[keyMatch])) {
          depend[keyMatch].forEach((obj) => {
            if (obj && typeof obj === "object") {
              const firstKey = Object.keys(obj)[0];
              const label = obj[firstKey];
              let newOption = { value: label, label: label };
              valuesHere.push(newOption);
            }
          });
        } else {
          if (depend[keyMatch]) {
            const label = depend[keyMatch];
            let newOption = { value: label, label: label };
            valuesHere.push(newOption);
          }
        }
      }
    });
    field.options = valuesHere;
  }
}

export const handleFileChange = (
  event,
  formValues,
  setFormValues,
  currentStep,
  setErrors
) => {
  const { name, files, multiple: isMultiple } = event.target;

  setFormValues((prevValues) => {
    const updatedValues = [...prevValues];
    const currentStepValues = { ...updatedValues[currentStep] }; // Copy current step values

    if (isMultiple) {
      // Append files for multiple selection
      currentStepValues[name] = [
        ...(currentStepValues[name] || []),
        ...Array.from(files),
      ];
    } else {
      // Replace with the single file for non-multiple
      currentStepValues[name] = files[0] || null;
    }

    updatedValues[currentStep] = currentStepValues; // Update current step values
    return updatedValues;
  });

  // Clear error for the field?
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: null, // Clear the error for this field?
  }));
};

export const handleRemoveFile = (
  fieldName,
  fileToRemove,
  formValues,
  setFormValues,
  currentStep
) => {
  setFormValues((prevValues) => {
    const updatedValues = [...prevValues];
    const currentStepValues = { ...updatedValues[currentStep] }; // Copy the values for the current step

    const currentFiles = currentStepValues[fieldName]; // Get current files
    if (Array.isArray(currentFiles)) {
      // Filter only if it's an array
      currentStepValues[fieldName] = currentFiles.filter(
        (file) => file.name !== fileToRemove.name
      );
    } else {
      // If not an array, remove the value entirely
      delete currentStepValues[fieldName];
    }

    updatedValues[currentStep] = currentStepValues; // Update the current step
    return updatedValues;
  });
};

export const handleRemoveAllFiles = (
  fieldName,
  formValues,
  setFormValues,
  currentStep
) => {
  setFormValues((prevValues) => {
    const updatedValues = [...prevValues];
    const currentStepValues = { ...updatedValues[currentStep] }; // Copy the values for the current step

    currentStepValues[fieldName] = []; // Clear all files for the specified field?

    updatedValues[currentStep] = currentStepValues; // Update the current step
    return updatedValues;
  });
};
