const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//CONNECT TO DATABASE
connectDB();

//Test route
app.get('/test', (req, res) => {
    res.send('Server working properly');
});

//Start server
const PORT = 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));