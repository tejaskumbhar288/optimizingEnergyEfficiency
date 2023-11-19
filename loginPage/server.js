const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's URL
  credentials: true,
})); // Enable CORS for all routes

mongoose.connect('mongodb://localhost:27017/electricity-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const ElectricityData = mongoose.model('ElectricityData', {
  date: { type: Date, required: true },
  consumption: { type: Number, required: true },
});

app.use(express.json());

app.get('/api/data-show', async (req, res) => {
  try {
    const data = await ElectricityData.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Update data
app.put('/api/data/:id', async (req, res) => {
  const { id } = req.params;
  const { newData } = req.body;

  try {
    const updatedData = await ElectricityData.findByIdAndUpdate(id, { consumption: newData }, { new: true });
    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete data
app.delete('/api/data/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedData = await ElectricityData.findByIdAndDelete(id);
    res.json(deletedData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Define routes here (e.g., for handling login, register, etc.)
app.post('/login', (req, res) => {
  // Handle login logic
  
});

app.post('/register', (req, res) => {
  // Handle registration logic
});

// Add more routes as needed
// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's URL
  credentials: true,
}));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
