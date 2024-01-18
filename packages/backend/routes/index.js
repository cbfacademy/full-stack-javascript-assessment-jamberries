const express = require("express");
const router = express.Router()

router.get('/', (req, res) => {
  //res.render('index')
 // res.send("Hello from the CBF Academy backend!");
 res.json({
  "name": "Jasmine",
  "age": 31
 })
//  res.sendFile(path.join(__dirname, "../frontend/public", "index.html"))
})

module.exports = router