const express = require('express');
const app = express();

const dotenv = require('dontenv');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
app.use('./api/users', userRoutes);
mongoose.connect('mongodb://localhost:27017', ()=>{
    console.log('connected to mongodb!');
})
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res)=>{
    res.send("Welcome to homepage")
})
dotenv.config();
app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
})