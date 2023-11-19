// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('Button clicked!');
  
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username: email,
        password,
      });
  
      if (response.data.success) {
        // Login successful, redirect to the adminDashboard
        navigate('/adminDahboard');
      } else {
        // Handle login failure
        console.log(response.data.message);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login.');
    }
  };

  return (
    <div style={{ backgroundColor: 'rgb(162 209 255)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        {/* Navbar content */}
      </nav>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Log In</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="username" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                  </div>
                  <Link to="/dataEntry" className="btn btn-primary btn-block" onClick={handleLogin}>
                    Log In
                  </Link>
                </form>
                {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                <div className="text-center mt-3">
                  <Link to="/register">Don't have an account? Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
