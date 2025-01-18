import  { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2"; // Import both Bar and Line charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios"; // Import axios for making API requests

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserCharts = () => {
  // State to store the data for both charts
  const [chartData, setChartData] = useState({
    dauData: {
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
    },
    growthData: {
      labels: [], // Days of the month (will be updated dynamically)
      datasets: [
        {
          label: "User Growth (New Registrations)",
          data: [], // Growth data (will be updated dynamically)
          borderColor: "#28a745", // Green color for the line
          backgroundColor: "rgba(40, 167, 69, 0.2)", // Light green for the area under the line
          borderWidth: 2,
          fill: true, // Option to fill under the line
        },
      ],
    },
  });

  // Fetch DAU and user growth data from the backend API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-bcolar.onrender.com/api/dau/getdau'); // Corrected API URL for getting DAU data
        const userData = response.data; // Assuming response contains newRegistrations and activeUsers

        console.log(userData); // Log the data to check its structure

        // Check if the data returned is valid
        if (Array.isArray(userData) && userData.length > 0) {
          const labels = userData.map(item => item.date); // Assuming 'date' field exists
          const activeUsers = userData.map(item => item.activeUsers); // Assuming 'activeUsers' field exists
          const newRegistrations = userData.map(item => item.newRegistrations); // Assuming 'newRegistrations' field exists

          // Calculate cumulative user growth
          let cumulativeGrowth = [];
          let cumulativeSum = 0;
          newRegistrations.forEach(registration => {
            cumulativeSum += registration;
            cumulativeGrowth.push(cumulativeSum);
          });

          // Update chartData state with the fetched data for both DAU and Growth
          setChartData({
            dauData: {
              labels,
              datasets: [
                {
                  label: "Daily Active Users",
                  data: activeUsers,
                  backgroundColor: "#007BFF", // Blue color for the bar chart
                  borderColor: "#007BFF",
                  borderWidth: 1,
                },
              ],
            },
            growthData: {
              labels,
              datasets: [
                {
                  label: "User Growth (New Registrations)",
                  data: cumulativeGrowth,
                  borderColor: "#28a745", // Green color for the line
                  backgroundColor: "rgba(40, 167, 69, 0.2)", // Light green for the area under the line
                  borderWidth: 2,
                  fill: true,
                },
              ],
            },
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  // Chart options for both Bar and Line charts
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "User Data",
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
      {/* DAU Bar Chart */}
      <div style={styles.chartWrapper}>
        <Bar data={chartData.dauData} options={{ ...chartOptions, title: { text: "Daily Active Users (DAU)" } }} />
      </div>
      
      {/* User Growth Line Chart */}
      <div style={styles.chartWrapper}>
        <Line data={chartData.growthData} options={{ ...chartOptions, title: { text: "User Growth (New Registrations)" } }} />
      </div>
    </div>
  );
};

const styles = {
  chartContainer: {
    backgroundColor: "#F3F6F9",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  chartWrapper: {
    height: "270px",
    width: "100%",
  },
};

export default UserCharts;
