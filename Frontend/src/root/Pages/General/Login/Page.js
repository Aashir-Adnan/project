import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Authentication.module.css";
import { getOtp } from "../../../Common/Store/Actions/General/AuthActions/getOtp";
import { verifyOtp } from "../../../Common/Store/Actions/General/AuthActions/verifyOtp";
import { updateLoading } from "../../../Common/Store/Actions/General/UpdateActions/updateLoading";
import LoadingOverlay from "../../../Components/Loading/LoadingOverLay";
const SignInForm = ({ onLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate to navigate to a different path
  const deviceInfo = generateDeviceIdentifier();
  const UID = `${deviceInfo.osName}-${deviceInfo.osVersion}-${deviceInfo.browser}-${deviceInfo.screenResolution}-${deviceInfo.timeZone}-${deviceInfo.deviceUUID}`;
  const mainState = useSelector((state) => state.main);
  const { isLoading } = mainState;
  const [showOtpInputField, setShowOtpInputField] = useState(false);
  useEffect(() => {}, [isLoading]);
  const handleGetOtp = (event) => {
    dispatch(updateLoading(true));
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    dispatch(updateLoading(true));
    dispatch(
      getOtp(
        email,
        deviceInfo.osName,
        deviceInfo.osVersion,
        deviceInfo.deviceUUID,
        deviceInfo.browserVersion,
        otpSuccess,
        otpFailure
      )
    );
  };
  const otpSuccess = (response) => {
    if (response?.otpVerif !== "OTP Sent Successfully") {
      loginSuccess("success");
    } else {
      dispatch(updateLoading(false));
      setShowOtpInputField(true);
    }
  };
  const otpFailure = (response) => {
    console.log("OTP Failure", response);
    dispatch(updateLoading(false));
  };
  const handleLogin = (event) => {
    console.log("handleLogin");
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const otp = data.get("otp");
    dispatch(updateLoading(true));
    dispatch(
      verifyOtp(
        email,
        otp,
        deviceInfo.osName,
        deviceInfo.osVersion,
        deviceInfo.deviceUUID,
        loginSuccess,
        loginFailure
      )
    );
  };
  function generateDeviceIdentifier() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const osName = /android/i.test(userAgent)
      ? "Android"
      : /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
      ? "iOS"
      : /Mac/i.test(userAgent)
      ? "MacOS"
      : /Windows/i.test(userAgent)
      ? "Windows"
      : "Unknown OS";

    const osVersion =
      userAgent
        .match(/(Android|OS X|Windows NT) ([0-9._]+)/i)?.[2]
        ?.replace(/_/g, ".") || "Unknown";

    const browser =
      navigator.userAgentData?.brands?.[0]?.brand ||
      (navigator.userAgent.includes("Chrome")
        ? "Chrome"
        : navigator.userAgent.includes("Firefox")
        ? "Firefox"
        : navigator.userAgent.includes("Safari")
        ? "Safari"
        : "Unknown Browser");

    const browserVersion =
      navigator.userAgentData?.brands?.[0]?.version || navigator.appVersion;

    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const platform = navigator.platform;

    // Generate a local unique ID if not already stored
    let deviceUUID = localStorage.getItem("device_uuid");
    if (!deviceUUID) {
      deviceUUID = crypto.randomUUID(); // Generates a unique identifier
      localStorage.setItem("device_uuid", deviceUUID);
    }

    return {
      osName,
      osVersion,
      browser,
      browserVersion,
      screenResolution,
      timeZone,
      platform,
      deviceUUID, // Stored locally for consistency
    };
  }
  const loginSuccess = (response) => {
    dispatch(updateLoading(false));
    onLogin();
    navigate("/dashboard"); // Use path passed into the function
  };
  const loginFailure = (response) => {
    dispatch(updateLoading(false));
  };

  return (
    <>
      <div className="authenticationBox">
        <Box
          component="main"
          sx={{
            display: "flex", // Enable flexbox
            flexDirection: "column", // Stack items vertically
            ml: "auto",
            mr: "auto",
            justifyContent: "center", // Center vertically
            height: "100vh", // Full height of the viewport
            maxWidth: "510px", // Full width of the viewport
            width: "90%",
            padding: "20px",
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Box>
              <Box
                component="form"
                noValidate
                onSubmit={showOtpInputField ? handleLogin : handleGetOtp}
              >
                <Box
                  sx={{
                    background: "#fff",
                    padding: "30px 20px",
                    borderRadius: "10px",
                    mb: "20px",
                  }}
                  className="bg-black"
                >
                  <Box
                    sx={{
                      display: "flex", // Enable flexbox layout
                      justifyContent: "center", // Center horizontally
                      alignItems: "center", // Center vertically
                      height: "100%", // Optional: Ensure the container has height
                      marginBottom: "20px",
                    }}
                  >
                    {" "}
                    <img
                      src="/ITU_Logos/ITU_Name.png"
                      alt="ITU Logo"
                      className={styles.favicon}
                    />
                  </Box>
                  <Grid container alignItems="center"  spacing={2}>
                    <Grid item xs={12}>
                      {/* <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                      >
                        Email
                      </Typography> */}

                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        InputProps={{
                          style: { borderRadius: 8 },
                        }}
                      />
                    </Grid>

                    {showOtpInputField && (
                      <Grid item xs={12}>
                        <>
                          <Typography
                            component="label"
                            sx={{
                              fontWeight: "500",
                              fontSize: "14px",
                              mb: "10px",
                              display: "block",
                            }}
                          >
                            OTP
                          </Typography>

                          <TextField
                            required
                            fullWidth
                            name="otp"
                            label="OTP"
                            type="password"
                            id="otp"
                            disabled={!showOtpInputField}
                            autoComplete="new-password"
                            InputProps={{
                              style: { borderRadius: 8 },
                            }}
                          />
                        </>
                      </Grid>
                    )}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 10,
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        alignSelf: "center", // Ensures alignment in a flex container
                        justifyContent: "center", // Centers horizontally
                        display: "flex", // Enables flexbox
                        fontWeight: "500",
                        fontSize: "16px",
                        marginLeft:'15px',
                        padding: "12px 10px",
                        color: "#fff !important",
                      }}
                    >
                      {showOtpInputField ? "Verify OTP" : "Get OTP"}
                    </Button>
                  </Grid>
                </Box>

                {/* <Button
                  type="submit"
                  // onSubmit={showOtpInputField ? handleGetOtp  : handleLogin}
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "16px",
                    padding: "12px 10px",
                    color: "#fff !important",
                  }}
                >
                  {showOtpInputField ? "Verify OTP" : "Get OTP"}
                </Button> */}
              </Box>
            </Box>
          </Grid>
        </Box>
        <LoadingOverlay isLoading={isLoading} />
      </div>
    </>
  );
};

export default SignInForm;
