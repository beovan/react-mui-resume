require('dotenv').config();
//express
const express = require('express');
const app = express();
//mongoose
const mongoose = require('mongoose');

//Auth
const cors = require('cors'); // Import cors module
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const authRouter = require('./routes/auth');
// Connect to database
mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


// Middleware
app.use(cors());
// app.use('/auth', authRouter);
app.use(express.json());


// Routes
const profileRouter = require('./api/routes/Profile');
app.use('/Profiles', profileRouter);

// Start server
app.listen(3000, () => console.log('Server started'));