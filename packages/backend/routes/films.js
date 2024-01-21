/**
 * Express router providing film related routes
 * @module routes/films
 */

const express = require("express");
const router = express.Router();
const Genre = require("../models/GenreModel");
const Films = require('../models/FilmsModel.js');
const lib = require('../lib/lib')

/**
 * Route serving film to client
 * @name get/api/films/:id
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
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

/**
 * Route serving list of genres to client
 * @name get/api/genres
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
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

/**
 * Route serving list of films, querying the genre to client
 * where at least 3 of the actors are in the database
 * @name get/api/films
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/api/films', async (req, res) => {
   try {
      const page = parseInt(req.query.page || "0")
     const query = !req.query.genre ? {actor_count : {$gt : 1}} : {actor_count : {$gt : 1}, genres : parseInt(req.query.genre)}
      // const query = !req.query.genre ? {} :{ genres : parseInt(req.query.genre)}
      const pageSize = 18;
      const totalFilms = await Films.countDocuments(query)
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

/**
 * Route serving array of actor ids for lib function to add their movie
 * credits to database
 * @name post/api/films
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/api/films', async (req, res) => {
   try {
      const array = req.body.map( item => item.id)
      const actorIdArray= array.map(item => {
         return `${process.env.TMDB_ACTOR_CREDITS_URL}${item}/movie_credits?api_key=${process.env.TMDB_KEY}`
     })
     const result = lib.populateFilmsCollection(actorIdArray)
     res.send(result)
   } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
   }
})

/**
 * Route serving a delete film of an actor
 * @name delete/api/film:id
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.delete('/api/film/:id', async (req, res) => {
   try {
      const id = req.params.id
      const actorId = 
         `${process.env.TMDB_ACTOR_CREDITS_URL}${id}/movie_credits?api_key=${process.env.TMDB_KEY}`
     
   const result = lib.removeFilmsFromCollection(actorId)
   res.send(result)
   } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
   }
})


module.exports = router