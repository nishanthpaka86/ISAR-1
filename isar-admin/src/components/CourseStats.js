// src/components/DashboardCharts.jsx
import React, { useEffect, useState } from 'react';
import './CourseStats.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const DashboardCharts = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('${process.env.REACT_APP_API_URL}/api/admin/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStats(data.stats);
        }
      });
  }, []);

  if (!stats) return <p>Loading charts...</p>;

  const barData = {
    labels: ['Users', 'Enrollments', 'Payments'],
    datasets: [
      {
        label: 'Counts',
        data: [
          stats.total_users,
          stats.total_enrollments,
          stats.total_payments
        ],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        borderRadius: 6
      }
    ]
  };

  const doughnutData = {
    labels: ['Users', 'Enrollments', 'Payments'],
    datasets: [
      {
        data: [
          stats.total_users,
          stats.total_enrollments,
          stats.total_payments
        ],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        hoverOffset: 6
      }
    ]
  };

  return (
    <div className="dashboard-charts">
      <h2>Admin Dashboard Statistics</h2>
      <div className="chart-grid">
        <div className="chart-box">
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
        <div className="chart-box">
          <Doughnut data={doughnutData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
