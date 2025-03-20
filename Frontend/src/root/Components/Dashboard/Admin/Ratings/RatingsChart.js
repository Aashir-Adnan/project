import React, { Component } from 'react';
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });
import Chart from "react-apexcharts"
class RatingsChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
   
      series: props?.data?.series,
      labels:props?.data?.labels,
      options: {
        chart: {
          width: 300,
        },
        colors: ["#757FEF", "#00B69B", "#2DB6F5", "#EE368C", "#FFBC2B"],
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          show: false,
          formatter: function(val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }
  componentDidUpdate(prevProps){
    if (prevProps.data !== this.props.data) {
      this.setState({
        series: this.props.data?.series || [],
        labels: this.props.data?.labels || [],
      });
    }
  }
  render() {
    return (
      <>
      { this.state.options && this.state.series &&
        <Chart
        // ...this.state.options, labels: this.state.labels 
          options={{ ...this.state.options, labels: this.state.labels }} 
          series={this.state.series}
          height={150}
          type="donut"
        />
      }
      </>
    );
  }
}

export default RatingsChart;
