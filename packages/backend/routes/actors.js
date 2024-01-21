// const express = require("express");
// const router = express.Router();
// const Actors = require("../models/ActorsModel");

// router.get('/api/actors', async (req, res) => {
//       const page = parseInt(req.query.page || "0")
//       const pageSize = 18;
//       const totalActors = await Actors.countDocuments({})
//       const actors = await Actors.find({})
//       .sort({name: 'asc'})
//       .limit(pageSize)
//       .skip(pageSize * page);

//       res.json({
//         actors, 
//         pages: Math.ceil(totalActors / pageSize)});
//       console.error(error)
//       res.status(500).send("Server Error")
// })

// router.post('/api/actors', async (req, res) => {
//    try {
//       const array = req.body.map( item => {
//          const { id: tmdb_id, ...rest } = item;
//          return { tmdb_id, ...rest }
//         }
//        );
  
//       const actors = await Actors.insertMany(array)
//       .then(function () {
//          res.send({data:'Success'})
//          console.log("Data inserted") 
//      }).catch(function (error) {
//          console.log(error)     
//          res.send({data:'Success'})
//      });

     
    
//    } catch (error) {
//       console.error(error)
//       res.status(500).send("Server Error")
//    }
// })


// module.exports = router