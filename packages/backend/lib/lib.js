require('dotenv').config();
const mongoose = require("mongoose");
const FilmsModel = require('../models/FilmsModel.js');
const ActorsModel = require('../models/ActorsModel.js');
const GenreModel = require('../models/GenreModel.js');
const db = process.env.MONGO_URI;
const authToken = process.env.TMDB_TOKEN

const actor = 0

// declare api variables
const apiKey = process.env.TMDB_KEY
const genreUrl = `${process.env.TMDB_GENRE_URL}&api_key=${apiKey}`
const movieUrl = [`${process.env.TMDB_MOVIE_URL}&api_key=${apiKey}`]

/**
 * Function that takes an array of urls to retrieve actor credits and add those films into 
 * the database.
 * Checks if the film exists, if it does, increment actor count. If it doesnt, create a new record
 * @param {Array} actorIdArray an array of urls to call in order to retrieve actor credits 
 */
const populateFilmsCollection = (actorIdArray) => {
    let filmData;
    let filmCounter = 0;

    actorIdArray.map(async actorIdArray => {
      try {
        const response = await fetch(actorIdArray);
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
                   res.send({dbmessage:'success'})
              break;  
            } else {
                res.send({dbmessage : 'error'})
            }
          }
        }
      }
      catch (error) {
        console.log(error);
      }
      })
    }

/**
 * Populate the genre collection in the database with data using the genre url from
 * @param {String} genreUrl 
 */
async function populateGenreCollection(genreUrl) {

      try {
        const res = await fetch(genreUrl);
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
}

/**
 * Function used to seed data into the database
 * @param {String} db MongoDB URI 
 * @param {String} actorIdArray an array of urls to call in order to retrieve actor credits 
 */
async function seedFunction(db,actorIdArray) {
  mongoose.connect(db)
  .then(() => console.log("mongodb connection success"))
  //.then(() => getURLarray())
  .then(()=> populateFilmsCollection(actorIdArray))
  .then(() => populateGenreCollection(genreUrl))
  .catch(error => console.log(error));
}

module.exports = {
    populateFilmsCollection: populateFilmsCollection
}