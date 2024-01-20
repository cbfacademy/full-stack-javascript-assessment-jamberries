
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


const databaseFunction = (actorIdArray) => {
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
          
            // if (filmCounter === filmData.length) {         
            //   mongoose.disconnect()
              
              
            //   .catch(error => console.log(error));     
  
            //   break;  
            // } 
          }
        }
      }
      catch (error) {
        console.log(error);
      }
      })
    }
  
module.exports = {
    databaseFunction: databaseFunction
}