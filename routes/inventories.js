const express = require('express');
const router = express.Router();
const Inventories = require("../models/inventory");

router.get('/', function (req, res, next){
    Inventories.find({instock: {$lt: 100}})
    .then(function(inventories){
        res.json({data: inventories});
    })
    .catch(function(err){
        res.json({error: err.message});
    })
});

module.exports = router;