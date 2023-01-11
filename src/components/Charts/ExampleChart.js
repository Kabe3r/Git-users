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
    type: "pie2d", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'languages',
        theme: 'fusion'
        
      },
      // Chart Data
      data
    }
  };

  return <ReactFC {...chartConfigs} />

}


export default ChartComponent;
