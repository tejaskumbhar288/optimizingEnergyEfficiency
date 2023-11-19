// Signup.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [hostelNo, setHostelNo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Function to check if all required fields are filled
  const areFieldsFilled = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      rollNo.trim() !== "" &&
      hostelNo.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Frontend Axios request in Signup.js
      await axios.post('http://localhost:3001/register', { name, email, password });

      setIsSubmitted(true);
      navigate('/login');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'rgb(162 209 255)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>

            <Link to="/login" className="btn btn-outline-primary">Log In</Link>
          </div>
        </div>
      </nav>


      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center" style={{ color: '#003366' }}>Sign Up</h2>
                {isSubmitted ? (
                  <div className="alert alert-success" role="alert">
                    Data has been recorded successfully! <Link to="/login">Go to Login</Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" autoComplete="username" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Roll No</label>
                      <input type="text" className="form-control" onChange={(e) => setRollNo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Hostel No</label>
                      <select className="form-select" onChange={(e) => setHostelNo(e.target.value)}>
                        <option value="">Select Hostel</option>
                        <option value="Garnet C">Garnet C</option>
                        <option value="Garnet A">Garnet A</option>
                        <option value="Garnet B">Garnet B</option>
                        <option value="Jade">Jade</option>
                        <option value="Aquamarine">Aquamarine</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" disabled={!areFieldsFilled()}>
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
