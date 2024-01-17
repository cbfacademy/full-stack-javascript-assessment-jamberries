require('dotenv').config();
const mongoose = require("mongoose");
const FilmsModel = require('./FilmsModel.js');
const ActorsModel = require('./ActorsModel.js');
const GenreModel = require('./GenreModel.js');
const db = process.env.MONGO_URI;
const authToken = process.env.TMDB_TOKEN

const apiKey = process.env.TMDB_KEY
const filmUrl = [`https://api.themoviedb.org/3/person/2888/movie_credits?api_key=${apiKey}&?language=en-US`];
const genreUrl = [`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`]


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
let genreData;
let genreCounter = 0;

mongoose.connect(db)
.then(() => console.log("mongodb connection success"))
//.then(() => getURLarray())
.then(()=> createDB())
//.then(() => process.exit())
.catch(error => console.log(error));


/* 
Create an array or urls using actor person_id
 - iterate over actor ids in db - retrieve array of ids
For each id in array, perform fetch. If tmdb_id exists already, ignore

Possibly ignore credits with character: Self (archive footage)
*/

function createDB () {

  // genreUrl.map(async genreUrl => {
  //   try {
  //     const res = await fetch(genreUrl, options);
  //     const genreJson = await res.json();
  //     genreData = genreJson.genres;   

  //     for (let i = 0; i < genreData.length; i++) {      
  //       let genre = new GenreModel({
  //           name: genreData[i].name,
  //           tmdb_id: genreData[i].id,
  //       })   
  //       genre.save()
  //       .then(()=> console.log(`Saved Item ${genreData[i].name}`))
  //       .catch(error => console.log(error))
  //     }
  //   } 
  //   catch (error) {
  //     console.log(error);
  //   }
  // })

  filmUrl.map(async filmUrl => {
    try {
      const response = await fetch(filmUrl, options);
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
    /*  let query = { 
        title: filmData[i].title,
        tmdb_id: filmData[i].id,
        genres: filmData[i].genre_ids,
        overview:filmData[i].overview,
        poster_path: filmData[i].poster_path,
        backdrop_path: filmData[i].backdrop_path,
        release_date: filmData[i].release_date,
        }

      let options = {upsert: true, new: true}
      let update = {$inc : {actor_count: 1}*/
      }
    }
    catch (error) {
      console.log(error);
    }
    })
    }

function getURLarray () {
  //let url = [`https://api.themoviedb.org/3/person/19492/movie_credits?api_key=${apiKey}&?language=en-US`];
  // will need different model for actors

  // const finder = ActorsModel.find({
  //   "tmdb_id": {
  //     "$ne": null
  //   }
  // })
  
const finder = mongoose.connection.db.collection('actors').find({
    "name": "Viola Davis"
  })
 console.log(finder)
  //console.log(ActorsModel.find({}).select('tmdb_id'))
}