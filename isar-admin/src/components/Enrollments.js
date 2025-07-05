import React, { useEffect, useState } from 'react';
import './Enrollments.css';

const Enrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://isar-backend.onrender.com/api/admin/enrollments')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setEnrollments(data.enrollments);
        }
      })
      .catch(err => console.error('Fetch enrollments failed:', err));
  }, []);

  const filteredEnrollments = enrollments.filter(entry => {
    const userId = entry.user_id?.toString().toLowerCase() || '';
    const courseName = entry.course_name?.toLowerCase() || '';
    return userId.includes(searchTerm.toLowerCase()) || courseName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="enrollments-container">
      <h2>Course Enrollments</h2>
      <div className="enrollments-toolbar">
        <input
          type="text"
          placeholder="Search by User ID or Course..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table View for Desktop */}
      <table className="enrollments-table desktop-only">
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Course</th>
            <th>Price</th>
            <th>Enrolled On</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnrollments.length === 0 ? (
            <tr><td colSpan="5">No enrollments found.</td></tr>
          ) : (
            filteredEnrollments.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.user_id}</td>
                <td>{entry.course_name}</td>
                <td>₹{entry.price}</td>
                <td>{new Date(entry.enrolled_at).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Card View for Mobile */}
      <div className="enrollment-cards mobile-only">
        {filteredEnrollments.length === 0 ? (
          <p>No enrollments found.</p>
        ) : (
          filteredEnrollments.map((entry, index) => (
            <div className="enrollment-card" key={entry.id}>
              <p><strong>#{index + 1}</strong></p>
              <p><strong>User ID:</strong> {entry.user_id}</p>
              <p><strong>Course:</strong> {entry.course_name}</p>
              <p><strong>Price:</strong> ₹{entry.price}</p>
              <p><strong>Enrolled On:</strong> {new Date(entry.enrolled_at).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Enrollments;
