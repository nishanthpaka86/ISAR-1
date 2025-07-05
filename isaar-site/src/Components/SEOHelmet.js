import React from "react";
import { Helmet } from "react-helmet";

const SEOHelmet = () => {
  return (
    <Helmet>
      <title>Drone & Aerospace Training | ISAR Institute</title>
      <meta
        name="description"
        content="Join ISAR for certified drone, aerospace, and robotics training. Hands-on learning for students, kids, and professionals."
      />

      {/* Organization Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "ISAR - Indian Scientific Aerospace and Robotics Institute",
          "alternateName": "ISAR",
          "url": "https://isar.in",
          "logo": "https://isar.in/logo.png",
          "description": "ISAR is a leading institute offering drone technology, aerospace, and robotics training with certified programs and internships for students and young learners.",
          "sameAs": [
            "https://www.instagram.com/isar.in",
            "https://www.facebook.com/isar.in",
            "https://www.linkedin.com/company/isar-in"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer support",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Name, Local Area",
            "addressLocality": "Your City",
            "addressRegion": "Your State",
            "postalCode": "XXXXX",
            "addressCountry": "IN"
          }
        }
        `}
      </script>

      {/* Course Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Drone Technology Internship",
          "description": "This certified internship program teaches UAV design, flight controllers, aerodynamics, simulations, and drone safety — perfect for students and drone enthusiasts.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "ISAR - Indian Scientific Aerospace and Robotics Institute",
            "sameAs": "https://isar.in"
          }
        }
        `}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;
