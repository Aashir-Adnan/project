import React, { useEffect, useState, forwardRef, useRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Card,
  Stepper,
  Step,
  StepLabel,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
// import { actionSkeleton } from "../../../../redux/Actions/ActionSkeleton";
import { getServerResponse } from "../Helpers/getServerResponse";
import {
  renderFields,
  updateDemoFormDataWithDynamicKeys,
} from "./Fields/HelperFunctions";
import BasicTabs from "./FeatureTabs";

export const Form = forwardRef(
  (
    {
      data,
      config,
      appearance,
      formKeysPass,
      setFormKeysPass,
      parentValues,
      parentFields,
      ancestorsInfo = null,
      demoView = false,
      isModalOpen,
      setIsModalOpen,
      queryParamsId = null,
      countries = null,
    },
    ref
  ) => {
    const { main } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(isModalOpen);

    const { features: { submission } = {} } = data || {};

    const { viewMode: { presentation, mode } = {} } = config || {};
    const [previousStep, setPreviousStep] = useState(0);

    const {
      features: {
        submission: { buttons = [], inputFields = {}, background = {} } = {},
      } = {},
    } = appearance;

    // Extract the onAction values into a new array
    const onAction = submission?.steps?.map(
      (submission) => submission?.onAction
    );

    // Get the `onClick` of the first `close` button if it exists
    const closeButton = submission?.steps?.find(
      (step) =>
        Array.isArray(step.buttons) &&
        step.buttons.some((btn) => btn.type === "close")
    );

    const [localCopyFormKeys, setLocalCopyFormKeys] = useState(formKeysPass);

    const closeButtonOnClick = closeButton?.buttons.find(
      (btn) => btn.type === "close"
    )?.onClick;

    const onlyClose = () => {
      if (setFormKeysPass && localCopyFormKeys) {
        setFormKeysPass(localCopyFormKeys);
      }

      handleDialogClose();
    };

    const handleDialogClose = () => {
      if (setIsModalOpen) {
        setIsModalOpen(false);
      }
      if (closeButton) closeButtonOnClick();
      else setOpenModal(false);
    };

    const stepsData = submission?.steps?.map((step) => {
      return {
        title: step.title,
        parameters: {
          fields: step.parameters ? step.parameters.fields : [],
        },
      };
    });

    let isModal = presentation === "modalView" ? true : false;

    // Handle whether fields are disabled based on mode
    const isReadOnly = mode === "view";
    const variant = isReadOnly ? "standard" : "outlined";
    const isRequired = !isReadOnly;

    function generateDynamicKeys() {
      stepsData?.map((step) => {
        step?.parameters?.fields?.forEach((field) => {
          updateDemoFormDataWithDynamicKeys(field);
        });
      });
    }

    useEffect(() => {
      console.log("FormValuesssss", formValues);
      const updatedFields = stepsData?.map((step) => [
        step?.parameters?.fields,
      ]);
      setFields(updatedFields);
      generateDynamicKeys();
    }, [data]);

    const initialFormValues = stepsData?.map(() => {
      return {};
    });

    // async function getServerResponse(
    //   serverCommunication,
    //   qparam,
    //   queryParamsId
    // ) {
    //   const generator = fetchData(serverCommunication, qparam, queryParamsId);

    //   // Step through the generator
    //   let step = generator.next(); // Start the generator

    //   while (!step.done) {
    //     const response = await step.value; // Await the yielded value
    //     step = generator.next(response); // Pass the response back to the generator
    //   }

    //   // Final result
    //   const finalResult = step.value;
    // }
    // const getServerResponse = async (serverCommunication, queryParam = null, qparam = null) => {
    //   try {
    //     const response = await runSaga(
    //       {
    //         dispatch: () => {}, // We don't need to dispatch
    //         getState: () => store.getState(), // Provide access to Redux state
    //       },
    //       fetchData,
    //       serverCommunication,
    //       queryParam,
    //       qparam
    //     ).toPromise();
    
    //     return response;
    //   } catch (error) {
    //     console.error("Error in Server Response:", error);
    //   } finally {
    //     // setIsLoading(false);
    //   }
    // };
    
    function getFormData(serverCommunication, queryParamsId) {
      const onSuccess = serverCommunication?.onSuccess;
      const onFailure = serverCommunication?.onFailure;
      function updatedOnSuccess(res) {
        onSuccess(res);
        SuccessResponseOfServer(res);
      }

      function updatedOnFailure(err) {
        onFailure(err);
        ErrorResponseOfServer(err);
      }

      serverCommunication.onSuccess = updatedOnSuccess;
      serverCommunication.onFailure = updatedOnFailure;

      getServerResponse(serverCommunication, "", queryParamsId);
    }
    useEffect(() => {
      if (
        config?.features?.fetchData?.operationalMode === "server" &&
        config?.features?.fetchData?.enable &&
        config?.viewMode?.mode !== "create"
      ) {
        {
          const sagaCommunication =
            data?.features?.fetchData?.serverCommunication;
          if (sagaCommunication) {
            getFormData(sagaCommunication, queryParamsId);
          }
        }
      }
    }, []);
    const [formValues, setFormValues] = useState(initialFormValues);

    useEffect(() => {
      console.log("formValues", formValues);
    }, [formValues]);

    const steps = submission?.steps?.map((step) => `${step.title}`);
    const [currentStep, setCurrentStep] = useState(0);
    const [errors, setErrors] = useState({}); // New state for errors

    const [formKeys, setFormKeys] = useState([]);

    const [fields, setFields] = useState([]);
    const validateCurrentStep = (
      currentFields = fields[currentStep][0],
      newErrors = {},
      valid = true
    ) => {
      // console.log("currentFields", currentFields, newErrors, valid);
      if (!isReadOnly) {
        // Validate each field in the current step
        console.log("currentFields", currentFields);
        currentFields?.forEach((field) => {
          if (
            (field?.dynamicKey && field?.type && field?.required,
            field?.min,
            field?.max)
          ) {
            const { dynamicKey, type, required, min, max } = field;
            const value = formValues[currentStep][dynamicKey] || "";
            if (type === "section") {
              if (field?.childFields) {
                valid = validateCurrentStep(
                  field.childFields,
                  newErrors,
                  valid
                );
              } else {
                valid = false;
              }
            } else {
              if (
                type === "file" &&
                required &&
                (!value || value.length === 0)
              ) {
                newErrors[dynamicKey] = "Please select at least one file";
                valid = false;
              }

              if (required && type === "checkbox" && !value) {
                newErrors[dynamicKey] = "This field is required";
                valid = false;
              }

              if (type === "email") {
                const emailPattern =
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (required && !value) {
                  newErrors[dynamicKey] = "This field is required";
                  valid = false;
                }
                if (!emailPattern.test(value) && value) {
                  newErrors[dynamicKey] = "Invalid email format";
                  valid = false;
                }
              }

              // Check required fields
              if (required && !value) {
                newErrors[dynamicKey] = "This field is required";
                valid = false;
              }

              // Check for specific field type validations
              if (type === "password") {
                // Validate password length
                if (min != "" && value.length < min) {
                  newErrors[dynamicKey] = `Minimum length is ${min}`;
                  valid = false;
                }
              }

              // Check min
              if (min != "" && value.length < min) {
                newErrors[dynamicKey] = `Minimum length is ${min}`;
                valid = false;
              }

              // Check max
              if (max != "" && value.length > max) {
                newErrors[dynamicKey] = `Maximum length is ${max}`;
                valid = false;
              }

              // Check min
              if (min !== undefined && min != "" && Number(value) < min) {
                newErrors[dynamicKey] = `Minimum value is ${min}`;
                valid = false;
              }

              // Check max
              if (max !== undefined && max != "" && Number(value) > max) {
                newErrors[dynamicKey] = `Maximum value is ${max}`;
                valid = false;
              }

              // Check word count
              if (type === "textarea") {
                const wordCount = value
                  .trim()
                  .split(/\s+/)
                  .filter((word) => word).length; // Count words
                if (min !== undefined && min != "" && wordCount < min) {
                  newErrors[dynamicKey] = `Minimum word count is ${min}`;
                  valid = false;
                }
                if (max !== undefined && max != "" && wordCount > max) {
                  newErrors[dynamicKey] = `Maximum word count is ${max}`;
                  valid = false;
                }
              }

              // Additional validation for radio type
              if (
                type === "radio" &&
                required &&
                (!formValues[currentStep][dynamicKey] ||
                  formValues[currentStep][dynamicKey] === "")
              ) {
                newErrors[dynamicKey] = "Please select an option";
                valid = false;
              }
            }
          }
        });
        setErrors(newErrors);
        console.log("errors", errors, currentStep);
        return valid;
      }
    };

    // Handle form submission
    const handleSubmit = async (event) => {
      console.log("formValues handleSubmit", formValues);
      event.preventDefault();
      event.stopPropagation(); // Prevent the event from bubbling
      if (validateCurrentStep()) {
        if (onAction[currentStep]) {
          try {
            await onAction[currentStep](formValues, ancestorsInfo, currentStep);
          } catch (error) {
            console.log("Submission failed:", error);
          }
        }

        if (currentStep === steps.length - 1) {
          fields.forEach((stepFields) => {
            stepFields.forEach((field) => {
              if (field.repeatDependancy === true) {
                field.repeated = false;
              }
            });
          });

          if (!demoView) {
            setFormValues(initialFormValues);
          }
          setCurrentStep(0);
          if (isModal) {
            handleDialogClose();
          }
        }
        if (config?.features?.submission?.operationalMode === "server") {
          if (
            data?.features?.submission.steps[currentStep].serverCommunication
              ?.onSuccess
          ) {
            data?.features?.submission.steps[
              currentStep
            ].serverCommunication?.onSuccess(formValues);
          }
          const sagaCommunication =
            data?.features?.submission.serverCommunication;
          const onSuccess = sagaCommunication.onSuccess;
          const onFailure = sagaCommunication.onFailure;
          function updatedOnSuccess(res) {
            if (typeof onSuccess == "function") {
              onSuccess(res);
            }

            // Call only if onSuccess is defined
            SuccessResponseOfServer(res);
            if (isModal === true) {
              handleDialogClose();
            }
          }

          function updatedOnFailure(err) {
            if (typeof onFailure == "function") {
              onFailure(err);
            }
            ErrorResponseOfServer(err);
          }
          if (sagaCommunication) {
            const { userSelectedRole } = main;

            // Check if formValues[currentStep] exists
            if (formValues[currentStep]) {
              // Iterate through the keys to find any that include 'updatedBy'
              for (const key of Object.keys(formValues[currentStep])) {
                if (key.includes("updatedBy")) {
                  formValues[currentStep][key] =
                    userSelectedRole.user_role_designation_department_id;
                }
              }
            }
            console.log("formValues[currentStep]", formValues);

            sagaCommunication.body = formValues[currentStep];
            sagaCommunication.onSuccess = updatedOnSuccess;
            sagaCommunication.onFailure = updatedOnFailure;
          }
           getServerResponse(
             sagaCommunication,
             currentStep > 0 ? `&step=${currentStep + 1}` : "",
             queryParamsId || formValues[0].insertedId
           );
        }
      }
    };

    // Next Step Handler
    const handleNextStep = async () => {
      console.log("formValues handleNextStep", queryParamsId);
      if (validateCurrentStep(fields[currentStep][0])) {
        console.log("formValues handleNextStep", formValues);
        if (currentStep < fields.length - 1) {
          if (onAction[currentStep]) {
            onAction[currentStep](formValues, ancestorsInfo, currentStep);
          }
          if (config?.features?.submission?.operationalMode === "server") {
            if (
              data?.features?.submission.steps[currentStep].serverCommunication
                ?.onSuccess
            ) {
              data?.features?.submission.steps[
                currentStep
              ].serverCommunication?.onSuccess(formValues);
            }
            const sagaCommunication =
              data?.features?.submission.serverCommunication;
            const onSuccess = sagaCommunication.onSuccess;
            const onFailure = sagaCommunication.onFailure;
            function updatedOnSuccess(res) {
              if (typeof onSuccess == "function") {
                onSuccess(res);
              }

              // Call only if onSuccess is defined
              SuccessResponseOfServer(res);

              if (isModal === true && currentStep === fields.length - 1) {
                handleDialogClose();
              }
              console.log("updatedOnSuccess res", res?.return?.insertId);
              if ((!queryParamsId && !res?.return?.insertId) ||(queryParamsId && res?.return?.insertId !== 0)) {
                                alert("Error: Data not added. Please try again.");
              }
              else{
                setCurrentStep(
                  res?.return?.insertId ? currentStep + 1 : currentStep
                );
              }
              
            }

            function updatedOnFailure(err) {
              if (typeof onFailure == "function") {
                onFailure(err);
              }
              ErrorResponseOfServer(err);
            }
            if (sagaCommunication) {
              const { userSelectedRole } = main;

              // Check if formValues[currentStep] exists
              if (formValues[currentStep]) {
                // Iterate through the keys to find any that include 'updatedBy'
                for (const key of Object.keys(formValues[currentStep])) {
                  console.log("key", key);
                  if (key.includes("updatedBy")) {
                    formValues[currentStep][key] =
                      userSelectedRole.user_role_designation_department_id;
                  }
                }
              }

              sagaCommunication.body = formValues[currentStep];
              sagaCommunication.onSuccess = updatedOnSuccess;
              sagaCommunication.onFailure = updatedOnFailure;
            }
            getServerResponse(
              sagaCommunication,
              `&step=${currentStep + 1}`,
              queryParamsId || formValues[0]?.insertedId
                ? `&id=${formValues[0].insertedId}`
                : ""
            );
          } else {
            setCurrentStep(currentStep + 1);
          }
        }
      }
    };

    // Previous Step Handler
    const handlePrevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
        setPreviousStep(previousStep + 1);
      }
    };

    const SuccessResponseOfServer = (response) => {
      // Make sure we have a valid response with insertedId
      console.log("response", response);
      if (response?.return?.insertId) {
        // Retain formValues and add insertedId to the current step
        setFormValues((prevFormValues) => {
          // Create a copy of the current form values
          const updatedFormValues = [...prevFormValues];

          // Add the insertedId to the current step
          updatedFormValues[currentStep] = {
            ...updatedFormValues[currentStep],
            insertedId: response.return.insertId,
          };

          // Return the updated form values
          return updatedFormValues;
        });
      }
      else if (Array.isArray(response?.return) && response.return[0]) {
        setFormValues((prevFormValues) => {
          // Create a copy of the current form values
          const updatedFormValues = [...prevFormValues];
    
          // Assuming response.return[0] contains data you want to add
          updatedFormValues[currentStep] = {
            ...updatedFormValues[currentStep],
            ...response.return[0], // Merge response.return[0] into current step data
          };
    
          // Return the updated form values
          return updatedFormValues;
        });
      }
      return response;
    };

    const ErrorResponseOfServer = (response) => {
      return response;
    };

    const [allTagValues, setAllTagValues] = useState({});

    useEffect(() => {
      //console.log("allTagValues: ", allTagValues);
    }, [allTagValues]);

    const form = (
      <form noValidate onSubmit={handleSubmit} ref={ref}>
        {Array.isArray(fields) &&
        Array.isArray(fields[currentStep]) &&
        fields[currentStep].length > 0
          ? fields[currentStep].map((stepFields, ind) => {
              return stepFields?.map((field, index) => {
                return (
                  <Box key={`${ind}-${index}`} sx={{ mb: 3 }}>
                    {renderFields({
                      field,
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
                      formKeys: formKeysPass || formKeys,
                      setFormKeys: setFormKeysPass || setFormKeys,
                      parentValues,
                      parentFields,
                      ancestorsInfo,
                      fields,
                      config,
                      serverMode:
                        config?.features?.fetchData?.operationalMode ===
                        "server",
                    })}
                  </Box>
                );
              });
            })
          : null}
        <Grid>
          <Box display="flex" justifyContent="space-between" marginTop={2}>
            {Array.isArray(steps) && steps.length > 1 && (
              <>
                <Button
                  variant="outlined"
                  onClick={handlePrevStep}
                  disabled={currentStep === 0}
                >
                  Previous
                </Button>
                {/* {currentStep!==0 && */}
                <Button
                  variant="outlined"
                  onClick={() => {
                      if (currentStep < fields.length - 1) {
                        setCurrentStep(currentStep + 1);
                      } else {
                        handleDialogClose();
                      }
                  }}
                >
                  Skip
                </Button>
                {/* } */}
                {currentStep < (fields?.length || 0) - 1 && (
                  <Button
                    variant="contained"
                    onClick={
                      previousStep == 0
                        ? handleNextStep
                        : () => {
                            setPreviousStep(previousStep - 1);
                            setCurrentStep(previousStep);
                          }
                    }
                    disabled={currentStep >= (fields?.length || 0) - 1}
                  >
                    {!queryParamsId ?"Next":"Update"}
                  </Button>
                )}
              </>
            )}
            {submission?.steps?.[currentStep]?.buttons?.map((btn, index) =>
              btn.type === "submit" ? (
                <Button
                  key={index}
                  variant="contained"
                  type="submit"
                  sx={{ width: steps?.length === 1 ? "100%" : "auto" }}
                >
                  {!queryParamsId ? btn?.label:'Update'}
                </Button>
              ) : null
            )}
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            gap={2}
            marginTop={2}
            sx={{
              justifyContent: "space-between",
            }}
          >
            {submission?.steps?.[currentStep]?.buttons?.map((btn, index) =>
              btn.type !== "submit" && btn.type !== "close" ? (
                <Button
                  key={index}
                  variant="contained"
                  sx={{
                    backgroundColor:
                      appearance?.features?.submission?.buttons?.find(
                        (bt) => bt.type === btn.type
                      )?.backgroundColor || " ",
                    color:
                      appearance?.features?.submission?.buttons?.find(
                        (bt) => bt.type === btn.type
                      )?.color || "white",
                    margin: "5px",
                  }}
                  onClick={(e) => {
                    if (btn.onClick) {
                      btn.onClick(e);
                    }
                  }}
                >
                  {btn?.label}
                </Button>
              ) : null
            )}
            {currentStep === submission?.steps?.length - 1 &&
              !submission?.steps?.[currentStep]?.buttons?.some(
                (btn) => btn.type === "submit"
              ) && (
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: steps?.length === 1 ? "100%" : "auto" }}
                >
                  Submit
                </Button>
              )}
          </Box>
        </Grid>
      </form>
    );

    // const steperDirection = "horizontal";

    const renderStepperAndForm = () => (
      <>
        {/* {Array.isArray(steps) && steps.length > 1 && (
          <Stepper
            activeStep={currentStep}
            alternativeLabel={steperDirection === "horizontal"}
            orientation={
              steperDirection === "vertical" ? "vertical" : "horizontal"
            }
          >
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )} */}
        {stepsData.length > 1 && (
          <BasicTabs tabs={stepsData} activeStep={currentStep} />
        )}
        {form}
      </>
    );

    if (isModal === true) {
      return (
        <>
          <Dialog
            open={closeButton ? true : openModal}
            onClose={onlyClose}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                color: inputFields?.color,
                backgroundColor: background?.color,
              }}
            >
              <IconButton onClick={onlyClose}>
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent
              // dividers
              sx={{
                marginTop: "-30px",
                backgroundColor: background?.color,
              }}
            >
              <Box
                sx={{
                  color: inputFields?.color,
                  width: "100%",
                  marginTop: 2,
                  backgroundColor: background?.color,
                }}
              >
                {renderStepperAndForm()}
              </Box>
            </DialogContent>
          </Dialog>

          {/* {!closeButton && (
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setOpenModal(true);
              }}
              sx={{
                ml: 0,
                mt: 2,
                px: 3,
                py: 1,
                color: "#fff",
                borderColor: "transparent",
                background: "linear-gradient(90deg, #2196f3 0%, #1e88e5 100%)",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: "bold",
                boxShadow: "0px 4px 12px rgba(33, 150, 243, 0.4)",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #64b5f6 0%, #42a5f5 100%)",
                  boxShadow: "0px 6px 16px rgba(33, 150, 243, 0.6)",
                  transform: "scale(1.02)",
                },
                "&:active": {
                  boxShadow: "0px 4px 8px rgba(33, 150, 243, 0.3)",
                  transform: "scale(1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Open Modal
            </Button>
          )} */}
        </>
      );
    } else {
      return (
        <Card
          sx={{
            padding: "24px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginTop: "50px",
            marginBottom: "50px",
            color: inputFields?.color,
            backgroundColor: background?.color,
          }}
        >
          {renderStepperAndForm()}
        </Card>
      );
    }
  }
);
