const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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