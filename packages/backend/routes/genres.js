const express = require("express");
const router = express.Router();
const Genre = require("../models/GenreModel");

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

module.exports = router