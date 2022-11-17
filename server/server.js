// using env variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// express app
const app = express();
const projectRoutes = require('./routes/projects');

// access to req.body
app.use(express.json());
// global middleware
app.use((req,res,next) => {
    console.log('Middleware Info:');
    console.log("Path: " + req.path, "Method: " + req.method, "Request Body: " + JSON.stringify(req.body));
    next();
})

// routes
app.use('/api/projects',projectRoutes);
// connect to db, returns a promise
mongoose.connect(process.env.MONGO_URI)
.then((result) => {
    // listen for requests once connected to db
    // console.log(result);
    app.listen(process.env.PORT, () => {
        console.log('Connected to DB & listening on port ' + process.env.PORT);
    })
})
.catch((err) => {
    console.log(err);
})
