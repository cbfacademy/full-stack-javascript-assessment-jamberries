require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
// const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const uri = process.env.MONGO_URI; 

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// client.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MongoDB", err);
//     return;
//   }
//   console.log("Connected to MongoDB");
//   client.close();
// });

mongoose.connect(uri)
.then(() => {
  console.log('Mongoose connection')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Specify all of the routes

app.use('/', require('./routes/index'))
app.use('/api/films', require('./routes/films'))
app.use('/api/genres', require('./routes/films'))
app.use('/api/actors', require ('./routes/actors'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

module.exports = app