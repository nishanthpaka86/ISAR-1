import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import CourseStats from './CourseStats';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/admin/stats`)
      .then(res => res.json())
      .then(data => {
        console.log('Dashboard stats:', data); // 👈 Debug
        if (data.success) {
          setStats(data.stats);
        } else {
          alert('Failed to load stats');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Dashboard fetch error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!stats) return <p>No stats available.</p>;

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">Total Users: {stats.total_users}</div>

        <div className="card">Total Enrollments: {stats.total_enrollments}</div>
        <div className="card">Total Payments: {stats.total_payments}</div>
      </div>
       <CourseStats />
    </div>
  );
};

export default Dashboard;
