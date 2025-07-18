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
