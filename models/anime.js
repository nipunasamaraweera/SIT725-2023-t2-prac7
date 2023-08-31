let client = require('../dbConnection');

let collection = client.db().collection('anime');

function postAnime(anime, callback) {
    collection.insertOne(anime,callback);
}

function getAllAnime(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postAnime,getAllAnime}