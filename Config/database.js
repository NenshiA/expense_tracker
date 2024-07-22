require('dotenv').config();
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/expense_tracker'; // Change this URI to your MongoDB URI

mongoose.connect(MONGODB_URI, {
}).then(() => {
    console.log('Connected to MongoDB.......');
}).catch((error) => {
    console.error('Error connecting to MongoDB:.......', error);
});

module.exports = mongoose.connection;