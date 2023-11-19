// Electricity.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2'; // Uncomment this line

const Electricity = () => {
  const [dailyData, setDailyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    // Fetch daily and monthly electricity consumption data
    const fetchData = async () => {
      try {
        const dailyResponse = await axios.get('http://localhost:3001/api/daily');
        const monthlyResponse = await axios.get('http://localhost:3001/api/monthly');

        setDailyData(dailyResponse.data);
        setMonthlyData(monthlyResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  const dailyChartData = {
    labels: dailyData.map(entry => entry.date),
    datasets: [
      {
        label: 'Daily Consumption',
        data: dailyData.map(entry => entry.consumption),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        lineTension: 0.1,
      },
    ],
  };
  
  const monthlyChartData = {
    labels: monthlyData.map(entry => entry.month),
    datasets: [
      {
        label: 'Monthly Consumption',
        data: monthlyData.map(entry => entry.consumption),
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        lineTension: 0.1,
      },
    ],
  };

  useEffect(() => {
    // Fetch daily and monthly electricity consumption data
    const fetchData = async () => {
      try {
        const dailyResponse = await axios.get('http://localhost:3001/api/daily');
        const monthlyResponse = await axios.get('http://localhost:3001/api/monthly');
  
        console.log('dailyData:', dailyResponse.data);
        console.log('monthlyData:', monthlyResponse.data);
  
        setDailyData(dailyResponse.data);
        setMonthlyData(monthlyResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount
  

  return (
    <div>
      <h1>Electricity Consumption</h1>

      <div>
        <h2>Daily Consumption</h2>
        <Line data={dailyChartData} />
      </div>

      <div>
        <h2>Monthly Consumption</h2>
        <Line data={monthlyChartData} />
      </div>
    </div>
  );
};

export default Electricity;
