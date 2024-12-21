import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserGrowthChart = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Months
    datasets: [
      {
        label: "User Growth",
        data: [500, 800, 1200, 1800, 2500, 3200], // Example user growth numbers
        borderColor: "#4CAF50", // Green line
        backgroundColor: "rgba(76, 175, 80, 0.2)", // Transparent fill
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "#4CAF50", // Point color
        pointBorderColor: "#4CAF50",
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Enable responsive scaling
    maintainAspectRatio: false, // Allow custom height and width
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "User Growth Over Time",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical gridlines
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e0e0e0", // Light grey gridlines
        },
      },
    },
  };

  return (
    <div style={styles.chartContainer}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

const styles = {
  chartContainer: {
    backgroundColor: "#F3F6F9",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "380px", // Container width
    height: "270px", // Container height
    margin: "0 auto", // Center chart horizontally
  },
};

export default UserGrowthChart;
