const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobs');
const submissionRoutes = require('./routes/submissions');

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/submissions', submissionRoutes);

// Simple health check route
app.get('/', (req, res) => {
  res.send('API Running');
});
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Define PORT
const PORT = process.env.PORT;

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));