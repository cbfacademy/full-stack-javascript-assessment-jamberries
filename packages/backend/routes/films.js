const express = require("express");
const router = express.Router();
const Films = require("../models/FilmsModel");

router.get('/api/films', async (req, res) => {
 try {
    const page = parseInt(req.query.page || "0")
    const pageSize = 18;
    const totalFilms = await Films.countDocuments({})
    const films = await Films.find({})
    .sort({title: 'asc'})
    .limit(pageSize)
    .skip(pageSize * page);

    res.json({films, pages: Math.ceil(totalFilms / pageSize)});
 } catch (error) {
    console.error(error)
    res.status(500).send("Server Error")
 }
})

module.exports = router