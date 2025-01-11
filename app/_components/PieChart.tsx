"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieRingChart = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Crowdsale investors: 80%", "Foundation: 20%"], // Labels for the sections
    colors: ["#0082FF", "#FAA002"], // Replace with your desired colors
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "right",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%", // Controls the size of the ring
        },
      },
    },
  };

  const chartSeries = [80, 20]; // Values representing the chart segments

  return (
    <div className="mt-4">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        className="max-w-96"
      />
    </div>
  );
};

export default PieRingChart;
