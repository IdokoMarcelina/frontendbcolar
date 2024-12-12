import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ArtisanSignupsChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Month labels
    datasets: [
      {
        label: "Artisan Signups",
        data: [50, 80, 100, 120, 150, 180], // Signups per month
        backgroundColor: "#4CAF50", // Orange color
        borderColor: "#4CAF50", // Darker orange border
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Artisan Signups",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide gridlines on x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Display gridlines on y-axis
        },
      },
    },
  };

  return (
    <div style={styles.chartContainer}>
      <Bar data={chartData} options={chartOptions} width={400} height={300} />
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
