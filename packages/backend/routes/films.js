const express = require("express");
const router = express.Router();
const Films = require("../models/FilmsModel");


router.get('/api/films', async (req, res) => {
 try {
    const page = parseInt(req.query.page || "0")
    const pageSize = 5;
    const totalFilms = await Films.countDocuments({})
    const films = await Films.find()
    .limit(pageSize)
    .skip(pageSize * page);

    res.json({films, pages: Math.ceil(totalFilms / pageSize)});
 } catch (error) {
    console.error(error)
    res.status(500).send("Server Error")
 }
})

// router.get("/films", async (req, res) => {
//   try {
//     const page = parseInt(req.query.page || "0")
//     const films = await Films.find({})
//     .limit(10)
    
//   } catch(error) {
//     console.error(error)
//     res.status(500).send("Server Error")
//   }
// })

// router.post("/", async (req,res) => {
//   try {
//     const pagination = req.body.pagination ? parseInt(req.body.pagination) : 10;
//     const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
//     Films.find({})
//         .sort({"id" : 1})
//         .skip((pageNumber - 1) * pagination)
//         .limit(pagination)
//         .then(data => {
//             res.status(200).send({"films": data})
//         })
//   } catch(error) {
//     console.error(error)
//     res.status(500).send("Server Error")
//   }
// })

module.exports = router