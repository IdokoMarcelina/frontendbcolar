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

const DAUChart = () => {
  const chartData = {
    labels: ["Dec 1", "Dec 2", "Dec 3", "Dec 4", "Dec 5", "Dec 6"], // Days of the month
    datasets: [
      {
        label: "Daily Active Users",
        data: [1500, 1700, 1600, 2000, 1800, 1900], // Example DAU values
        backgroundColor: "#007BFF", // Blue color for bars
        borderColor: "#007BFF",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow dynamic height and width
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: true,
        text: "Daily Active Users (DAU)",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={styles.chartContainer}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

const styles = {
  chartContainer: {
    backgroundColor: "#F3F6F9",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "500px", // Adjust width as needed
    height: "270px", // Adjust height as needed
    margin: "0 auto", // Center chart horizontally
  
  
  },

  
};

export default DAUChart;
