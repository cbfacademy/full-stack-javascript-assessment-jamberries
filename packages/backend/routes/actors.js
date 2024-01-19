const express = require("express");
const router = express.Router();
const Films = require("../models/FilmsModel");
const Actors = require("../models/ActorsModel");



router.get('/api/actors', async (req, res) => {
   try {
      const page = parseInt(req.query.page || "0")
      const pageSize = 18;
      const totalActors = await Actors.countDocuments({})
      const actors = await Actors.find({})
      .sort({name: 'asc'})
      .limit(pageSize)
      .skip(pageSize * page);

      res.json({
        actors, 
        pages: Math.ceil(totalActors / pageSize)});
   } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
   }
})


module.exports = router