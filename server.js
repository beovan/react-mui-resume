require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const profileRouter = require('./api/routes/profiles');
app.use('/profile', profileRouter);

app.listen(3000, () => console.log('Server started'));