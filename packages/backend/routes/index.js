/**
 * Express router providing routes for the homepage
 * @module routes/actors
 */
const express = require("express");
const router = express.Router();
const Films = require('../models/FilmsModel.js');

/**
 * Route serving list of films to client. Filtering on where at least
 * two actors in the database star in
 * @name get/
 * @function
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', async (req, res) => {
  try {
     const query =  {actor_count : {$gt : 1}}
     const pageSize = 7;
     const films = await Films.find(query)
     .limit(pageSize)
     res.json(films);

  } catch (error) {
     console.error(error)
     res.status(500).send("Server Error")
  }
})

module.exports = router