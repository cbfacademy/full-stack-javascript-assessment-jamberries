const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @typedef {object} Films
 * @property {string} title Film title
 * @property {number} tmdb_id ID in The Movie Database
 * @property {Array} genres Genres the film is in
 * @property {string} overview Brief summary of film
 * @property {string} profile_path Image path for backdrop
 * @property {string} profile_path Image path for poster
 * @property {date} release_date Date of release
 * @property {number} actor_count Count of number of actor's in the databse are in the film
 */
const filmsSchema = new Schema({
    title: {
        type: String,
        required: true
     },
     tmdb_id: {
        type: Number,
        required: true
     },
     genres: {
        type: Array,
     },
     overview: {
      type: String,
     },
     backdrop_path: {
        type: String,
     },
     poster_path: {
      type: String,
    },
    release_date: {
        type:Date,
    },
    actor_count: {
        type: Number
    }
});

module.exports = FilmsModel = mongoose.model("films", filmsSchema)