const express = require("express");
const router = express.Router()
const Films = require('../models/FilmsModel.js');

router.get('/', async (req, res) => {
     const query =  {actor_count : {$gt : 1}}
     const pageSize = 7;
     const films = await Films.find(query)
     .limit(pageSize)
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.json(films);
})


module.exports = router