import React, { useEffect, useState } from "react";
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
import axios from "axios"; // Import axios for making API requests

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DAUChart = () => {
  // State to store the chart data
  const [chartData, setChartData] = useState({
    labels: [], // Days of the month (will be updated dynamically)
    datasets: [
      {
        label: "Daily Active Users",
        data: [], // DAU values (will be updated dynamically)
        backgroundColor: "#007BFF", // Blue color for bars
        borderColor: "#007BFF",
        borderWidth: 1,
      },
    ],
  });

  // Fetch DAU data from the backend API on component mount
  useEffect(() => {
    const fetchDAUData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/dau/getdau'); // Corrected API URL for getting DAU data
        const dauData = response.data; // Assuming response is an array of DAU data

        // Check if the data returned is valid
        if (Array.isArray(dauData) && dauData.length > 0) {
          const labels = dauData.map(item => item.date); // Assuming 'date' field exists
          const data = dauData.map(item => item.activeUsers); // Assuming 'activeUsers' field exists

          // Update chartData state with the fetched data
          setChartData({
            labels,
            datasets: [
              {
                label: "Daily Active Users",
                data,
                backgroundColor: "#007BFF",
                borderColor: "#007BFF",
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching DAU data:", error);
      }
    };

    fetchDAUData();
  }, []); // Empty dependency array to run only once on mount

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
    width: "450px", 
    height: "270px", 
  },
};

export default DAUChart;
