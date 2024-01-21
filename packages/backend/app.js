require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const path = require('path');
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Films = require('./models/FilmsModel.js');
const Genre = require("./models/GenreModel");
const lib = require('./lib/lib')
const uri = process.env.MONGO_URI; 

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8000;

mongoose.connect(uri)
.then(() => {
  const app = express()

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);

  })
})


app.use(bodyParser.json({ }))
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.static(path.join(__dirname, '../frontend/public')))

  //client.close();
// Specify all of the routes

app.get('/api/home-page', async (req, res) => {
  const query =  {actor_count : {$gt : 1}}
  const pageSize = 7;
  const films = await Films.find(query)
  .limit(pageSize)
  res.json(films);
})


app.get('/api/films/:id', async (req, res) => {
  const tmdb_id = parseInt(req.params.id)
  const film = await Films.findOne({tmdb_id : tmdb_id}).exec();
  res.json(film);
})

app.get('/api/genres', async (req, res) => {
  const genres = await Genre.find({})
  .sort({name: 'asc'})
  res.json(genres);
})

app.get('/api/films', async (req, res) => {
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
})

app.post('/api/films', async (req, res) => {
  const array = req.body.map( item => item.id)
  const actorIdArray= array.map(item => {
     return `${process.env.TMDB_ACTOR_CREDITS_URL}${item}/movie_credits?api_key=${process.env.TMDB_KEY}`
 })
 lib.databaseFunction(actorIdArray)
 res.send('success')
  console.error(error)
  res.status(500).send("Server Error")
})


app.get('/api/actors', async (req, res) => {
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
  console.error(error)
  res.status(500).send("Server Error")
})

app.post('/api/actors', async (req, res) => {
try {
  const array = req.body.map( item => {
     const { id: tmdb_id, ...rest } = item;
     return { tmdb_id, ...rest }
    }
   );

  const actors = await Actors.insertMany(array)
  .then(function () {
     res.send({data:'Success'})
     console.log("Data inserted") 
 }).catch(function (error) {
     console.log(error)     
     res.send({data:'Success'})
 });

 

} catch (error) {
  console.error(error)
  res.status(500).send("Server Error")
}
})





module.exports = app