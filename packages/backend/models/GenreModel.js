const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/**
* @typedef {object} Genres
* @property {string} name Genre name
* @property {number} tmdb_id ID in The Movie Database
**/
const genreSchema = new Schema({
    name: {
        type: String,
        required: true
     },
     tmdb_id: {
        type: Number,
        required: true
     }
});

module.exports = GenreModel = mongoose.model("genre", genreSchema)