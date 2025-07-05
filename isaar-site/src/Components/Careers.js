import React, { useState } from 'react';
import join from'../join.jpg';
import './Careers.css';
import { Helmet } from 'react-helmet';

const jobOpenings = [
  
    {
  title: '🛩️ UAV Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design and develop UAV systems, including airframes, propulsion systems, avionics, and payloads.</li>
        <li>Conduct testing and evaluation of UAV components and systems to ensure performance, reliability, and safety.</li>
        <li>Collaborate with cross-functional teams such as engineers, technicians, and project managers to integrate UAV systems into overall projects and applications.</li>
        <li>Manage and execute UAV flight missions for various applications, including data collection, surveillance, mapping, and research.</li>
        <li>Liaise with regulatory authorities and stakeholders to ensure compliance with UAV operation regulations and safety protocols.</li>
        <li>Provide technical expertise and guidance on UAV capabilities and applications to support business development activities.</li>
        <li>Mentor and train other team members in UAV operation, maintenance, and troubleshooting procedures.</li>
        <li>Analyse and interpret UAV flight data to extract insights and optimize performance.</li>
        <li>Ensure proper documentation of UAV design, testing, maintenance, and operational procedures.</li>
        <li>Take accountability for the successful design, operation, and maintenance of UAV systems, contributing to the achievement of project goals and objectives.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Aeronautical, Mechanical, Electrical Engineering, or related field.</li>
        <li>0–2 years of experience in UAV design, operation, or related field.</li>
        <li>Proficiency in UAV design software (e.g., SolidWorks, CATIA), flight planning software (e.g., Mission Planner, QGC), and UAV operation.</li>
        <li>Hands-on experience with UAV assembly, maintenance, and troubleshooting.</li>
        <li>Strong understanding of aerodynamics, flight dynamics, aircraft performance, and UAV systems integration.</li>
        <li>Excellent problem-solving and decision-making skills.</li>
        <li>Remote Pilot Certificate (RPC) in small or medium category is an added advantage.</li>
        <li>Effective verbal and written communication and collaboration skills.</li>
        <li>Ability to work independently and as part of a cross-functional team.</li>
        <li>Experience managing UAV flight missions for various applications (e.g., data collection, surveillance, mapping).</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Research and Development</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  ),

  },
 {
  title: '🧠 Avionics Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design and develop avionics systems for UAVs, including flight control, navigation, communication, and sensor integration with development boards such as STM32.</li>
        <li>Conduct testing and validation of avionics systems to ensure performance, reliability, and regulatory compliance.</li>
        <li>Collaborate with cross-functional teams to integrate avionics systems into UAV platforms, ensuring compatibility and functionality.</li>
        <li>Analyse system requirements and specifications to define avionics architecture and functionality, considering power budgeting (voltage and current).</li>
        <li>Manage procurement of avionics components and equipment, adhering to quality standards and project timelines.</li>
        <li>Support UAV flight testing and operations, troubleshooting avionics issues, and implementing solutions as needed.</li>
        <li>Stay updated on emerging technologies and industry trends in avionics engineering and UAV systems.</li>
        <li>Provide technical expertise and guidance on avionics systems to support business development activities and customer engagements.</li>
        <li>Ensure compliance with regulatory requirements governing avionics design, testing, and operation.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Electronics and Communication Engineering, Electronics and Electrical Engineering, or related field.</li>
        <li>0–2 years of experience in avionics engineering or related field.</li>
        <li>Proficiency in avionics design software (Altium Designer, Eagle), simulation tools (MATLAB/Simulink), and programming languages (C, C++, Java, Python).</li>
        <li>Hands-on experience with avionics testing and validation procedures.</li>
        <li>Strong understanding of avionics systems, including flight control, navigation, communication, and sensor technologies.</li>
        <li>Experience with sensor integration with development boards such as STM32.</li>
        <li>Knowledgeable in power budgeting, including voltage (V) and current (I) considerations.</li>
        <li>Excellent problem-solving and decision-making skills.</li>
        <li>Effective communication and collaboration skills, both verbal and written.</li>
        <li>Ability to work independently and as part of a cross-functional team.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Research and Development</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},

  {
  title: '⚙️ Mechanical Design Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Collaborate with cross-functional teams of engineers, researchers, and technicians to conceptualize, design, and develop mechanical components and systems for UAVs.</li>
        <li>Utilize CAD software, such as SolidWorks (preferred), to create detailed 3D models and drawings of mechanical parts and assemblies.</li>
        <li>Conduct feasibility studies, simulations, and analyses to evaluate the performance, reliability, and manufacturability of mechanical designs.</li>
        <li>Generate engineering specifications, design documentation, and technical reports to communicate design concepts, requirements, and analysis results.</li>
        <li>Participate in design reviews, brainstorming sessions, and problem-solving activities to identify innovative solutions and address technical challenges.</li>
        <li>Collaborate with suppliers and manufacturing partners to ensure successful fabrication, assembly, and testing of mechanical components and systems.</li>
        <li>Support prototype development, testing, and validation, including the interpretation of test results and implementation of design modifications.</li>
        <li>Stay abreast of industry trends, emerging technologies, and best practices in mechanical design and aerospace engineering.</li>
        <li>Contribute to the continuous improvement of design processes, tools, and methodologies to enhance efficiency, quality, and innovation.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Mechanical Engineering or related field.</li>
        <li>Proficiency in CAD software such as SolidWorks (preferred), AutoCAD, Fusion 360, etc.</li>
        <li>0–2 years of experience in mechanical design engineering.</li>
        <li>Strong understanding of engineering principles and mechanics.</li>
        <li>Ability to design and develop mechanical components and systems.</li>
        <li>Experience conducting feasibility studies, analysis, and testing.</li>
        <li>Knowledge of material selection, manufacturing processes, and GD&T.</li>
        <li>Familiarity with regulatory standards and industry codes (e.g., ISO, ASME).</li>
        <li>Excellent problem-solving and decision-making skills.</li>
        <li>Effective verbal and written communication and collaboration skills.</li>
        <li>Ability to work independently and as part of a cross-functional team.</li>
        <li>Proven track record of delivering projects on time and within budget constraints.</li>
        <li>No active backlogs at the time of hiring.</li>
        <li>3 months probation period.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 3</li>
        <li><strong>Department:</strong> Research and Development</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
 {
  title: '🔬 Internship – Aerospace & Robotics',
  description: (
    <>
      <h4>Internship Structure</h4>
      <ul>
        <li><strong>Research & Development (R&D):</strong> Work alongside our R&D team to assist in the design, development, and testing of UAVs. Participate in brainstorming sessions, prototype development, and experimentation to explore innovative solutions and technologies.</li>
        <li><strong>Production:</strong> Gain practical experience in UAV manufacturing and assembly processes by working with our production team. Learn about quality control, process optimization, and production planning as you contribute to the assembly of UAV components and systems.</li>
        <li><strong>Management:</strong> Support our management team in various administrative and project-based tasks. Assist in scheduling meetings, preparing reports, and coordinating projects across different departments.</li>
      </ul>

      <h4>Key Responsibilities</h4>
      <ul>
        <li>Assist in research, design, and development activities under the guidance of experienced engineers and researchers.</li>
        <li>Participate in UAV production activities, including assembly, testing, and quality control inspections.</li>
        <li>Support administrative tasks in the management department, such as scheduling meetings, preparing presentations, and organizing documents.</li>
        <li>Collaborate with team members on project-based assignments and contribute ideas to improve processes and outcomes.</li>
        <li>Attend training sessions, workshops, and team meetings to enhance your knowledge and skills in the drone/aerospace industry.</li>
        <li>Adhere to company policies, safety guidelines, and ethical standards in all internship activities.</li>
      </ul>

      <h4>Qualification</h4>
      <ul>
        <li>Recent graduate or final-year student pursuing a B. Tech/M. Tech in Aerospace Engineering, Mechanical Engineering, Electrical Engineering, Business Administration, B.E in English, Human Resources or related field.</li>
        <li>Strong academic background with a passion for technology, innovation, and the aerospace industry.</li>
        <li>Excellent communication, collaboration, and problem-solving skills.</li>
        <li>Ability to work independently and as part of a team in a fast-paced environment.</li>
        <li>Eagerness to learn and willingness to take on new challenges and responsibilities.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Management and R&D</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
 {
  title: '🔧 Embedded Systems Developer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design, develop, and implement embedded systems for UAVs and robotic platforms including sensor integration, motor control, and communication protocols.</li>
        <li>Collaborate with R&D teams to prototype and test hardware-software interfaces in drone systems.</li>
        <li>Develop firmware using C/C++ or embedded Python, targeting microcontrollers (e.g., STM32, Arduino, ESP32) and real-time systems.</li>
        <li>Interface and calibrate a variety of sensors (GPS, IMU, LIDAR, barometer) and implement filtering algorithms (e.g., Kalman filters).</li>
        <li>Integrate communication protocols such as UART, SPI, I2C, CAN, and ensure reliable data transmission between subsystems.</li>
        <li>Support UAV system-level integration with flight controllers and ground control stations (e.g., Pixhawk, ArduPilot, QGC).</li>
        <li>Conduct unit testing and debugging using oscilloscopes, logic analyzers, and simulators.</li>
        <li>Assist in UAV production activities, including PCB assembly, quality testing, and embedded software flashing.</li>
        <li>Document system architecture, design specifications, and test procedures clearly and accurately.</li>
        <li>Participate in brainstorming and experimentation sessions to explore innovative UAV solutions.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Electronics, Electrical, Instrumentation, Mechatronics, or Computer Engineering.</li>
        <li>0–2 years of experience in embedded system design, preferably in aerospace, robotics, or IoT.</li>
        <li>Proficiency in embedded C/C++, real-time OS (RTOS), and microcontroller programming.</li>
        <li>Experience with PCB design tools (e.g., KiCad, Altium) is an advantage.</li>
        <li>Familiarity with communication protocols: UART, SPI, I2C, PWM.</li>
        <li>Strong analytical skills and understanding of control systems and signal processing.</li>
        <li>Exposure to UAV systems, drone hardware, or robotics projects is a plus.</li>
        <li>Excellent problem-solving, documentation, and collaboration skills.</li>
        <li>Willingness to learn, adapt, and contribute in a multi-disciplinary team environment.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Research and Development</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
{
  title: '💻 Software Developer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design, develop, and maintain custom software solutions for UAV systems, including mission control, simulation tools, and data processing platforms.</li>
        <li>Create web and desktop applications for UAV telemetry, real-time monitoring, diagnostics, and ground control.</li>
        <li>Integrate software with UAV flight controllers, embedded systems, and cloud services for data transmission and storage.</li>
        <li>Develop and manage APIs, data dashboards, and user interfaces for both internal and external stakeholders.</li>
        <li>Collaborate with cross-functional teams, including hardware engineers and drone pilots, to ensure seamless hardware-software integration.</li>
        <li>Optimize system performance and troubleshoot software issues related to UAV flight, communication, and sensor data interpretation.</li>
        <li>Ensure code quality, documentation, and version control using Git and collaborative development tools.</li>
        <li>Participate in R&D efforts focused on improving UAV autonomy, data analytics, and mission planning using AI/ML frameworks (optional but preferred).</li>
        <li>Maintain detailed technical documentation and support product lifecycle from concept to deployment.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Computer Science, Software Engineering, IT, or related field.</li>
        <li>0–2 years of experience in software development, preferably in aerospace, robotics, or IoT domains.</li>
        <li>Proficiency in Python, C++, or JavaScript; experience with frameworks like React, Flask, or Node.js is a plus.</li>
        <li>Strong knowledge of data structures, algorithms, and object-oriented programming.</li>
        <li>Experience with RESTful APIs, databases (SQL/NoSQL), and data visualization tools.</li>
        <li>Familiarity with Git, CI/CD pipelines, and agile development practices.</li>
        <li>Experience with UAV simulation tools (e.g., Gazebo, PX4 SITL) or ground control software (e.g., QGC, Mission Planner) is a plus.</li>
        <li>Good understanding of network protocols, real-time data streaming, and cloud integration (optional).</li>
        <li>Strong problem-solving, analytical, and teamwork skills.</li>
        <li>Passion for aerospace, robotics, and innovative technologies.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Research and Development</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
{
  title: '🛠 CAD Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Design and model UAV components, airframes, and structural assemblies using CAD software such as SolidWorks, CATIA, or AutoCAD.</li>
        <li>Develop 3D models, 2D drawings, and detailed part/assembly documentation for manufacturing and prototyping.</li>
        <li>Collaborate with R&D and production teams to ensure design feasibility, material compatibility, and aerodynamic performance.</li>
        <li>Participate in design reviews, apply engineering changes, and maintain version control of design documentation.</li>
        <li>Conduct tolerance analysis, weight estimation, and material selection aligned with UAV flight and safety standards.</li>
        <li>Optimize CAD models for 3D printing, CNC machining, or composite fabrication processes.</li>
        <li>Support prototype development and testing by providing technical drawings, exploded views, and BOMs.</li>
        <li>Work closely with embedded and software teams to integrate electronics, sensors, and mechanical components effectively.</li>
        <li>Ensure that all designs comply with regulatory guidelines, safety standards, and internal design protocols.</li>
        <li>Maintain organized records of CAD data, project timelines, and design iteration logs.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Mechanical Engineering, Aerospace Engineering, or a related field.</li>
        <li>0–2 years of experience in CAD design, preferably in the aerospace, automotive, or robotics sectors.</li>
        <li>Proficiency in SolidWorks, CATIA, AutoCAD, or equivalent 3D modeling software.</li>
        <li>Strong understanding of aerodynamics, materials science, and mechanical systems.</li>
        <li>Experience creating production-ready drawings, GD&T, and engineering documentation.</li>
        <li>Familiarity with FEA tools (e.g., ANSYS, SolidWorks Simulation) is a plus.</li>
        <li>Excellent visualization, design interpretation, and drafting skills.</li>
        <li>Strong problem-solving abilities and attention to detail.</li>
        <li>Effective teamwork and communication skills.</li>
        <li>Eagerness to contribute to cutting-edge UAV design and development.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Research and Development</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
{
  title: '🌬 Aerodynamics Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Analyze, design, and optimize the aerodynamic performance of UAVs, focusing on stability, control, lift, drag, and efficiency.</li>
        <li>Conduct Computational Fluid Dynamics (CFD) simulations using tools such as ANSYS Fluent, OpenFOAM, or XFLR5 to evaluate airframe performance.</li>
        <li>Collaborate with structural, propulsion, and control systems teams to ensure aerodynamic integrity across all design phases.</li>
        <li>Evaluate and refine airfoil shapes, wing configurations, fuselage profiles, and control surfaces.</li>
        <li>Conduct wind tunnel testing and correlate data with simulation outputs for design validation.</li>
        <li>Perform performance trade-off studies, identify drag reduction opportunities, and suggest innovative aerodynamic enhancements.</li>
        <li>Support UAV flight testing, data collection, and post-flight analysis to ensure performance matches simulation results.</li>
        <li>Document simulation parameters, methods, assumptions, and results with clarity and professionalism.</li>
        <li>Ensure aerodynamic designs meet relevant safety, regulatory, and performance standards.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Aerospace Engineering, Mechanical Engineering, or related field.</li>
        <li>0–2 years of experience in aerodynamic analysis or UAV design.</li>
        <li>Strong understanding of fluid dynamics, flight mechanics, airfoil theory, and stability/control principles.</li>
        <li>Proficiency in CFD software such as ANSYS Fluent, OpenFOAM, XFLR5, or equivalent.</li>
        <li>Experience with wind tunnel testing, boundary layer analysis, and drag prediction is a plus.</li>
        <li>Ability to read and interpret CAD models, simulation data, and technical documentation.</li>
        <li>Familiarity with UAV flight planning, propulsion-aero integration, and control surface tuning.</li>
        <li>Strong analytical, problem-solving, and teamwork skills.</li>
        <li>Good verbal and written communication with the ability to explain complex data and design decisions.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Research and Development</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
{
  title: '🛠 Manufacturing Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Plan, coordinate, and supervise the manufacturing and assembly of UAV components, ensuring timely and quality-driven production.</li>
        <li>Develop and implement manufacturing processes, work instructions, and tooling to optimize efficiency and product consistency.</li>
        <li>Perform quality checks, process audits, and root-cause analysis for production issues to maintain high-quality standards.</li>
        <li>Collaborate with R&D and design teams to ensure design for manufacturability (DFM) and support the smooth transition from prototype to production.</li>
        <li>Optimize production workflows, minimize waste, and implement Lean Manufacturing principles to reduce cycle time and cost.</li>
        <li>Maintain and calibrate machinery, equipment, and production tools, ensuring safety and compliance with standards.</li>
        <li>Assist in procurement and inventory control of raw materials, parts, and production supplies.</li>
        <li>Create and maintain technical documentation, such as process plans, SOPs, BOMs, and production reports.</li>
        <li>Train and supervise technicians or interns involved in the assembly of UAVs or drone subsystems.</li>
        <li>Support continuous improvement initiatives and participate in cross-functional projects.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Mechanical, Aeronautical, Manufacturing, or Production Engineering or a related field.</li>
        <li>0–2 years of experience in manufacturing, aerospace production, or UAV assembly.</li>
        <li>Hands-on knowledge of manufacturing tools, CNC machines, 3D printing, and assembly line equipment.</li>
        <li>Familiarity with CAD tools (SolidWorks, CATIA) and PLM systems.</li>
        <li>Strong understanding of material science, aerospace-grade materials, and structural joining techniques.</li>
        <li>Knowledge of quality systems (ISO 9001, AS9100) and Six Sigma/Lean methodologies is a plus.</li>
        <li>Excellent problem-solving, coordination, and documentation skills.</li>
        <li>Ability to thrive in a collaborative, fast-paced, and precision-driven environment.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu (Ready to relocate)</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Production & Quality</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
{
  title: '📜 Compliance & Certification Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Ensure that all UAV products and systems adhere to DGCA, MoCA, and other national/international aerospace standards and regulations.</li>
        <li>Develop and manage certification documentation, including system safety analysis, compliance matrices, and conformance reports.</li>
        <li>Liaise with regulatory bodies and certification authorities to submit technical documents, respond to queries, and obtain type certifications or operational approvals.</li>
        <li>Monitor changes in applicable aerospace laws, airworthiness standards, and safety protocols, and ensure timely updates to internal processes.</li>
        <li>Work closely with R&D, design, and quality teams to integrate compliance requirements into product development and testing.</li>
        <li>Conduct audits, assessments, and gap analyses to ensure organizational compliance across engineering, manufacturing, and operations.</li>
        <li>Guide and support the team in maintaining traceability, documentation, and process controls required for regulatory approval.</li>
        <li>Train internal teams and stakeholders on certification procedures, regulatory updates, and best practices in UAV compliance.</li>
        <li>Manage certification timelines, documentation archives, and liaise with clients or government bodies during UAV project approvals.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Aerospace, Aeronautical, Mechanical, Electrical Engineering, or a related field.</li>
        <li>0–2 years of experience in regulatory compliance, certification, or safety engineering in aerospace or UAV-related industries.</li>
        <li>Strong knowledge of DGCA CAR standards, UAV Rules 2021, and applicable ISO, AS9100, or FAA/EASA regulations.</li>
        <li>Experience preparing and managing certification packages, such as airworthiness documentation, safety cases, and operational manuals.</li>
        <li>Excellent analytical, communication, and technical writing skills.</li>
        <li>Familiarity with safety assessment methods (FMEA, FTA, risk analysis) and documentation tools.</li>
        <li>Ability to work with cross-functional teams to embed compliance from concept to deployment.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 1</li>
        <li><strong>Department:</strong> Quality & Regulatory Affairs</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},
{
  title: '📜 Quality Control (QC) Engineer',
  description: (
    <>
      <h4>Key Responsibilities</h4>
      <ul>
        <li>Perform inspection, testing, and validation of UAV components and assembled systems to ensure compliance with design and safety standards.</li>
        <li>Develop and maintain quality assurance protocols, inspection checklists, and documentation procedures for UAV production lines.</li>
        <li>Collaborate with R&D and Manufacturing teams to implement corrective actions and resolve quality-related issues.</li>
        <li>Oversee incoming material inspection, in-process checks, and final product validation as per technical drawings and specifications.</li>
        <li>Prepare and maintain detailed quality records, including inspection reports, non-conformance logs, and audit summaries.</li>
        <li>Ensure proper use of calibration tools, gauges, and measurement equipment, and maintain their periodic certification.</li>
        <li>Conduct root cause analysis (RCA) for defects or failures and assist in implementing process improvements to enhance quality and reduce rework.</li>
        <li>Participate in supplier quality audits, verification of raw materials, and alignment with quality benchmarks.</li>
        <li>Train production and assembly teams on quality standards, procedures, and proper documentation practices.</li>
        <li>Support certification and compliance teams by supplying quality assurance documentation required for regulatory audits.</li>
      </ul>

      <h4>Key Skills and Experience Required</h4>
      <ul>
        <li>B. Tech/M. Tech in Mechanical, Aeronautical, Electrical Engineering, or a related field.</li>
        <li>0–2 years of experience in quality control, inspection, or manufacturing assurance, preferably in aerospace or UAV industry.</li>
        <li>Familiarity with ISO 9001, AS9100, or equivalent quality standards and documentation practices.</li>
        <li>Hands-on experience with measuring instruments (e.g., Vernier calipers, micrometers, height gauges, etc.).</li>
        <li>Strong understanding of engineering drawings, GD&T, and manufacturing processes.</li>
        <li>Good analytical, problem-solving, and report-writing skills.</li>
        <li>Attention to detail and a passion for precision and process improvement.</li>
        <li>Ability to work collaboratively with cross-functional teams and production operators.</li>
      </ul>

      <h4>Job Details</h4>
      <ul>
        <li><strong>Location:</strong> Valaiyappatti, Tamil Nadu</li>
        <li><strong>Working Hours:</strong> 9:30 AM – 6:30 PM</li>
        <li><strong>Salary:</strong> Negotiable (As per industry standards)</li>
        <li><strong>Openings:</strong> 2</li>
        <li><strong>Department:</strong> Production & Quality</li>
        <li><strong>Accommodation:</strong> Provided by Company</li>
        <li><strong>Job Type:</strong> Full-Time</li>
      </ul>
    </>
  )
},


];

const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc5UL8x2Y4FcfFzWh-U2k0PupjB5JMqRTkJsQ60pZpkpcc0dg/viewform?usp=sharing&ouid=113728597131166950038'; // your form link

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
  <><Helmet>
        <title>INDIAN SCIENTIFIC AEROSPACE AND ROBOTICS</title>
        <meta
      name="description"
      content="Explore career opportunities at ISAR. We’re hiring trainers, instructors, and coordinators for drone, robotics, and aerospace programs across India."
    />
    <meta
      name="keywords"
      content="ISAR careers, drone training jobs, robotics instructor job, aerospace trainer India, work at ISAR, STEM jobs India"
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
    
    <section className="career-section">
       
      <h1 className='join'>Join Our Team</h1>
    <div>
      <img src={join} alt="join" className="full-width-img" />
    </div>

      <div className="career-options">
        <h2>Open Positions</h2>
        <ul>
          {jobOpenings.map((job, index) => (
            <li
              key={index}
              className="job-title"
              onClick={() => setSelectedJob(job)}
              style={{ cursor: 'pointer' }}
            >
              {job.title}
            </li>
          ))}
        </ul>
      </div>

      {selectedJob && (
        <div className="job-description">
          <h3>{selectedJob.title}</h3>
          <p>{selectedJob.description}</p>
          <button className="apply-button" onClick={handleApplyClick}>
            Apply for this Position
          </button>
        </div>
      )}
    </section>
    </>
  );
};

export default Careers;