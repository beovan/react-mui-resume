require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());
const profileRouter = require('./api/routes/Profiles/Profiles');
app.use('/Profiles', profileRouter);

app.listen(3000, () => console.log('Server started'));

// 
module.exports = app;