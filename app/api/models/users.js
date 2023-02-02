const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Define a schema
const schema = mongoose.Schema;

const userSchema = new schema ({
    name : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required: true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true
    }
})

//we will hash the password before saving it into DB
//Mongoose provide middleware(pre/post hooks) which we can use to manipulate our data before/after inserting into database. We have used pre hook save
// method to hash our password before saving into database. In pre hooks
// callback function this keyword refer to UserSchema object and this.password is password passed from registration form which we will be creating soon
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('User', userSchema);