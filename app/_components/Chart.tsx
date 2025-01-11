"use client";
import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import ChartFilters from "./ChartFilters";
import { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface TimeSeriesChartProps {
  CryptoCurrency: string;
  BaseValue?: number;
}

const TimeSeriesChart = ({ CryptoCurrency , BaseValue }: TimeSeriesChartProps) => {
  const [filter, setFilter] = useState("1H");
  // Function to get time interval in milliseconds based on filter
  const getTimeInterval = (filter: string): number => {
    switch (filter) {
      case "1H":
        return 60 * 1000; // 1 minute intervals
      case "24H":
        return 30 * 60 * 1000; // 30 minute intervals
      case "7D":
        return 4 * 60 * 60 * 1000; // 4 hour intervals
      case "1M":
        return 24 * 60 * 60 * 1000; // daily intervals
      case "3M":
        return 3 * 24 * 60 * 60 * 1000; // 3-day intervals
      case "6M":
        return 7 * 24 * 60 * 60 * 1000; // weekly intervals
      case "1Y":
        return 15 * 24 * 60 * 60 * 1000; // 15-day intervals
      case "ALL":
        return 30 * 24 * 60 * 60 * 1000; // monthly intervals
      default:
        return 24 * 60 * 60 * 1000;
    }
  };

  // Function to get number of data points based on filter
  const getDataPointsCount = (filter: string): number => {
    switch (filter) {
      case "1H":
        return 60; // 60 points for 1 hour
      case "24H":
        return 48; // 48 points for 24 hours
      case "7D":
        return 42; // 42 points for 7 days
      case "1M":
        return 30; // 30 points for 1 month
      case "3M":
        return 30; // 30 points for 3 months
      case "6M":
        return 26; // 26 points for 6 months
      case "1Y":
        return 24; // 24 points for 1 year
      case "ALL":
        return 24; // 24 points for all time
      default:
        return 48;
    }
  };

  const generateData = (): {
    timestamps: number[];
    dataPoints: number[];
  } => {
    const baseValue = BaseValue || 46000;
    const dataPoints: number[] = [];
    const timestamps: number[] = [];
    const interval = getTimeInterval(filter);
    const pointsCount = getDataPointsCount(filter);

    // Generate data points
    for (let i = 0; i < pointsCount; i++) {
      const date = new Date();
      date.setTime(date.getTime() - (pointsCount - 1 - i) * interval);
      timestamps.push(date.getTime());

      // Generate more volatile data for shorter timeframes
      const volatility = filter === "1H" || filter === "24H" ? 0.015 : 0.01;
      const previousValue = i > 0 ? dataPoints[i - 1] : baseValue;
      const change =
        previousValue * (Math.random() * volatility * 2 - volatility);
      const value = previousValue + change;
      dataPoints.push(value);
    }

    return {
      timestamps,
      dataPoints,
    };
  };

  const { timestamps, dataPoints } = generateData();

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 600,
      animations: {
        enabled: true,
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#0052FE"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.3,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#f1f1f1",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "14px", // Increase the font size for x-axis labels
          fontWeight: "semibold", // Adjust font weight
        },

        datetimeFormatter: {
          year: "yyyy",
          month: "MMM dd",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px", // Increase the font size for x-axis labels
          fontWeight: "semibold", // Adjust font weight
        },
        formatter: (value: number): string => {
          return Math.round(value).toLocaleString();
        },
      },
    },
    tooltip: {
      enabled: true,
      x: {
        format: "dd MMM yyyy HH:mm",
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels
    },
  };

  const series: ApexAxisChartSeries = [
    {
      name: "Value",
      data: timestamps.map((timestamp, index) => ({
        x: timestamp,
        y: dataPoints[index],
      })),
    },
  ];

  return (
    <>
      <div className="max-md:space-y-4 md:flex items-center justify-between py-8">
        <p className="text-lg font-semibold">
          {CryptoCurrency} Price Chart (USD)
        </p>
        <ChartFilters setActiveFilter={setFilter} activeFilter={filter} />
      </div>
      <Chart options={options} series={series} type="area" />
    </>
  );
};

export default TimeSeriesChart;
