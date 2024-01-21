const express = require("express");
const router = express.Router();
const Genre = require("../models/GenreModel");
const Films = require('../models/FilmsModel.js');
const lib = require('../lib/lib')

// router.get('/api/films', async (req, res) => {
//  try {
//     const page = parseInt(req.query.page || "0")
//     const pageSize = 18;
//     const totalFilms = await Films.countDocuments({})
//     const films = await Films.find({})
//     .sort({title: 'asc'})
//     .limit(pageSize)
//     .skip(pageSize * page);

//     res.json({films, pages: Math.ceil(totalFilms / pageSize)});
//  } catch (error) {
//     console.error(error)
//     res.status(500).send("Server Error")
//  }
// })

router.get('/api/films/:id', async (req, res) => {
   try {
      const tmdb_id = parseInt(req.params.id)
      const film = await Films.findOne({tmdb_id : tmdb_id}).exec();
      res.json(film);
   } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
   }
})

router.get('/api/genres', async (req, res) => {
   try {
      const genres = await Genre.find({})
      .sort({name: 'asc'})
      res.json(genres);
   } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
   }
})

router.get('/api/films', async (req, res) => {
   try {
      const page = parseInt(req.query.page || "0")
    //  const query = !req.query.genre ? {actor_count : {$gt : 1}} : {actor_count : {$gt : 1}, genres : parseInt(req.query.genre)}
      const query = !req.query.genre ? {} :{ genres : parseInt(req.query.genre)}
      const pageSize = 18;
      const totalFilms = await Films.countDocuments({})
      const films = await Films.find(query)
      .sort({title: 'asc'})
      .limit(pageSize)
      .skip(pageSize * page);
  
      res.json({
         films, 
         pages: Math.ceil(totalFilms / pageSize)});

   } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
   }
})

router.post('/api/films', async (req, res) => {
   try {
      const array = req.body.map( item => item.id)
      const actorIdArray= array.map(item => {
         return `${process.env.TMDB_ACTOR_CREDITS_URL}${item}/movie_credits?api_key=${process.env.TMDB_KEY}`
     })
     lib.databaseFunction(actorIdArray)
   } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
   }
})


module.exports = router