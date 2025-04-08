import React from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear any authentication state and redirect to login page
    history.push('/login');
  };

  return (
    <div className="dashboard">
      <h2>Welcome to your Dashboard!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
