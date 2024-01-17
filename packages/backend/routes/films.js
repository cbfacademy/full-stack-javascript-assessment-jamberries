const express = require("express");
const router = express.Router();
const Genre = require("../models/GenreModel.js");


router.get('/api/films', async (req, res) => {
 try {
    const films = await Genre.find({});
    res.json(films);
 } catch (error) {
    console.error(error)
    res.status(500).send("Server Error")
 }
})

module.exports = router