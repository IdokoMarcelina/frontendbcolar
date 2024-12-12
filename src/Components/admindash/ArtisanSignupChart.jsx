import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ArtisanSignupsChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Month labels
    datasets: [
      {
        label: "Artisan Signups",
        data: [50, 80, 100, 120, 150, 180], // Signups per month
        backgroundColor: [
          "#4CAF50", // Green
          "#FF9800", // Orange
          "#2196F3", // Blue
          "#F44336", // Red
          "#9C27B0", // Purple
          "#FFC107", // Yellow
        ],
        borderColor: "#ffffff", // White border for better distinction
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: "Artisan Signups",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return `${value} signups`; // Custom tooltip format
          },
        },
      },
    },
  };

  return (
    <div style={styles.chartContainer}>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

const styles = {
  chartContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    height: "300px",
    margin: "20px",
  },
};

export default ArtisanSignupsChart;
