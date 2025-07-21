// components/BarChartCard.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const statusMap = {
  N: "New",
  S: "Saved",
  M: "Modified",
  C: "Confirmed",
  P: "Paid",
  A: "Allocated",
  SC: "Service est created",
  E: "Estimated",
  R: "Request for estimation",
  D: "Discarded"
};

const BarChartCard = ({data , isLoading }) => {
    console.log('Raw data:', data);

    if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="rounded-2xl shadow-lg p-4 bg-white w-full max-w-md mx-auto">
        <h2 className="text-sm font-semibold mb-2">Application Status</h2>
        <p>No data available</p>
      </div>
    );
  }

  if (isLoading) {
        return (
            <div className="rounded-2xl shadow-lg p-4 bg-white w-full max-w-md mx-auto">
                <h2 className="text-sm font-semibold mb-2">Application Status</h2>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

  const labels = data.map(item => {
    const mappedStatus = statusMap[item.status] || item.status;
    console.log(`Status: ${item.status} -> ${mappedStatus}`);
    return mappedStatus;
  });
  
  const counts = data.map(item => item.count);
  
  console.log('Labels:', labels);
  console.log('Counts:', counts);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Applications",
        data: counts,
        backgroundColor: "#36A2EB",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '700px',
      margin: '20px auto',
      textAlign: 'center',
      backgroundColor: 'white'
    }}>
      <h2 className="text-sm font-semibold mb-2">Application Status</h2>
      <Bar data={chartData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
    </div>
  );
};

export default BarChartCard;