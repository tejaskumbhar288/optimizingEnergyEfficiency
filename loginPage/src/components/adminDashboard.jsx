// adminDahboard.jsx


// Signup.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    // Function to check if all required fields are filled
    const areFieldsFilled = () => {
        return name.trim() !== "" && email.trim() !== "" && password.trim() !== "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3001/adminDashboard', { name, email, password });
            setIsSubmitted(true);
            navigate('/login');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/contact.html">Contact us</a>
                            </li>


                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <Link to="/login" className="btn btn-outline-primary">Log In</Link>



                    </div>
                </div>
            </nav>
            <div className="heade\r-container me-2"><h1>National Institute of Technology</h1></div>

            <div>


                <div>
                    <div><p>National Institute of Technology in the <abbr></abbr> use an average of 18.9 kilowatt-hours (<abbr>kWh</abbr>) of electricity and 17 cubic feet of natural gas per square foot (<abbr>ft<sup>2</sup></abbr>) of floorspace each year. Typical <abbr>US</abbr> higher-education buildings sized around 50,000 <abbr>ft<sup>2</sup></abbr> consume more than $100,000 worth of energy each year. Lighting, ventilation, and cooling equipment consume the most electricity, and space heating accounts for the majority of natural gas use (<strong>figure&nbsp;1</strong>). As a result, these technologies are among the best targets for finding energy savings. Many colleges and universities can cut their energy bills by 30% or more by implementing cost-effective energy-efficiency measures.</p><h2 id="toc-0" className="detail-header main-toc">Average energy-use data</h2><figure/>
                        <h5>Figure 1: Energy consumption in <abbr>NIT Trichy</abbr> higher-education facilities by end use</h5>
                        <figcaption>According to the <abbr>NIT Trichy</abbr> Energy Information Administration, more than half of the electricity used in higher-ed facilities goes toward ventilation, computer equipment, and lighting. Space heating accounts for more than 60% of natural gas usage.</figcaption>

                            <img src="https://api.bizenergyadvisor.com/sites/default/files/end_use_charts/us-colleges_and_universities-electricity.png" alt="A pie chart showing electricity end uses for colleges and universities in the US Census division: ventilation, 21%; miscellaneous, 21%; computing, 19%; lighting, 18%; cooling, 10%; refrigeration, 6%; and other, 5%. The Other category includes office equipment, heating, cooking, and water heating." title="A pie chart showing electricity end uses for colleges and universities in the US Census division: ventilation, 21%; miscellaneous, 21%; computing, 19%; lighting, 18%; cooling, 10%; refrigeration, 6%; and other, 5%. The Other category includes office equipment, heating, cooking, and water heating." className="electric-chart"/>
                            <img src="https://api.bizenergyadvisor.com/sites/default/files/end_use_charts/us-colleges_and_universities-natural_gas.png" alt="A pie chart showing natural gas end uses for colleges and universities in the US Census division: heating, 64%; water heating, 23%; miscellaneous, 10%; and other, 4%. The Other category includes cooling, and cooking." title="A pie chart showing natural gas end uses for colleges and universities in the US Census division: heating, 64%; water heating, 23%; miscellaneous, 10%; and other, 4%. The Other category includes cooling, and cooking." className="gas-chart"/>
                        </div>
                        <div className="row-wrapper"></div>
                            <h3>Top technology uses</h3>
                            <div className="top-technology"><a className="card vertical-card" href="/articles/heating-cooling"><div className="title">Heating and cooling</div></a></div>
                            <div className="top-technology"><a className="card vertical-card" href="/articles/ventilation-air-handling"><div className="title">Ventilation and air handling</div></a></div>
                            <div className="top-technology"><a className="card vertical-card" href="/articles/water-heating"><div className="title">Water heating</div></a></div>
                        
                    

                            
                        </div>
                    </div>
                </div>


    );
}

export default Signup;











// import React from 'react';

// const AdminDahboard = () => {
//     return (
//         <div>
//             <div>
//                 <nav className="main-nav clear"><div className="logo float-left">
//                     <a href="/"><img src="https://api.bizenergyadvisor.com/sites/default/files/customer/2019-04/friendly-power-logo_0.png" alt="" />
//                     </a></div><ul className="float-left no-print">
//                         <li><a className="dropdown-btn" href="/">Home</a></li>
//                         <li className="dropdown">
//                             <a className="dropdown-btn" href="/categories/business-types">Business types<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                                 <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></a>
//                             <div className="dropdown-content">
//                                 <a href="/articles/agribusiness">Agribusiness</a>
//                                 <a href="/articles/commercial-buildings">Commercial buildings</a>
//                                 <a href="/articles/education">Education</a><a href="/articles/food-and-beverage">Food and beverage</a>
//                                 <a href="/articles/gathering-places">Gathering places</a>
//                                 <a href="/articles/industrial-and-manufacturing">Industrial and manufacturing</a>
//                                 <a href="/articles/municipal-and-healthcare-facilities">Municipal and healthcare facilities</a>
//                                 <a href="/articles/office-buildings">Office buildings</a><a className="nav-view-all" href="/categories/business-types">View all business sectors</a>
//                             </div></li>
//                         <li className="dropdown">
//                             <a className="dropdown-btn" href="/categories/technologies">Technologies<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                                 <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></a>
//                             <div className="dropdown-content"><a href="/articles/building-structure-and-automation">Building structure and automation</a><a href="/articles/commissioning-strategies">Commissioning strategies</a>
//                                 <a href="/articles/cooking-and-refrigeration">Cooking and refrigeration</a><a href="/articles/electrification">Electrification</a><a href="/articles/electronics-and-office-equipment">Electronics and office equipment</a><a href="/articles/generators-and-renewable-energy">Generators and renewable energy</a><a href="/articles/heating-and-cooling">Heating and cooling</a><a href="/articles/lighting">Lighting</a><a href="/articles/pumps-and-motors">Pumps and motors</a><a href="/articles/ventilation-and-air-handling">Ventilation and air handling</a><a href="/articles/water-heating">Water heating</a><a className="nav-view-all" href="/categories/technologies">View all technologies</a></div></li><li><a className="dropdown-btn" href="#contact-us">Contact us</a></li></ul>
//                     <ul className="float-right no-print"><li><a href="https://www.esource.com">Back to main website</a></li></ul></nav>
//             </div>
//         </div>
//     );
// };

// export default AdminDahboard;
