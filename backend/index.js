const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const mongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Successfully connected to db.");
    }catch (error) {
        throw error;
    }
};

app.get('/', (req, res) => {
    res.send('Hello, Node.js backend is running!');
});
mongoDB();

app.use(cors());
app.use(express.json());

app.use('/user', require('./routes/user'));
app.use('/fav', require('./routes/fav'));

app.listen('3000', () => {
    console.log('Server is running on http://localhost:3000');
});