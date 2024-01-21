require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const path = require('path');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const uri = process.env.MONGO_URI; 

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8000;

mongoose.connect(uri)
.then(() => {


  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);

  })
})


app.use(bodyParser.json({ }))
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname, '../frontend/public')))

  //client.close();
// Specify all of the routes

app.use('/', require('./routes/index'))
app.use('/api/films', require('./routes/films'))
app.use('/api/genres', require('./routes/films'))
app.use('/api/actors', require ('./routes/actors'))


module.exports = app