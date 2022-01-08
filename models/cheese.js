const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheeseSchema = new mongoose.Schema({
    name: String,
    countryOfOrigin: String,
    image: String
}, {timestamps: true});

const Cheese = mongoose.model("Cheese", CheeseSchema);

module.exports = Cheese;