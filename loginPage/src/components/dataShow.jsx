// DataShow.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const tableStyle = {
  width: '75%',
  margin: 'auto',
  marginTop: '50px',
};

function DataShow() {
  const [electricityData, setElectricityData] = useState([]);
  const [updatingId, setUpdatingId] = useState(null);
  const [updateInput, setUpdateInput] = useState('');

  // Define fetchData outside the useEffect block
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/data-show');
      setElectricityData(response.data);
    } catch (error) {
      console.error('Error fetching electricity data:', error);
    }
  };

  useEffect(() => {
    // Fetch electricity data from the server on component mount
    fetchData();
  }, []);
  const handleUpdate = async (id) => {
    try {
      console.log('Updating data with ID:', id);
      console.log('Update input:', updateInput);

      const url = `http://localhost:3001/api/data/${id}`;
      console.log('Update URL:', url);

      const response = await axios.put(url, { newData: updateInput });
      console.log('Update response:', response.data);

      // Refresh data after updating
      fetchData();

      // Reset the updating state using a callback
      setUpdatingId((prevId) => (prevId === id ? null : prevId));
      setUpdateInput('');
    } catch (error) {
      console.error('Error updating electricity data:', error);
    }
  };



  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this entry?');
    if (confirmDelete) {
      try {
        // Delete logic
        const response = await axios.delete(`http://localhost:3001/api/data/${id}`);

        // Check if the deletion was successful (status code 200)
        if (response.status === 200) {
          // Update the local state by removing the deleted entry
          setElectricityData((prevData) => prevData.filter(entry => entry._id !== id));
        } else {
          console.error('Error deleting electricity data. Unexpected status:', response.status);
        }
      } catch (error) {
        console.error('Error deleting electricity data:', error);
      }
    }
  };



  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dataEntry">Data Entry</a>
                </li>

              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <h2>Electricity Data</h2>
      <table className="table" style={tableStyle}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Consumption</th>
          </tr>
        </thead>
        <tbody>
          {electricityData.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.date}</td>
              <td>{entry.consumption}</td>

              <td>
                {updatingId === entry._id ? (
                  <input
                    type="text"
                    value={updateInput}
                    onChange={(e) => setUpdateInput(e.target.value)}
                  />
                ) : (
                  entry.consumption
                )}
              </td>
              <td>
                {updatingId === entry._id ? (
                  <button disabled={!updateInput} onClick={() => handleUpdate(entry._id)}>
                    Save
                  </button>

                ) : (
                  <button onClick={() => setUpdatingId(entry._id)}>Update</button>
                )}
                <button onClick={() => handleDelete(entry._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default DataShow;
