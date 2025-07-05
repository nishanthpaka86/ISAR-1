import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './UserDashboard.css';

import o1 from '../o1.png';
import o2 from '../o2.png';
import o3 from '../o3.png';
import o4 from '../o4.png';

import logo from '../logo1.png';
const imageMap = {
  'Young Learners': o1,
  'Junior High': o2,
  'Senior High': o3,
  'Advanced Training': o4,
};

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchCourses = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/auth/courses/${user.id}`);
        const data = await res.json();
        if (data.success) {
          setCourses(data.courses);
        } else {
          console.error('Failed to load courses:', data.message);
        }
      } catch (err) {
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user, navigate]);

     /*const downloadCertificate = (courseName, date) => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("ISAR - Indian Scientific Aerospace and Robotics", 20, 30);

    doc.setFontSize(16);
    doc.text("Certificate of Completion", 70, 50);

    doc.setFontSize(12);
    doc.text(`This certifies that`, 20, 70);
    doc.setFont("helvetica", "bold");
    doc.text(`${user.fullName}`, 20, 80);
    doc.setFont("normal");
    doc.text(`has successfully completed the course`, 20, 90);
    doc.text(`"${courseName}"`, 20, 100);
    doc.text(`on ${new Date(date).toLocaleDateString()}.`, 20, 110);

    doc.text("ISAR Official Signature", 20, 140);
    doc.line(20, 142, 80, 142); // Signature line

    doc.save(`${user.fullName}-${courseName}-certificate.pdf`);
  };*/

  const downloadReceipt = async (course) => {
  const doc = new jsPDF();

  // Utility: Convert images to base64
  const convertToBase64 = (imgPath) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imgPath;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
    });
  };

  const logoBase64 = await convertToBase64(logo);
 

  // 🏫 Header with Logo and Institute Name
  doc.addImage(logoBase64, 'PNG', 15, 10, 25, 25); // Logo
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS INSTITUTE', 45, 25);

  // 🧾 Title
  doc.setFontSize(16);
  doc.text('Payment Receipt', 85, 40);

  // 📋 Table-style details
  const info = [
    ['Receipt ID', course.receipt_id || 'N/A'],
    ['Name', user.fullName],
    ['Email', user.email],
    ['Course', course.course_name],
    ['Amount Paid', `₹${course.price}`],
    ['Date', new Date(course.enrolled_at).toLocaleDateString()],
    ['Order ID', course.razorpay_order_id || 'N/A'],
    ['Payment ID', course.razorpay_payment_id || 'N/A'],
  ];

  let y = 50;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);

  info.forEach(([label, value], i) => {
    doc.setFillColor(245, 245, 245); // Light background for label
    doc.rect(20, y + i * 10, 50, 10, 'F'); // Label cell
    doc.rect(70, y + i * 10, 120, 10);     // Value cell
    doc.text(label, 22, y + 7 + i * 10);
    doc.text(value.toString(), 72, y + 7 + i * 10);
  });

  // ✅ Footer note
  doc.setFontSize(10);
  doc.text('Thank you for your payment!', 20, y + info.length * 10 + 15);

  // 💾 Save
  doc.save(`${user.fullName}-${course.course_name}-receipt.pdf`);
};

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.fullName || 'User'} 👋</h2>
      <p>Email: {user?.email}</p>

      <h3>Your Enrolled Courses:</h3>
      {loading ? (
        <p>Loading courses...</p>
      ) : courses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <div className="enrolled-courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="enrolled-course-card">
              <img
                src={imageMap[course.course_name] || o1}
                alt={course.course_name}
                className="enrolled-course-image"
              />
              <div className="course-info">
                <h4>{course.course_name}</h4>
                <p><strong>Price:</strong> ₹{course.price}</p>
                <p><strong>Enrolled on:</strong> {new Date(course.enrolled_at).toLocaleDateString()}</p>

                {/*<button
                  className="logout-button"
                  onClick={() => downloadCertificate(course.course_name, course.enrolled_at)}
                  style={{ marginTop: '10px' }}
                >
                  🎓 Download Certificate
                </button>*/}

                <button
                  className="logout-button"
                  onClick={() => downloadReceipt(course)}
                  style={{
                    marginTop: '10px',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 12px',
                    cursor: 'pointer',
                  }}
                >
                  🧾 Download Receipt
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
