const moviesModel = require('../models/movies');

module.exports = ({
    getById : function (req, res, next){
        moviesModel.findById(req.params.movieId,
            function(err, movieInfo){
            if(err){
                next(err);
            }else{
                res.json({ status : 200, "message" : "data found", data : {movies : movieInfo}})
            }
            });
    },

    getAll : function (req, res, next){
        let moviesList = [];
        moviesModel.find({}, function(err, movies){
            if(err){
                next(err);
            }else{
                //we will push movies into array
                for(let movie of movies){
                    moviesList.push({id : movie._id, name : movie.name, type : movie.type, released_on : movie.released_on})
                }
                res.json({status : 200, "message" : "list of movies", data : {movie : moviesList}})
            }
        })
    },

    create : function (req, res, next){
        console.log("ok");
        if(req.body.name === '' || req.body.type === '' || req.body.released_on === ''){
            res.json({status : 500, "message" : "all fields are required"})
        }
        moviesModel.create({name : req.body.name, type : req.body.type, released_on : req.body.released_on},
            function(err, result){
            if(err){
                next(err);
            }else{
                res.json({status : 200, "message" : "successfully added", data : null})
            }
            })
    },

    deleteById : function (req, res, next){
        moviesModel.findByIdAndRemove(req.params.movieId,
            function(err, result){
            if(err){
                next(err);
            }else{
                res.json({status : 200, "message" : "successfully deleted", data : null})
            }
            })
    },
    updateById: function(req, res, next) {
        moviesModel.findByIdAndUpdate(req.params.movieId,{name:req.body.name}, function(err, movieInfo){
            if(err)
                next(err);
            else {
                res.json({status:"success", message: "Movie updated successfully!!!", data:null});
            }
        });
    },

})