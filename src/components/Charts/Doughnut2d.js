import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


// STEP 3 - Creating the JSON object to store the chart configurations


const ChartComponent = ({ data }) => {

  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Starts Per Language",
        captionFontColor: "#ffffff",
        decimals: 0,
        doughnutRadius: "50%",
        bgColor: "#000000",
        legendCaptionBold: "1",
        legendCaptionFontSize: "20",
        legendPosition: "bottom",
        legendBgAlpha: 15,
        legendBorderRadius: 10,
        legendFontColor: '#ffffff',
        legendBorderColor: "#dddddd",
        baseFontSize: "11",
        baseFont: "Open Sans",
        startingAngle: "0",
        showPercentInTooltip: "1",
        labelBgColor: "#fdfffc",
        labelBorderColor: "#dddddd",
        labelBorderPadding: 7,
        labelBorderRadius: 16,
        showLegend: "1",
        legendBorderThickness: "1",
        legendBorderAlpha: "40",
        pieRadius: "45%",
        theme: "fusion"
      },
      // Chart Data
      data
    }
  };

  return <ReactFC {...chartConfigs} />
  
}


export default ChartComponent;
