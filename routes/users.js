const express = require('express');
const router = express.Router();
const Users = require("../models/user");

router.get('/', function (req, res, next){
    Users.find(null)
    .then(function(users){
        res.json({data: users});
    })
    .catch(function(err){
        res.json({error: err.message});
    })
});

module.exports = router;