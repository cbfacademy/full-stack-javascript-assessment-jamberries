const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = FilmsModel = mongoose.model("films", filmsSchema, )