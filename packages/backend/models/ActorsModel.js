const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actorsSchema = new Schema({
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
     }
});

module.exports = ActorsModel = mongoose.model("actors", actorsSchema)