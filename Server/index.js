// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const EmployeeModel = require("./models/Employee");

// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Employee');  // Import UserModel first

const ElectricityData = require('./models/ElectricityData');
const app = express();
app.use(express.json());
app.use(cors());

// ... (other code)



app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Dummy data for testing


// ...

app.get('/api/data-show', async (req, res) => {
  try {
    // Fetch electricity data from MongoDB
    const electricityData = await ElectricityData.find();
    res.json(electricityData);
  } catch (error) {
    console.error('Error fetching electricity data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/data/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Use the Mongoose model to remove the document by ID
    const result = await ElectricityData.findByIdAndDelete(id);

    if (!result) {
      // If the document with the given ID was not found
      return res.status(404).send('Document not found');
    }

    res.status(200).send('Document deleted successfully');
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).send('Internal Server Error');
  }
});




app.put('/api/data/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { newData } = req.body;

    // Use the Mongoose model to update the document by ID
    const result = await ElectricityData.findByIdAndUpdate(id, { consumption: newData });

    if (!result) {
      // If the document with the given ID was not found
      return res.status(404).send('Document not found');
    }

    res.status(200).json({ message: 'Document updated successfully' });
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.post('/api/data-entry', async (req, res) => {
  const { date, consumption } = req.body;

  try {
    // Save the electricity consumption data to MongoDB using Mongoose
    const newEntry = new ElectricityData({
      date: new Date(date),
      consumption,
    });

    await newEntry.save();

    res.status(201).json({ message: 'Electricity data saved successfully' });
  } catch (error) {
    console.error('Error saving electricity data to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add this route to handle login
// Add this route to handle login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists in the MongoDB collection
    const user = await UserModel.findOne({ name: username });

    if (!user) {
      // User not found, send a message to sign up
      return res.status(404).json({ error: 'User not found. Please sign up.' });
    }

    // Check if the password is correct
    if (user.password === password) {
      // Password is correct
      res.json({ success: true, message: 'Login successful' });
    } else {
      // Password is incorrect
      res.status(401).json({ error: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/register', async (req, res) => {
  const { name, email, password, rollNo } = req.body;

  try {
    // Save the user registration data to MongoDB using Mongoose
    const newUser = new UserModel({
      name,
      email,
      password,
      rollNo, // Include rollNo in the registration
    });

    await newUser.save();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// ...


app.get('/register', async (req, res) => {
  const { name, email, password, rollNo } = req.body;

  try {
    // Create a new instance of the UserModel
    const newUser = new UserModel({
      name,
      email,
      password,
      rollNo,
    });

    // Save the user to the MongoDB collection
    await newUser.save();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Endpoint to get daily consumption data
app.get('/dataEntry', async (req, res) => {
  try {
    // Replace this with actual logic to fetch data from MongoDB
    // For now, we're returning dummy data
    res.json();
  } catch (error) {
    console.error('Error fetching daily data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

