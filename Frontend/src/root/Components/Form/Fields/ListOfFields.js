import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Typography, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Form } from "../Form";
import {
  handleAdditionofListOfFields,
  initializeFieldValues,
  updateDemoFormDataWithDynamicKeys,
  checkDependancy
} from "./HelperFunctions";
import { current } from "@reduxjs/toolkit";

const StyledTableCell = styled(TableCell)(({ theme, headerColor }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: headerColor || theme.palette.primary.dark, // Use the passed color or fallback to the theme color
    color: theme.palette.common.white,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizationTable({
serverMode,
  field,
  inputFields,
  formValues,
  setFormValues,
  currentStep,
  formKeys,
  setFormKeys,
  parentValues,
  ancestorsInfo,
  fields,
  parentFields
}) {
  const nameOfField = field.name;
  const dynamicKeyOfField = field.dynamicKey;
  let innital = [];
  const childName = field.name === "childFields" ? "childFields" : null;

  const childForDemoFields = [
    {
      name: "name",
      dynamicKey: "name",
      label: "Enter the name of the field",
      type: "textField",
      required: true,
    },
    {
      name: "label",
      dynamicKey: "label",
      label: "Enter the label of the field",
      type: "textField",
      required: true,
    },
    {
      type: "textField",
      name: "title",
      dynamicKey: "title",
      label: "Title Of Field",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "section" }],
      },
    },
    {
      name: "type",
      dynamicKey: "type",
      label: "Enter the type of the field",
      type: "select",
      options: [
        { value: "section", label: "Section" },
        { value: "listOfFields", label: "List of Fields" },
        { value: "textField", label: "Text Field" },
        { value: "select", label: "Select" },
        { value: "multiSelect", label: "Multi Select" },
        { value: "number", label: "Number" },
        { value: "textArea", label: "Text Area" },
        { value: "file", label: "File" },
        { value: "checkbox", label: "Checkbox" },
        { value: "date", label: "Date" },
        { value: "time", label: "Time" },
        { value: "dateTime", label: "Date and Time" },
        { value: "color", label: "Color" },
        { value: "url", label: "URL" },
        { value: "range", label: "Range" },
        {
          value: "radio",
          label: "Radio (single Select Checkbox)",
        },
        { value: "password", label: "Password" },
        { value: "selectDependant", label: "Select Dependant" },
      ],
      required: true,
    },
    {
      name: "required",
      dynamicKey: "required",
      label: "Is the field required",
      type: "checkbox",
    },
    {
      name: "textCustomization",
      label: "Text Customization",
      type: "section",
      title: "Text Customization",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [
          { value: "report" },
        ],
      },
      childFields: [
        {
          name: "toolbar",
          label: "Toolbar",
          type: "section",
          title: "Toolbar",
          childFields: [
            {
              name: "basicFormatting",
              label: "Basic Formatting",
              type: "section",
              title: "Basic Formatting",
              childFields: [
                { name: "bold", label: "Bold", type: "checkbox", value: true },
                { name: "italic", label: "Italic", type: "checkbox", value: true },
                { name: "underline", label: "Underline", type: "checkbox", value: true },
                { name: "strike", label: "Strike", type: "checkbox", value: true },
                { name: "clear", label: "Clear Formatting", type: "checkbox", value: true },
              ],
            },
            {
              name: "advancedFormatting",
              label: "Advanced Formatting",
              type: "section",
              title: "Advanced Formatting",
              childFields: [
                { name: "highlight", label: "Highlight", type: "checkbox", value: true },
                { name: "codeBlock", label: "Code Block", type: "checkbox", value: true },
                { name: "blockquote", label: "Blockquote", type: "checkbox", value: true },
                { name: "horizontalLine", label: "Horizontal Line", type: "checkbox", value: true },
              ],
            },
            {
              name: "headers",
              label: "Headers",
              type: "section",
              title: "Headers",
              childFields: [
                { name: "h1", label: "H1", type: "checkbox", value: true },
                { name: "h2", label: "H2", type: "checkbox", value: true },
                { name: "h3", label: "H3", type: "checkbox", value: true },
                { name: "h4", label: "H4", type: "checkbox", value: true },
                { name: "h5", label: "H5", type: "checkbox", value: true },
                { name: "h6", label: "H6", type: "checkbox", value: true },
              ],
            },
            {
              name: "lists",
              label: "Lists",
              type: "section",
              title: "Lists",
              childFields: [
                { name: "unorderedList", label: "Unordered List", type: "checkbox", value: true },
                { name: "orderedList", label: "Ordered List", type: "checkbox", value: true },
              ],
            },
            {
              name: "superscriptSubscript",
              label: "Superscript and Subscript",
              type: "section",
              title: "Superscript and Subscript",
              childFields: [
                { name: "sup", label: "Superscript", type: "checkbox", value: true },
                { name: "sub", label: "Subscript", type: "checkbox", value: true },
              ],
            },
            {
              name: "alignment",
              label: "Alignment",
              type: "section",
              title: "Alignment",
              childFields: [
                { name: "alignLeft", label: "Align Left", type: "checkbox", value: true },
                { name: "alignCenter", label: "Align Center", type: "checkbox", value: true },
                { name: "alignRight", label: "Align Right", type: "checkbox", value: true },
                { name: "alignJustify", label: "Align Justify", type: "checkbox", value: true },
              ],
            },
            {
              name: "links",
              label: "Links",
              type: "section",
              title: "Links",
              childFields: [
                { name: "link", label: "Link", type: "checkbox", value: true },
                { name: "unlink", label: "Unlink", type: "checkbox", value: true },
              ],
            },
            {
              name: "colors",
              label: "Colors",
              type: "section",
              title: "Colors",
              childFields: [
                { name: "color", label: "Color", type: "checkbox", value: true },
              ],
            },
            {
              name: "actions",
              label: "Actions",
              type: "section",
              title: "Actions",
              childFields: [
                { name: "undo", label: "Undo", type: "checkbox", value: true },
                { name: "redo", label: "Redo", type: "checkbox", value: true },
                { name: "insertTag", label: "Insert Tag", type: "checkbox", value: true },
              ],
            },
          ],
        },
        {
          name: "predefinedTags",
          label: "Predefined Tags",
          type: "section",
          title: "Predefined Tags",
          childFields: [
            { name: "studentName", label: "Student Name", type: "checkbox", value: true },
            { name: "rollNumber", label: "Roll Number", type: "checkbox", value: true },
            { name: "courseTitle", label: "Course Title", type: "checkbox", value: true },
            { name: "enrollmentDate", label: "Enrollment Date", type: "checkbox", value: true },
            { name: "programName", label: "Program Name", type: "checkbox", value: true },
            { name: "totalCredits", label: "Total Credits", type: "checkbox", value: true },
          ],
        },
        {
          name: "buttons",
          label: "Buttons",
          type: "section",
          title: "Buttons",
          childFields: [
            {
              name: "generateReport",
              label: "Generate Report",
              type: "checkbox",
              value: true,
            },
            {
              name:"onClick",
              label:"On Click",
              type:"textField",
              value:'console.log("Generate Report");',
              dependancyCheck:true,
              dependancy:{
                dependant:"textCustomization_buttons_generateReport",
                dependValue:[
                  {value:true}
                ]
              }
            }
          ],
        },
      ],
    },
    {
      name:"hideInCreateForm",
      label:"Hide in Add/Update Form",
      type:"checkbox"
    },
    {
      name:"visible",
      label:"Visible in List?",
      type:"checkbox"
      
    },
    {
      name: "disabled",
      dynamicKey: "disabled",
      label: "Is the field disabled",
      type: "checkbox",
    },
    { 
      name:"selectServer",
      label:"is Select Server Driven",
      type:"checkbox",
      dependancyCheck:true,
      dependancy:{
        dependant:"type",
        dependValue:[
          {value:"select"},
          {value:"multiSelect"},
        ]
      }
    },
    {
      name:"selectServerUrl",
      label:"Enter Select Server Url",
      type:"url",
      dependancyCheck:true,
      dependancy:{
        dependant:"selectServer",
        dependValue:[
          {value:true}
        ]
      }
    },
    {
      name: "dependOptionsOn",
      dynamicKey: "dependOptionsOn",
      label: "Field path for Depend options",
      type: "textField",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "selectDependant" }],
      },
    },
    {
      name: "dependOptionsKeymatch",
      dynamicKey: "dependOptionsKeymatch",
      label: "Key to match",
      type: "textField",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "selectDependant" }],
      },
    },
    {
      type: "listOfFields",
      name: "childFields",
      dynamicKey: "childFields",
      label: "Add Child Fields",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "section" }, { value: "listOfFields" }],
      },
    },
    {
      type: "listOfFields",
      name: "options",
      dynamicKey: "options",
      label: "Add Options",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [
          { value: "radio" },
          { value: "select" },
          { value: "multiSelect" },
        ],
      },
      childFields: [
        {
          type: "textField",
          name: "value",
          label: "Enter Value",
          required: true,
        },
        {
          type: "textField",
          name: "label",
          label: "Enter Label",
          required: true,
        },
      ],
    },
    {
      type: "checkbox",
      name: "multiple",
      dynamicKey: "multiple",
      label: "Enable multiple File Upload?",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "file" }],
      },
    },
    {
      type: "number",
      name: "min",
      dynamicKey: "min",
      label: "Minimum Value",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [
          { value: "textField" },
          { value: "number" },
          { value: "textArea" },
        ],
      },
    },
    {
      type: "number",
      name: "max",
      dynamicKey: "max",
      label: "Maximum Value",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [
          { value: "textField" },
          { value: "number" },
          { value: "textArea" },
        ],
      },
    },
    {
      type: "date",
      name: "minDate",
      dynamicKey: "minDate",
      label: "Minimum Date",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "date" }],
      },
    },
    {
      type: "date",
      name: "maxDate",
      dynamicKey: "maxDate",
      label: "Maximum Date",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "date" }],
      },
    },
    {
      type: "dateTime",
      name: "minDateTime",
      dynamicKey: "minDateTime",
      label: "Minimum Date and Time",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "dateTime" }],
      },
    },
    {
      type: "dateTime",
      name: "maxDateTime",
      dynamicKey: "maxDateTime",
      label: "Maximum Date and Time",
      dependancyCheck: true,
      dependancy: {
        dependant: "type",
        dependValue: [{ value: "dateTime" }],
      },
    },
    {
      name: "dependancyCheck",
      dynamicKey: "dependancyCheck",
      label: "Is this Field Dependant?",
      type: "checkbox",
    },
    {
      name: "dependancy",
      title: "Dependancy",
      type: "section",
      dependancyCheck: true,
      dependancy: {
        dependant: "dependancyCheck",
        dependValue: [{ value: "true" }],
      },
      childFields: [
        {
          name: "dependant",
          label: "This is Field is Dependent on",
          type: "selectOnFields",
        },
        {
          name: "dependValue",
          dynamicKey: "dependValue",
          label: "values Of dependant",
          type: "listOfFields",
          childFields: [
            {
              name: "value",
              type: "textField",
              label: "Value",
            },
          ],
        },
      ],
    },
    {
      name: "isPrefilled",
      dynamicKey: "isPrefilled",
      label: "Is this field prefilled?",
      type: "checkbox",
    },
    {
      name: "prefillField",
      dynamicKey: "prefillField",
      label: "Field Prefilled On",
      type: "selectOnFields",
      dependancyCheck: true,
      dependancy: {
        dependant: "isPrefilled",
        dependValue: [
          { value: "true" }
        ],
      },
    }
  ];

  const childFieldsTotal =
    field.name === childName
      ? childForDemoFields
      : field.childFields
      ? field.childFields
      : [];

  const calculateInitialForms = () => {
    const initialData = Array.isArray(formValues)&&formValues?.find(
      (item) => item && item[dynamicKeyOfField]
    );
    return initialData ? initialData[dynamicKeyOfField] : [];
  };

  Array.isArray(formValues)&&formValues?.forEach((item) => {
    if (item && item[dynamicKeyOfField]) {
      innital = item[dynamicKeyOfField];
    }
  });



  const [newColumnModalOpen, setNewColumnModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [submittedForms, setSubmittedForms] = useState(calculateInitialForms);
  const [editData, setEditData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Set the initial data only if submittedForms is empty to prevent overwriting on updates
    if (submittedForms.length === 0) {
      const initialForms = calculateInitialForms();
      setSubmittedForms([...initialForms]); // Spread to create a new reference
    }
  }, [formValues, dynamicKeyOfField]);

  const buildFieldsWithValues = (index, submittedForms, childFieldsTotal) => {
    const formObject = submittedForms[index]; // Object for the specified index

    // Helper function to recursively traverse fields
    const processFieldHierarchy = (fields, currentKeyPrefix = "") => {
      return fields.map((field) => {
        const { name, type, childFields } = field;
        let dynamicKey = currentKeyPrefix
          ? `${currentKeyPrefix}_${name}`
          : name;

        // If field is a section, recurse through its child fields
        if (type === "section") {
          return {
            ...field,
            childFields: processFieldHierarchy(childFields || [], dynamicKey),
          };
        }
        // Set value from submittedForms if it matches dynamicKey
        const value = formObject
          ? formObject[dynamicKey]
            ? formObject[dynamicKey]
            : null
          : null;

        return { ...field, value }; // Return field with the value set
      });
    };

    // Start processing the hierarchy from the root fields
    const processedFields = processFieldHierarchy(childFieldsTotal);

    return processedFields;
  };

  const handleObjectAdd = (formData, ancestorsFromForm) => {
    //updateFormKeys(formValues, formData, formKeys, setFormKeys);

    const dataToAdd = Array.isArray(formData)
      ? formData
      : Object.values(formData).map((innerObject) => ({ ...innerObject }));
    setSubmittedForms((prevForms) => {
      const newForms = [...prevForms, ...dataToAdd];
      handleAdditionofListOfFields(
        newForms,
        field,
        formValues,
        setFormValues,
        currentStep
      );
      return newForms; 
    });

    if (formValues[0].type === "listOfFields"){
      let newKey = ancestorsFromForm
      if (newKey) {
        setFormKeys((prevKeys) => {
          if (!prevKeys.includes(newKey)) {
            return [...prevKeys, newKey];
          }
          return prevKeys; // If the key already exists, return the existing array
        });
      }
    }

    else if (formData[0].type !== "section") {
      let newKey = ancestorsFromForm ? ancestorsFromForm + "_" + formData[0].name : formData[0].name;
      
      if (newKey) {
        setFormKeys((prevKeys) => {
          if (!prevKeys.includes(newKey)) {
            return [...prevKeys, newKey];
          }
          return prevKeys; // If the key already exists, return the existing array
        });
      }
    }

    updateDemoFormDataWithDynamicKeys(formData[0])
  };

  useEffect(() => {
    if (childFieldsTotal) {
      const selectDependantFields = childFieldsTotal.filter(
        (child) => child.type === "selectDependant"
      );

      selectDependantFields.forEach((selectField) => {
        const dependOptions = selectField.dependOptionsOn;
        const keyMatch = selectField.dependOptionsKeymatch;

        selectField.selectDependantHandled = true;
        submittedForms.map((form) => {
          if (!form.dependOptionsPath) {
            form.dependOptionsPath = selectField.dependOptionsOn;
          }
          if (!form.dependOptionsKey) {
            form.dependOptionsKey = selectField.dependOptionsKeymatch;
          }
        });

        let valuesOfDependant = [];

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
          }
          else {
            if (depend[keyMatch]) {
              const label = depend[keyMatch];
              let newOption = { value: label, label: label };
              valuesHere.push(newOption);
            }
          }
        }
      });
        selectField.options = valuesHere;
      });
    }
  }, [formValues]);

  const handleDeleteRow = (index) => {
    const keyToMatch = ancestorsInfo ? ancestorsInfo + "_" + formValues[0].name + "_" + submittedForms[index].name : formValues[0].name + "_" + submittedForms[index].name;
    
    setFormKeys((prevFormKeys) => 
      prevFormKeys.filter((key) => !key?.startsWith(keyToMatch))
    );

    setSubmittedForms((prevForms) => {
      const newForms = prevForms.filter((_, i) => i !== index);
      handleAdditionofListOfFields(
        newForms,
        field,
        formValues,
        setFormValues,
        currentStep
      ); 
      return newForms;
    });

  };

  const handleEditRow = (index) => {
    setEditData(buildFieldsWithValues(index, submittedForms, childFieldsTotal));
    setEditIndex(index);
    setEditModalOpen(true);
  };

  const handleEditSubmit = (formData, ancestorsFromForm) => {

    const keyToMatch = ancestorsInfo ? ancestorsInfo + "_" + formValues[0].name + "_" + submittedForms[editIndex].name : formValues[0].name + "_" + submittedForms[editIndex].name;
    
    setFormKeys((prevFormKeys) => 
      prevFormKeys.filter((key) => !key?.startsWith(keyToMatch))
    );

    const dataToUpdate = Array.isArray(formData)
      ? formData[0]
      : formData;

    if (editIndex !== null) {
      setSubmittedForms((prevForms) => {
        const newForms = prevForms.map((form, i) =>
          i === editIndex ? dataToUpdate : form
        );
        handleAdditionofListOfFields(
          newForms,
          field,
          formValues,
          setFormValues,
          currentStep
        ); // Pass newForms here
        return newForms; // Return the updated state
      });
    }
    setEditModalOpen(false);
    setEditData(null);
    setEditIndex(null);

    if (formValues[0].type === "listOfFields"){
      let newKey = ancestorsFromForm

      if (newKey) {
        setFormKeys((prevKeys) => {
          if (!prevKeys.includes(newKey)) {
            return [...prevKeys, newKey];
          }
          return prevKeys; // If the key already exists, return the existing array
        });
      }
    }

    else if (formData[0].type !== "section") {
      let newKey = ancestorsFromForm ? ancestorsFromForm + "_" + formData[0].name : formData[0].name;
      
      if (newKey) {
        setFormKeys((prevKeys) => {
          if (!prevKeys.includes(newKey)) {
            return [...prevKeys, newKey];
          }
          return prevKeys; // If the key already exists, return the existing array
        });
      }
    }

    updateDemoFormDataWithDynamicKeys(formData[0])

  };

 

  const updateChildKeys = (field, keys) => {
    if (field.type === "section") {
      field.childFields.forEach((child) => 
        updateChildKeys(child, keys)
      ); 
    } 
    else {
      const newKey = `${field.dynamicKey}`;
      keys.push(newKey);
    }
  }

  const [childFieldsKeys, setChildFieldsKeys] = useState([]);

  useEffect (() => {
    if (field.dynamicKey === "childFields") {
      if (formValues[0].type === "listOfFields") {
        if (submittedForms.length > 0) {
          const keys = []
          keys.push(...formKeys);
          submittedForms?.map((field, i) =>{
            updateChildKeys (field, keys)
          })
          setChildFieldsKeys(keys);
        }
      }
    }
  }, [submittedForms])

  const fieldModalProps = {
    data: {
      features: {
        submission: {
          steps: [
            {
              //step 1
              title: "",
              parameters: {
                fields: childFieldsTotal,
              },
              buttons: [
                {
                  type: "submit",
                  label: "Submit",
                },
                {
                  type: "close",
                  label: "Close",
                  onClick: () => setNewColumnModalOpen(false),
                },
              ],
              permission: "<permission>",
              onAction: handleObjectAdd,
              options: {
                submitMethod: "POST",
              },
            },
          ],
        },
      },
    },

    config: {
      viewMode: {
        presentation: "modalView",
        mode: "edit",
      },
      features: {
        submission: true,
      },
    },

    appearance: {
      features: {
        submission: {
          buttons: [
            {
              type: "submit",
              color: "#75ba75",
            },
            {
              type: "next",
              color: "#be95be",
            },
            {
              type: "previous",
              color: "#be95be",
            },
          ],
          inputFields: inputFields,
          // background: {
          //   color: "#efd6d6",
          // },
        },
      },
    },
  };

  const editModalProps = {
    ...fieldModalProps,
    config: {
      ...fieldModalProps.config,
      viewMode: {
        ...fieldModalProps.config.viewMode,
        mode: "edit",
      },
    },
    data: {
      ...fieldModalProps.data,
      features: {
        ...fieldModalProps.data.features,
        submission: {
          steps: [
            {
              ...fieldModalProps.data.features.submission[0],
              title: "Edit",
              parameters: {
                fields: editData,
              },
              buttons: [
                {
                  type: "submit",
                  label: "Submit",
                },
                {
                  type: "close",
                  label: "Close",
                  onClick: () => setEditModalOpen(false),
                },
              ],
              onAction: handleEditSubmit, // Link to edit submit handler
            },
          ],
        },
      },
    },
  };

  const flattenFields = (fields, prefix = "") => {
    let flatFields = [];
    fields.forEach((field) => {
      const path = prefix ? `${prefix}.${field.name}` : field.name;
      if (field.type === "section" && field.childFields) {
        // Recursive call for section
        flatFields = [...flatFields, ...flattenFields(field.childFields, path)];
      } else {
        flatFields.push({ ...field, path });
      }
    });
    return flatFields;
  };

  const flattenedFields = flattenFields(childFieldsTotal);

  useEffect (() => {
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
  }, [])//formValues[currentStep][field.prefillField]

  if (field.hidden){
    initializeFieldValues (field, formValues[currentStep])
    return null;
  }

  if (!checkDependancy (field, formValues, parentValues)) {
    return null; 
  }
  else{
    initializeFieldValues (field, formValues[currentStep])
  }
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        p: "25px",
        mb: "15px",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        onClick={() => setNewColumnModalOpen(true)}
        sx={{
          mt: 2, // Margin top to add spacing above the button
          mb: 2, // Margin bottom to add spacing below the button
          width: "100%", // Optional: makes the button full width
          display: "block", // Ensures the button appears on a new line
          padding: "5px 24px",
          backgroundColor: inputFields?.color || "defaultColor", // Set to a default color if it doesn't exist
          "&:hover": {
            backgroundColor: inputFields?.color || "defaultHoverColor", // Set hover color
          },
        }}
      >
        {field.label}
      </Button>
      {/* Conditional Logic */}
      {(() => {

        let listOfFieldsChildAdd = false;

        if (newColumnModalOpen || editModalOpen) {
          if (
            field.dynamicKey === "childFields" &&
            formValues[0].type === "listOfFields"
          ) 

          {
            listOfFieldsChildAdd = true;
          }
        }

        return (
          <>
          {newColumnModalOpen && (
            <Form
              data={fieldModalProps.data}
              config={fieldModalProps.config}
              appearance={fieldModalProps.appearance}
              formKeysPass={listOfFieldsChildAdd ? childFieldsKeys : formKeys}
              setFormKeysPass={listOfFieldsChildAdd ? setChildFieldsKeys : setFormKeys}
              parentValues={formValues}
              parentFields={fields}
              ancestorsInfo={formValues[0]?.type == "section" || formValues[0]?.type == "listOfFields" ? (ancestorsInfo ? ancestorsInfo + "_" + formValues[0]?.name : formValues[0]?.name) : ancestorsInfo}
            />
          )}
          {editModalOpen && (
            <Form
              data={editModalProps.data}
              config={editModalProps.config}
              appearance={editModalProps.appearance}
              formKeysPass={listOfFieldsChildAdd ? childFieldsKeys : formKeys}
              setFormKeysPass={listOfFieldsChildAdd ? setChildFieldsKeys : setFormKeys}
              parentValues={formValues}
              parentFields={fields}
              ancestorsInfo={formValues[0].type == "section" || formValues[0].type == "listOfFields" ? (ancestorsInfo ? ancestorsInfo + "_" + formValues[0].name : formValues[0].name) : ancestorsInfo}
            />
          )}
          </>
        );
      })()}

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {flattenedFields.map((childField) => (
                <StyledTableCell
                  key={childField.path}
                  headerColor={inputFields?.color}
                >
                  {childField.label || childField.name}
                </StyledTableCell>
              ))}
              <StyledTableCell headerColor={inputFields?.color}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(submittedForms) && submittedForms?.map((form, index) => {
              return (
                <StyledTableRow key={index}>
                  {flattenedFields.map((childField, ind) => {
                    if (childField.type === "listOfFields") {
                      return (
                        <StyledTableCell key={ind}>
                          {Array.isArray(
                            form[childField.dynamicKey || childField.name]
                          ) ? (
                            form[childField.dynamicKey]?.map((item, i) => {
                              const firstKey = Object.keys(item)[0];
                              return (
                                <span key={i}>
                                  {item[firstKey]}
                                  {i < form[childField.dynamicKey].length - 1
                                    ? ", "
                                    : ""}{" "}
                                  {/* Comma separator */}
                                </span>
                              );
                            })
                          ) : (
                            <span>{form[childField.dynamicKey]}</span>
                          )}
                        </StyledTableCell>
                      );
                    } else {
                      return (
                        <StyledTableCell key={ind}>
                          {form[childField.dynamicKey || childField.name]}
                        </StyledTableCell>
                      );
                    }
                  })}
                  <StyledTableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditRow(index)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteRow(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}