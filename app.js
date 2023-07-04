require('dotenv').config();
// Importing modules

const express = require('express');

// Create Express app
const app = express();
app.set('view engine', 'ejs');
const connectDB = require('./server/db');
connectDB()

// Define port
const port =  5000 ||  process.env.PORT 


//Define listening port and route
app.get('/anatomy', (req, res) => {
    res.render('index')
})
app.listen(port, () => {
    console.log(`App is listening at ${port}`);
})