import React, { useState, useEffect } from 'react';
import AdminRoutes from './AdminRoutes';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('admin') === 'true';
    setIsLoggedIn(stored);
  }, []);
  

  return (
    
    <AdminRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    
  );
};

export default App;
