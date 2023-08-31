let collection = require('../models/anime');

const postAnime = (req,res) => {
    let anime = req.body;
    collection.postAnime(anime, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllAnime = (req,res) => {
    collection.getAllAnime((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}



const deleteAnime = (req,res) => {
    let anime = req.body;
    collection.deleteOne(anime, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postAnime,getAllAnime}