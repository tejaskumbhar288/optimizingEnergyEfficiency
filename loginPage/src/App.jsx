import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AdminDashboard from './components/adminDashboard';  // Import the AdminDashboard component
import Signup from './components/Signup';
import Login from './components/Login';
// import Electricity from './components/Electricity';
import NotFound from './components/NotFound';
import DataEntry from "./components/dataEntry";
import DataShow from './components/dataShow';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        {/* Update the route for the Electricity component */}
        {/* <Route path='/electricity' element={<Electricity />} /> */}

        {/* Update the route for the AdminDashboard component */}
        <Route path='/adminDashboard' element={<AdminDashboard />} />
        <Route path="/dataEntry" element={<DataEntry />} />
        <Route path='/dataShow' element={<DataShow />} />



        {/* Add a 404 page for routes that don't match */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
