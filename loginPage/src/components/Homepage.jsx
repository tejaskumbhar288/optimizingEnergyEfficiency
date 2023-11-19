import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import your CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      
      <div>
        
      </div>
      {/* Background image styling */}
      <div className="background-image"></div>
    
      <div className="content">
        <h1>Welcome to the Energy Consumption Project</h1>
        <div className="options">
        <Link to="/register" type="button" className="btn btn-outline-warning">
            Signup
          </Link>
          <Link to="/Login" type="button" className="btn btn-outline-warning">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
