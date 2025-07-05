import React from 'react';
import Navbar from './Navbar';

const AdminLayout = ({ children, setIsLoggedIn }) => {
  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div className="admin-main-content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
