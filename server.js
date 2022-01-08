// Require Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Add Controllers
const cheesesController = require('./controllers/cheeses.js');

// Initialize the Application
const app = express();

// Configure Application Settings:
const {PORT=3001, DATABASE_URL} = process.env;

// Connect to and Configure the Database
mongoose.connect(DATABASE_URL);

// Set up Database Listeners
mongoose.connection
    .on("open", () => console.log("You are connected to MongoDB"))
    .on("close", () => console.log("You are disconnected from MongoDB"))
    .on("error", (error) => console.log(error))

// Mount Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Mount Routes
app.use("/", cheesesController);

// Application Listener
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
