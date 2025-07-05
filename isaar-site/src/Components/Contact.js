import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitted(true);

    const data = {
      ...formData,
      access_key: "ec5af081-d935-4fa2-8af3-9e3386379759"
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (result.success) {
        console.log("Success:", result);
      } else {
        console.error("Error:", result);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS</title>
        <meta
      name="description"
      content="Get in touch with ISAR. Contact us for certified drone, robotics, and aerospace training programs across India. Phone, email, and location info available."
    />
    <meta
      name="keywords"
      content="contact ISAR, ISAR address, drone institute contact, robotics classes India, aerospace training location"
    />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="ISAR | Best Drone Training in India" />
        <meta
          property="og:description"
          content="Learn drone flying, aerial survey, and robotics from certified experts at ISAR – Indian Scientific Aerospace and Robotics."
        />
        <meta property="og:image" content="/isar-preview.png" />
        <meta property="og:url" content="https://www.isar.in" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ISAR | Drone Training Institute in India" />
        <meta name="twitter:description" content="Expert drone pilot training in Chennai at ISAR. Join India's top aerospace and robotics institute." />
        <meta name="twitter:image" content="/isar-preview.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ISAR - Indian Scientific Aerospace and Robotics",
            "image": "https://www.isar.in/isar-preview.png",
            "url": "https://www.isaar.in",
            "telephone": "+91-6374720788",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "339/2 at kurunji Nagar Valayapatti, Mohanur , Namakkal District, Tamil Nadu",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "637020",
              "addressCountry": "IN"
            },
            "description": "Top drone training center in India, offering hands-on certification in drone tech, robotics, and aerospace.",
            "sameAs": ["https://www.instagram.com/_isar_25"]
          })}
        </script>
      </Helmet>
      <section id="contact" className="contact">
      <div className="location-info">
        <h2>Our Location</h2>
        <p><strong>Visit us at</strong><br />
          339/2 at Kurunji Nagar Valayapatti, Mohanur,<br />
          Namakkal district, Tamil Nadu 637020
        </p>
        <p><strong>Contact Number</strong><br />
          +91 6374720788
        </p>
        <p><strong>Email ID</strong><br />
          admin@isaar.in
        </p>
        <p><strong>Instagram</strong><br />
          <a  href="https://www.instagram.com/_isar_25?igsh=MTR6OWFrd2V6dWs5Zw==">ISAR</a>
        </p>
        <p><strong>Linkedin</strong><br />
          <a  href="https://www.linkedin.com/company/indian-scientific-aerospace-and-robotics/">Indian scientific aerospace and Robotics </a>
        </p>
        
        {/* ✅ Embedded Google Map */}
        <div className="map-container" style={{ marginTop: '20px', height: '400px', width: '100%' }}>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7647785791364!2d78.2306213!3d11.1308884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcb9ccc5f2cd5%3A0x2f9085eec7b057b5!2sINDIAN%20SCIENTIFIC%20AEROSPACE%20AND%20ROBOTICS!5e0!3m2!1sen!2sin!4v1748328076032!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ISAR Location"
          ></iframe>
        </div>
      </div>

      <h2>Contact Us</h2>
      {submitted && <p className="success-msg">Thank you for reaching out! We'll get back to you soon.</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="5"
        />
        <button type="submit">Send</button>
      </form>
    </section>
    </>
  );
};

export default Contact;