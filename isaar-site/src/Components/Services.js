import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Advanced from '../o1.png';
import Young from '../o2.png';
import Junior from '../o3.png';
import senior from '../o4.png';
import commingsoon from '../s5.png';
import './Services.css';

const Services = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [visibleDetails, setVisibleDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      fetch(`https://isar-backend.onrender.com/api/auth/courses/${user.id}`)
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setEnrolledCourses(data.courses.map(c => c.course_name));
          } else {
            console.warn("Failed to fetch enrolled courses");
          }
        })
        .catch(err => {
          console.error("Fetch error:", err);
        });
    }
  }, []);

  const toggleDetails = (course) => {
    setVisibleDetails(prev => (prev === course ? null : course));
  };

  const courseMap = {
    'Young Learners': {
      price: 10,
      discount: 90,
      image: Advanced,
      seoContent: (
        <div>
          <p>At ISAR, we believe early exposure to STEM education sparks lifelong curiosity. Our <strong>Young Learners program</strong> is crafted for kids aged 8–12, combining <strong>interactive drone flying</strong>, <strong>basic robotics</strong>, and <strong>coding fundamentals</strong> through hands-on activities and fun workshops.</p>
          
        </div>
      )
    },
    'Junior High': {
      price: 0,
      discount: 0,
      image: Young,
      seoContent: (
        <div>
          <p>The <strong>Junior High program</strong> bridges playful learning and structured drone education. Designed for ages 13–15, it introduces <strong>drone safety</strong>, <strong>manual and automated flight control</strong>, <strong>aerodynamics</strong>, and <strong>simple robotics</strong> using real-world applications.</p>
         
        </div>
      )
    },
    'Senior High': {
      price: 10,
      discount: 90,
      image: Junior,
      seoContent: (
        <div>
          <p>ISAR’s <strong>Senior High Program</strong> goes beyond basics into <strong>advanced flight simulation</strong>, <strong>GPS mapping</strong>, <strong>autonomous drone navigation</strong>, and <strong>robotics prototyping</strong>. This is perfect for students pursuing careers in <strong>aerospace</strong>, <strong>AI</strong>, or <strong>mechanical engineering</strong>.</p>
          
        </div>
      )
    },
    'Advanced Training': {
      price: 5999,
      discount: 25,
      image: senior,
      seoContent: (
        <div>
          <p>ISAR’s <strong>Advanced Training program</strong> is built for <strong>engineering students</strong>, <strong>researchers</strong>, and <strong>working professionals</strong> seeking <strong>industrial-grade drone and robotics training</strong>.</p>
          
        </div>
      )
    },
  };

  const handleEnroll = (courseName) => {
  if (!isLoggedIn) {
    navigate('/login');
    return;
  }

  const courseDetails = courseMap[courseName];
  if (!courseDetails) {
    alert("Course details not found!");
    return;
  }

  const { price, discount, image } = courseDetails;

  const selected = {
    course: courseName,
    price,
    discount,
    image,
  };

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || !user.id) {
    alert("User not found. Please login again.");
    localStorage.removeItem('user');
    navigate('/login');
    return;
  }

  if (price === 0) {
    // Free course enrollment
    fetch('https://isar-backend.onrender.com/api/auth/enroll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
        courseName: courseName,
        price: 0,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("✅ Enrolled successfully!");
          navigate('/dashboard');
        } else if (data.message === "Already enrolled in this course") {
          alert("⚠️ You are already enrolled in this course.");
          navigate('/dashboard');
        } else {
          alert("❌ Enrollment failed. Please try again.");
        }
      })
      .catch(err => {
        console.error('Free course error:', err);
        alert("Something went wrong. Please try again.");
      });
  } else {
    // Paid course – redirect to payment
    localStorage.setItem('selectedCourse', JSON.stringify(selected));
    navigate('/payment');
  }
};


  return (
    <section id="services" className="services">
      <h2>DRONE COURSE</h2>
      <p className="starting">
        ISAR is a premier institute providing innovative research and consultancy solutions to empower industries and academia. 
        We specialize in bridging the gap between research and practical applications.
      </p>

      <div className="about-grid">
        {Object.entries(courseMap).map(([course, { image, seoContent }], index) => {
          const isEnrolled = enrolledCourses.includes(course);
          return (
            <div className="c" data-aos="fade-up" key={index}>
              <img src={image} alt={course} />
              <div className="text">
                <h3>{course}</h3>
                <button
                  className="enroll-btn"
                  onClick={() => handleEnroll(course)}
                  disabled={isEnrolled}
                  style={{ backgroundColor: isEnrolled ? '#ccc' : '#2B72FB', cursor: isEnrolled ? 'not-allowed' : 'pointer' }}
                >
                  {isEnrolled ? "✅ Enrolled" : "Enroll Now"}
                </button>
                <button
                  className="syllabus-btn"
                  onClick={() => toggleDetails(course)}
                >
                  {visibleDetails === course ? "Hide Details" : "View Details"}
                </button>
                {visibleDetails === course && (
                  <div className="syllabus-list">
                    {seoContent}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="comingsoon-section" data-aos="zoom-in-up">
        <div className="image-overlay-container">
          <img src={commingsoon} alt="Coming Soon" className="full-width-img" />
          <h1 className="coming-soon-overlay">COMING SOON</h1>
        </div>
      </div>

      <Helmet>
        <title>INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS</title>
        <meta name="description" content="Explore ISAR's professional training services in drone technology, robotics engineering, UAV design, and aerospace systems. Hands-on, certified, and student-friendly." />
        <meta name="keywords" content="drone training services, robotics workshop India, aerospace internship, ISAR services, UAV technology, drone training for students" />
      </Helmet>
    </section>
  );
};

export default Services;
