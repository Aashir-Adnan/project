import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Chart from "react-apexcharts";
import styles from "./SessionsDevice.module.css";

class SessionsDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [props.data.percentage],
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            track: {
              background: "#EAECFD",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: 4,
                color: props.data.color,
                fontSize: "16px",
                fontWeight: "500",
              },
            },
          },
        },
        fill: {
          colors: props.data.color,
        },
      },
    };
  }
  render() {
    return (
      <>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px 20px",
            mb: "15px",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #EEF0F7",
              paddingBottom: "10px",
              mb: "15px",
            }}
            className="for-dark-bottom-border"
          >
          
            <Typography
              as="h3"
              sx={{
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {this.props.data.label}
            </Typography>
          </Box>

          <div>
            <div className={styles.infoList}>
              <div>
                <p>Total Permissions</p>
                <h5>{this.props.data.permissions}</h5>
              </div>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i>
                </p>
              </div>
            </div>

            <div className={styles.infoList}>
              <div>
                <p>Role Permissions</p>
                <h5>{this.props.data.totalPermissions}</h5>
              </div>
              <div className={styles.rightContent}>
                <p>
                  <i className="ri-bar-chart-fill"></i>
                </p>
              </div>
            </div>
          </div>

          {this.state.options && this.state.series && (
            <>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
            />
            </>
          )}
        </Card>
      </>
    );
  }
}

export default SessionsDevice;
