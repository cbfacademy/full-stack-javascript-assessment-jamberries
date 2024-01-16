require('dotenv').config()
const mongoose = require("mongoose");
const FilmsModel = require('./FilmsModel.js')
const ActorsModel = require('./ActorsModel.js')
const db = process.env.MONGO_URI;
const authToken = process.env.TMDB_TOKEN
const apiKey = process.env.TMDB_KEY

const fetch = require("node-fetch");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:'Bearer' + authToken
    }
};

let resultData;
let saveCounter = 0;

mongoose.connect(db)
.then(() => console.log("mongodb connection success"))
.then(() => getURLarray)
//.then(()=> createDB())
.catch(error => console.log(error));


/* 
Create an array or urls using actor person_id
 - iterate over actor ids in db - retrieve array of ids
For each id in array, perform fetch. If tmdb_id exists already, ignore

Possibly ignore credits with character: Self (archive footage)
*/

function createDB () {
  url.map(async url => {
    try{
   const response = await fetch(url, options);
   const json = await response.json();
   resultData = json.cast;

   for (let i = 0; i < resultData.length; i++) {     

    if(resultData[i].character !== "Self (archive footage)") {

      let query = FilmsModel.where({tmdb_id: resultData[i].id})
      let filmExits = await query.findOne()

      if(filmExits == null) {
        let film = new FilmsModel({
          title: resultData[i].title,
           tmdb_id: resultData[i].id,
           genres: resultData[i].genre_ids,
           overview:resultData[i].overview,
           poster_path: resultData[i].poster_path,
           backdrop_path: resultData[i].backdrop_path,
          release_date: resultData[i].release_date,
          actor_count: 1
        })   
  
        film.save()
        .then(()=> console.log(`Saved Item ${resultData[i].title}`))
        .catch(error => console.log(error))
      } else {
        let query = { tmdb_id : resultData[i].id}
        
        FilmsModel.findOneAndUpdate(query, {$inc : {actor_count: 1}}, {new: true})
        .then(()=> console.log(`Updated Item ${resultData[i].title}`))
        .catch(error => console.log(error))
      }

      saveCounter++;
    
      if (saveCounter === resultData.length) {         
        mongoose.disconnect()
         .then(() => console.log("saved succesfully and mongodb disconnected"))
         .catch(error => console.log(error));     

         break;  
          } 
    }
/*  let query = { 
    title: resultData[i].title,
    tmdb_id: resultData[i].id,
    genres: resultData[i].genre_ids,
    overview:resultData[i].overview,
    poster_path: resultData[i].poster_path,
    backdrop_path: resultData[i].backdrop_path,
    release_date: resultData[i].release_date,
    }

  let options = {upsert: true, new: true}
  let update = {$inc : {actor_count: 1}*/
    
   }
}
 catch (error) {
   console.log(error);
}
})
process.exit()
}

function getURLarray () {
  let url = [`https://api.themoviedb.org/3/person/19492/movie_credits?api_key=${apiKey}&?language=en-US`];
  // will need different model for actors
  ActorsModel.find({}).select('name age')
}