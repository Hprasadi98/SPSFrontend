import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const statusLabels = {
  1: "Pending",
  3: "Rejected",
  5: "Approved",
};

const sampleChartData = {
  labels: ["Pending", "Rejected", "Approved"],
  datasets: [
    {
      data: [10, 5, 15],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverOffset: 4,
      cutout: "60%",
    },
  ],
};

export default function CardPieChart() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8088/SPS/api/spstdesthmt/status-counts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("user:admin123"),
      },
      credentials: "include",
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        if (!Array.isArray(data)) throw new Error("Data format invalid");

        const statusMap = {};
        data.forEach((item) => {
          statusMap[item.status] = item.count;
        });

        const labels = Object.keys(statusMap).map(
          (key) => statusLabels[Number(key)] || `Status ${key}`
        );
        const values = Object.values(statusMap);

        if (labels.length === 0 || values.length === 0) throw new Error("Empty data");

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

        setChartData(finalChartData);
      })
      .catch((error) => {
        console.error("Fetch error or invalid data:", error);
        setChartData(sampleChartData); // 👈 fallback to sample
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading chart...</div>;

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4">Status Distribution</h3>
      <Pie data={chartData} />
      {!chartData || chartData === sampleChartData ? (
        <p className="text-sm text-gray-500 mt-2 italic">Showing sample data</p>
      ) : null}
    </div>
  );
}
