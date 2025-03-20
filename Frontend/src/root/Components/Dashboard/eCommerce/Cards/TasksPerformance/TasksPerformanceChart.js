import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });
import Chart from "react-apexcharts";
class TasksPerformanceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [84, 77, 61],
      options: {
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "25%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#757FEF", "#9EA5F4", "#C8CCF9", "#F1F2FD"],
        labels: [props.subTitle1, props.subTitle2, props.subTitle3],
        legend: {
          show: true,
          floating: true,
          fontSize: "13px",
          position: "left",
          offsetY: 0,
          labels: {
            color: "#5B5B98",
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                height: 280,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <>
        {this.state.options && this.state.sereis && (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={300}
          />
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            textAlign: "center",
            mt: "22px",
          }}
        >
          <Box>
            <Typography color="#A9A9C8" mb={1} fontSize="14px">
              {this.props.subTitle1}
            </Typography>
            <Typography fontWeight="500" fontSize="18px" as="h4">
              <ArrowDownwardIcon
                color="danger"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              30
            </Typography>
          </Box>

          <Box>
            <Typography color="#A9A9C8" mb={1} fontSize="14px">
              {this.props.subTitle2}
            </Typography>
            <Typography fontWeight="500" fontSize="18px" as="h4">
              <ArrowUpwardIcon
                color="success"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              40
            </Typography>
          </Box>

          <Box>
            <Typography color="#A9A9C8" mb={1} fontSize="14px">
              {this.props.subTitle3}
            </Typography>
            <Typography fontWeight="500" fontSize="18px" as="h4">
              <ArrowUpwardIcon
                color="success"
                style={{ position: "relative", top: "3px" }}
              />{" "}
              67
            </Typography>
          </Box>
        </Box>
      </>
    );
  }
}

export default TasksPerformanceChart;
