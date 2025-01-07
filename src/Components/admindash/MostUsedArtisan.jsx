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

const MostUsedArtisansChart = () => {
  const chartData = {
    labels: ["Artisan A", "Artisan B", "Artisan C", "Artisan D", "Artisan E", "Artisan F"], // Artisan names
    datasets: [
      {
        label: "Most Used Artisans",
        data: [120, 150, 180, 200, 250, 300], // Number of uses
        backgroundColor: "#ff9800", // Green color
        borderColor: "#ff9800", // Darker green border
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
        text: "Most Used Artisans",
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

export default MostUsedArtisansChart;
