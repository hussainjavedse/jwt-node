const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema ({
    name : {
        type : String,
        required : true,
        trim : true
    },
    type : {
        type : String,
        required: true,
        trim : true
    },
    released_on : {
        type : Date,
        required : true,
        trim : true
    }
});

module.exports = mongoose.model('movies', moviesSchema);