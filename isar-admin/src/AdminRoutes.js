// src/AdminRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserTable from './components/UserTable';
import CourseStats from './components/CourseStats';
import Enrollments from './components/Enrollments';
import Payments from './components/Payments';
import Login from './components/Login';
import AdminLayout from './components/AdminLayout';

const AdminRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Router>
    
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn
              ? <Navigate to="/dashboard" />
              : <Login onLogin={() => setIsLoggedIn(true)} />
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn
              ? <AdminLayout setIsLoggedIn={setIsLoggedIn}><Dashboard /></AdminLayout>
              : <Navigate to="/" />
          }
        />
        <Route
          path="/users"
          element={
            isLoggedIn
              ? <AdminLayout setIsLoggedIn={setIsLoggedIn}><UserTable /></AdminLayout>
              : <Navigate to="/" />
          }
        />
        <Route
          path="/courses"
          element={
            isLoggedIn
              ? <AdminLayout setIsLoggedIn={setIsLoggedIn}><CourseStats /></AdminLayout>
              : <Navigate to="/" />
          }
        />
        <Route
          path="/enrollments"
          element={
            isLoggedIn
              ? <AdminLayout setIsLoggedIn={setIsLoggedIn}><Enrollments /></AdminLayout>
              : <Navigate to="/" />
          }
        />
        <Route
          path="/payments"
          element={
            isLoggedIn
              ? <AdminLayout setIsLoggedIn={setIsLoggedIn}><Payments /></AdminLayout>
              : <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
};

export default AdminRoutes;
