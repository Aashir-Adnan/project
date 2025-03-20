export default function serverCommunicationHelper  ({
    apiActionType="",
    permission = false,
    requestType = 'GET',
    apiUrl,
    metaData = true,
    body = {},
    reduxActionType="",
    onSuccess = (res) => console.log("Success:", res),
    onFailure = (err) => console.log("Error:", err.message),
  })  {
    return {
      apiActionType,
      permission,
      requestType,
      apiUrl,
      metaData,
      body,
      reduxActionType,
      onSuccess,
      onFailure,
    };
  };
  