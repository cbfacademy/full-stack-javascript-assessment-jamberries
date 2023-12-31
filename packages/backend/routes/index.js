const express = require("express");
const router = express.Router()
const path = require('path')


router.get('/', (req, res) => {
  //res.render('index')
 // res.send("Hello from the CBF Academy backend!");
  res.sendFile(path.join(__dirname, "../frontend/public", "index.html"))
})

module.exports = router