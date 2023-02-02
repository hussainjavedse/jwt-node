const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//Next simply allows the next route handler in line to handle the request
module.exports = {
    create: function (req, res, next) {
        console.log(req.body);
        var userFound = userModel.findOne({email: req.body.email});
        userFound.count(function (err, count) {
            if (err) {
                next(err);
            } else {
                if (count >= 1) {
                    res.json({status: "error", message: "user already exists", data: null})
                } else {
                    userModel.create({name: req.body.name, email: req.body.email, password: req.body.password},
                        function (err, result) {
                            if (err) {
                                next(err);
                            } else {
                                res.json({status: "success", message: "user added successfully", data: null})
                            }
                        })
                }
            }
        })
    },
    authenticate: function (req, res, next) {
        userModel.findOne({email: req.body.email},
            function (err, userInfo) {
                if (err) {
                    next(err);
                } else {
                    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                        const token = jwt.sign({id: userInfo.id}, req.app.get("secretKey"), {expiresIn: '1h'});
                        res.json({status: 200, "message": "user found", data: {user: userInfo, token: token}})
                    } else {
                        res.json({status: 404, "message": "invalid email/password !!!!"})
                    }
                }
            });
    }
}