
require('dotenv').config();
const mongoose = require("mongoose");
const FilmsModel = require('../models/FilmsModel.js');
const ActorsModel = require('../models/ActorsModel.js');
const GenreModel = require('../models/GenreModel.js');
const db = process.env.MONGO_URI;
const authToken = process.env.TMDB_TOKEN

const actor = 0

const apiKey = process.env.TMDB_KEY
//const actorCreditsUrl = [`${process.env.TMDB_ACTOR_CREDITS_URL}${actor}/movie_credits&api_key=${apiKey}&?language=en-US`];
const genreUrl = [`${process.env.TMDB_GENRE_URL}&api_key=${apiKey}`]
const movieUrl = [`${process.env.TMDB_MOVIE_URL}&api_key=${apiKey}`]


const fetch = require("node-fetch");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:'Bearer' + authToken
    }
};


let filmData;
let filmCounter = 0;
let actorIdArray = [];
mongoose.connect(db)
.then(() => console.log("mongodb connection success"))
//.then(() => getURLarray())
.then(()=> createFilmCollection())
//.then(() => process.exit())
.catch(error => console.log(error));

function createFilmCollection () {
  const FilmsModel = require('../models/FilmsModel.js');

  actorIdArray.map(async actorIdArray => {
    try {
      const response = await fetch(actorCreditsUrl);
      const filmJson = await response.json();
      filmData = filmJson.cast;

      for (let i = 0; i < filmData.length; i++) {     
        //Ignore documentaries with archive footage
        if(filmData[i].character !== "Self (archive footage)") {

          let query = FilmsModel.where({tmdb_id: filmData[i].id})
          let filmExits = await query.findOne()

          if(filmExits == null) {
            let film = new FilmsModel({
              title: filmData[i].title,
              tmdb_id: filmData[i].id,
              genres: filmData[i].genre_ids,
              overview:filmData[i].overview,
              poster_path: filmData[i].poster_path,
              backdrop_path: filmData[i].backdrop_path,
              release_date: filmData[i].release_date,
              actor_count: 1
            })   
      
            film.save()
            .then(()=> console.log(`Saved Item ${filmData[i].title}`))
            .catch(error => console.log(error))
          } else {
            let query = { tmdb_id : filmData[i].id}
            
            FilmsModel.findOneAndUpdate(query, {$inc : {actor_count: 1}}, {new: true})
            .then(()=> console.log(`Updated Item ${filmData[i].title}`))
            .catch(error => console.log(error))
          }

          filmCounter++;
        
          if (filmCounter === filmData.length) {         
            mongoose.disconnect()
            .then(() => console.log("saved succesfully and mongodb disconnected"))
            .catch(error => console.log(error));     

            break;  
          } 
        }
      }
    }
    catch (error) {
      console.log(error);
    }
    })
    }

    function populateGenreCollection(genreUrl, options) {
        genreUrl.map(async genreUrl => {
      try {
        const res = await fetch(genreUrl, options);
        const genreJson = await res.json();
        genreData = genreJson.genres;   

        for (let i = 0; i < genreData.length; i++) {      
          let genre = new GenreModel({
              name: genreData[i].name,
              tmdb_id: genreData[i].id,
          })   
          genre.save()
          .then(()=> console.log(`Saved Item ${genreData[i].name}`))
          .catch(error => console.log(error))
        }
      } 
      catch (error) {
        console.log(error);
      }
    })
    }

    function getURLArray (array) {
      for (let i = 0; i < array.length; i++){
        array[i]= `${actorCreditsUrl}${array[i]}/movie_credits&api_key=${apiKey}&?language=en-US`
      }
      return array
    }

// Create an array or urls using actor person_id
//  - iterate over actor ids in db - retrieve array of ids
// For each id in array, perform fetch. If tmdb_id exists already, ignore

// Possibly ignore credits with character: Self (archive footage)
// */

  //const actorCreditsUrl = [`${process.env.TMDB_ACTOR_CREDITS_URL}${actor}/movie_credits?api_key=${apiKey}&?language=en-US`];

  // will need different model for actors

  // const finder = ActorsModel.find({
  //   "tmdb_id": {
  //     "$ne": null
  //   }
  // })
  
// const finder = mongoose.connection.db.collection('actors').find({
//     "name": "Viola Davis"
//   })
//  console.log(finder)
//   //console.log(ActorsModel.find({}).select('tmdb_id'))
// }

module.exports = createFilmCollection