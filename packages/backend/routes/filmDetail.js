const express = require("express");
const router = express.Router();
const Films = require("../models/FilmsModel");


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

module.exports = router