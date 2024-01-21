require("dotenv").config();
const createError = require('http-errors');
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


mongoose.connect(uri)
.then(() => console.log("mongodb connection success"))
.catch((error) => console.log(error));

app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
//app.use(express.static(path.join(__dirname, '../frontend/public')))

  //client.close();
// Specify all of the routes
app.use('/', require('./routes/index'))
app.use('/api/films', require('./routes/films'))
app.use('/api/genres', require('./routes/films'))
app.use('/api/actors', require ('./routes/actors'))

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
      console.log(err)
      res.status(500)
    }
    res.send()
  })

module.exports = app