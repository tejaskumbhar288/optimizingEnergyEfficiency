// DataEntry.jsx

import React, { useState } from 'react';
import axios from 'axios';


const cardStyle = {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '8px',
    width: '75%', // Adjust the width as needed
    margin: 'auto', // Center the card
    marginTop: '50px', // Add space from the top for better aesthetics
    marginLeft: '20%', // Add margin from the left to center the form
    paddingLeft: '20px', // Add padding from the left

};



const formStyle = {
    marginBottom: '15px',
};

const inputStyle = {
    width: '50px', // Adjust the width as needed
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: 'auto', // Center the input box
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

function DataEntry() {
    const [date, setDate] = useState('');
    const [consumption, setConsumption] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Format date to exclude time
            const formattedDate = new Date(date).toLocaleDateString('en-CA');

            // Send a POST request to your server to add data to MongoDB
            await axios.post('http://localhost:3001/api/data-entry', {
                date: formattedDate,
                consumption,
            });

            // Optionally, you can handle success or navigate to another page
            console.log('Data submitted successfully!');
            setSubmitMessage('Data submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
            // Update the state to show an error message
            setSubmitMessage('Error saving data. Please try again.');
        }
    };


    return (
        <div className="card text-center">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a link to  className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dataShow">Show</a>
                            </li>
                            
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div class="card-header">
                        <h2>Data Entry</h2>
                        {submitMessage && <p style={{ color: submitMessage.includes('successfully') ? 'green' : 'red' }}>{submitMessage}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Date:</label>
                                <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </div>

                            <div className="form-group">
                                <label>Consumption:</label>
                                <input type="number" className="form-control" value={consumption} onChange={(e) => setConsumption(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn-submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataEntry;
