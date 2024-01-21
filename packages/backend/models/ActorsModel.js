const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorsSchema = new Schema({
    adult: {
        type: Boolean
    },
    gender: {
        type: Number
    },
    name: {
        type: String,
        required: true
     },
     tmdb_id: {
        type: Number,
        required: true
     },
     original_name: {
        type: String
     },
     popularity : {
        type: Decimal128
     },
     profile_path : {
        type: String
     },
     known_for: {
        type: Array
     }
});

module.exports = ActorsModel = mongoose.model("actors", actorsSchema)