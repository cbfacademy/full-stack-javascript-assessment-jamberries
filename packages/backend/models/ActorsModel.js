const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @typedef {object} Actors
 * @property {boolean} adult If they are in the Adult Movie Industry
 * @property {number} gender Actor's Gender
 * @property {string} name Actor's name
 * @property {number} tmdb_id ID in The Movie Database
 * @property {string} original_name Actor's original name
 * @property {Decimal128} popularity Actor popularity
 * @property {string} profile_path Image path for Profile image
 * @property {Array} known_for Films actor is known for
 */
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