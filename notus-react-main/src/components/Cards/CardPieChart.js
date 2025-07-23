
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const statusLabels = {
  1: "Pending",
  3: "Rejected",
  5: "Approved",
};

export default function CardPieChart() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Starting fetch...");

    fetch("http://127.0.0.1:8088/SPS/api/spstdesthmt/status-counts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("user:admin123"),
      },
      credentials: "include",
    })
      .then(async (response) => {
        console.log("Fetch response status:", response.status);

        if (!response.ok) {
          console.error("Non-OK HTTP status:", response.status);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        if (!Array.isArray(data)) {
          console.error("Expected array but got:", data);
          setChartData(null);
          setLoading(false);
          return;
        }

        const statusMap = {};
        data.forEach((item) => {
          console.log("item:", item, "status:", item.status, "count:", item.count);
          statusMap[item.status] = item.count;
        });

        console.log("Final statusMap:", statusMap);

        const labels = Object.keys(statusMap).map(
          (key) => statusLabels[Number(key)] || `Status ${key}`
        );
        const values = Object.values(statusMap);

        console.log("statusMap:", statusMap);
        console.log("Labels:", labels);
        console.log("Values:", values);

        if (labels.length === 0 || values.length === 0) {
          console.warn("Empty chart data — skipping chart render.");
          setChartData(null);
          setLoading(false);
          return;
        }

        const finalChartData = {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              hoverOffset: 4,
              cutout: "60%",
            },
          ],
        };
        

        console.log("Final chartData:", finalChartData);

        setChartData(finalChartData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setChartData(null);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading chart...</div>;
  if (!chartData) return <div className="p-4">No data available.</div>;


  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4">Status Distribution</h3>
      <Pie data={chartData} />
    </div>
  );
}



import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register only once
ChartJS.register(ArcElement, Tooltip, Legend);

const CardPieChart = ({  openJobs, revisedJobs, closedJobs }) => {
  const data = {
    labels: ['Open Jobs', 'Revised Jobs', 'Closed Jobs'],
    datasets: [
      {
        data: [openJobs, revisedJobs, closedJobs],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        borderWidth: 1,
        cutout: '60%'
      }
    ]
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '400px',
      margin: '20px auto',
      textAlign: 'center',
      backgroundColor: 'white'
    }}>
      <Pie data={data} />
    </div>
  );
};

export default CardPieChart;
