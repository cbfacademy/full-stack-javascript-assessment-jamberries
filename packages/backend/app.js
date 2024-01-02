const createError = require('http-errors')
const debugError = require('debug')('jamberries:error:app')
const express = require("express");
const helmet = require("helmet");
const path = require('path')
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI; // Add your connection string from Atlas to your .env file. See https://docs.atlas.mongodb.com/getting-started/
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.static(path.join(__dirname, '../frontend/public')))

// Specify all of the routes
app.use('/', require('./routes/index'))


client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB", err);
    return;
  }
  console.log("Connected to MongoDB");
  client.close();
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
  })
  
  // error handler
  app.use(function (err, req, res, next) {
    if (err.name === 'NotFoundError') {
      res.status(404)
    } else if (err.name === 'ForbiddenError') {
      res.status(403)
    } else {
      debugError(err)
      console.log(err)
      res.status(500)
    }
    res.send()
  })

module.exports = app