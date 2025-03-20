import { select, put } from "redux-saga/effects";
import { encryptObject, decryptObject } from "./encryption"; // Assuming these are your encryption/decryption utils
import constants from "../../Constants";
const debug_log = (should_log, text, variable) => {
  if (should_log) {
    console.log(`*** text *** ${text} ************`);
    console.log(`*** variable *** ${variable} ************`);
  }
};
function* fetchData(action, queryParameter, queryParameterId) {
  console.log(
    "*** SAGHELPER [ACTION: ***",
    action,
    `************ [queryParameter: ${queryParameter} ]************ [queryParameterId:${queryParameterId} ]************`
  );

  try {
    const currentUser = yield select((state) => state); // Fetch the entire state
    const { userSelectedRole } = currentUser.main;
    const nextPart = action?.apiUrl ? action?.apiUrl : action?.payload?.apiUrl;
    const useBaseURL =
      action?.useBaseURL || action?.payload?.useBaseURL || true;
    const isEncrypted =
      (action?.payload?.isEncrypted || action?.isEncrypted) ?? true;

    let completeUrl = useBaseURL ? constants?.base_url + nextPart : nextPart;
    if (queryParameter && queryParameter !== "") {
      // completeUrl += queryParameter+'&userRoleId=1';
      completeUrl += queryParameter;
    }
    if (queryParameterId && queryParameterId !== "") {
      completeUrl += "&id=" + queryParameterId;
    }
    let request = {};
    if (action?.metaData || action?.payload?.metaData) {
      request = {
        headers: {
          "Content-Type": action?.header || "application/json",
          accesstoken: currentUser.main?.accesstoken || null,
        },
        method: action?.requestType || action?.payload?.requestType,
      };
    } else {
      request = {
        headers: {
          "Content-Type":
            action?.header || action?.payload?.header || "application/json",
        },
        method: action?.requestType || action?.payload?.requestType || "GET",
      };
    }
    if (
      (action?.body && action?.requestType !== "GET") ||
      (action?.payload?.body && action?.payload?.requestType !== "GET")
    ) {
      if ((action?.requestType || action?.payload?.requestType) === "DELETE") {
        if (isEncrypted) {
          const deleteEncryption = encryptObject(
            {
              Id: `${action?.body?.Id || null}`,
              userRoleId: userSelectedRole?.user_role_designation_department_id,
            },
            process.env?.REACT_APP_PLATFORM_KEY
          );
          const secondEncryption = {
            reqData: deleteEncryption,
            encryptionDetails: {
              PlatformName: process.env?.REACT_APP_PLATFORM_NAME,
              PlatformVersion: process.env?.REACT_APP_PLATFORM_VERSION,
            },
          };

          request.headers.encryptedrequest = encryptObject(
            secondEncryption,
            process.env?.REACT_APP_SECRET_KEY
          );
        } else {
          request.headers.reqData = {
            Id: `${action?.body?.Id || null}`,
            userRoleId: userSelectedRole?.user_role_designation_department_id,
          };
        }
      } else {
        if (isEncrypted) {
          request.body = {
            encryptedRequest: {
              userRoleId: userSelectedRole?.user_role_designation_department_id,
            },
          };
          const firstEncryption = encryptObject(
            action?.body || action?.payload?.body || null,
            process.env?.REACT_APP_PLATFORM_KEY
          );
          const secondEncryption = {
            reqData: firstEncryption,
            encryptionDetails: {
              PlatformName: process.env.REACT_APP_PLATFORM_NAME,
              PlatformVersion: process.env.REACT_APP_PLATFORM_VERSION,
            },
          };
          request.body.encryptedRequest = encryptObject(
            secondEncryption,
            process.env.REACT_APP_SECRET_KEY
          );
          request.body = JSON.stringify(request?.body);
        } else {
          request.body = JSON.stringify({
            ...(action?.body || action?.payload?.body || {}), // Ensure an empty object if undefined
            userRoleId: userSelectedRole?.user_role_designation_department_id,
          });
        }
      }
    } else {
      if (isEncrypted) {
        request.headers = {
          ...request?.headers,
          encryptedRequest: {},
        };
        const firstEncryption = encryptObject(
          {
            ...(action?.body || action?.payload?.body || {}), // Ensure an empty object if undefined
            userRoleId: userSelectedRole?.user_role_designation_department_id,
          },
          process.env.REACT_APP_PLATFORM_KEY
        );
        const secondEncryption = {
          reqData: firstEncryption,
          encryptionDetails: {
            PlatformName: process.env?.REACT_APP_PLATFORM_NAME,
            PlatformVersion: process.env?.REACT_APP_PLATFORM_VERSION,
          },
        };
        request.headers.encryptedRequest = encryptObject(
          secondEncryption,
          process.env?.REACT_APP_SECRET_KEY
        );
      } else {
        request.headers = {
          ...request?.headers,
          reqData: {
            userRoleId: userSelectedRole?.user_role_designation_department_id,
          },
        };
      }
    }
    console.log("Complete URL", completeUrl);
    if (completeUrl !== "") {
      console.log(
        "***************** API_Request_After_Encryption *************: ",
        request
      );
      const response = yield fetch(completeUrl, request).catch((err) => {
        console.log(`Network error: ${err?.message}`);
        return;
      });

      if (response.status !== 200) {
        const responseText = yield response.text();
        const errorData = JSON.parse(responseText);
        const frameworkErrorMessage = getFrameworkErrorMessage(
          response.status,
          errorData.scc
        );
        if (
          action?.onFailure &&
          (typeof action?.onFailure === "function" ||
            typeof action?.payload?.onFailure == "function")
        ) {
          action.onFailure({
            status: response?.status,
            frameworkStatusCode: errorData?.scc,
            message: frameworkErrorMessage || errorData?.message,
          });
        }
        return; // Stop processing further
      }

      let responseData = yield response.json();
      if (responseData?.payload && isEncrypted) {
        responseData = decryptObject(
          responseData?.payload,
          process.env.REACT_APP_PLATFORM_KEY
        );
      } else {
        responseData = responseData?.payload;
      }

      const reduxActionType =
        action?.reduxActionType || action?.payload?.reduxActionType;

      if (reduxActionType) {
        yield put({
          type: reduxActionType,
          payload: responseData,
          requestParams: action?.body || action?.payload?.body,
        });
      }
      if (
        typeof action?.onSuccess === "function" ||
        typeof action?.payload?.onSuccess === "function"
      ) {
        console.log(
          "***************** API_Response *************: ",
          completeUrl,
          responseData
        );
        (typeof action?.onSuccess === "function"
          ? action?.onSuccess
          : action?.payload?.onSuccess)(responseData);
      }
    }
  } catch (error) {
    console.error(`******** Error in fetchData ******* : ${error?.message}`);
    if (
      typeof action?.onFailure === "function" ||
      action?.payload?.onFailure === "function"
    ) {
      action?.onFailure
        ? action.onFailure({ message: error.message })
        : action.payload.onFailure({ message: error.message });
    }
  }
}

// Helper to map framework error codes to messages
const getFrameworkErrorMessage = (statusCode, frameworkStatusCode) => {
  const errorMessages = {
    // Parameter Errors
    E10: "Parameter name does not exist.",
    E11: "Parameter validation failure.",
    E12: "Parameter missing in source.",
    E13: "Required parameter missing.",
    E14: "No request body found.",

    // API Info Errors
    E20: "Invalid or missing query nature.",
    E21: "Invalid or missing query payload.",
    E22: "Callback function error.",
    E23: "Callback function missing.",
    E24: "Payload function error.",
    E25: "Payload function missing.",

    // Request Metadata Errors
    E30: "Invalid or missing request method.",
    E31: "Invalid or missing permission.",
    E32: "Invalid page size value.",

    // Middleware Errors
    E40: "Invalid or expired token.",
    E41: "Permission validation failure.",
    E42: "OTP verification failure.",
    E43: "Object resolver failure.",
    E44: "Database connection failed.",

    // API Errors
    E50: "API version does not exist.",
    E51: "API object does not exist.",
    E52: "Mismatch request method.",
  };

  return (
    errorMessages[frameworkStatusCode] ||
    `Unexpected error (Code: ${frameworkStatusCode})`
  );
};
export default fetchData;
