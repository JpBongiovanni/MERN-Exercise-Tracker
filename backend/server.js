import path from "path"
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const __dirname = path.resolve;
// require('./database');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

//middleware
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//heroku deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'MERN-EXERCISE-TRACKER/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "MERN-EXERCISE-TRACKER", "build", "index.html"));
    });
} else {
    app.get("*", (req, res) => {
        res.send("Api running");
    });
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



