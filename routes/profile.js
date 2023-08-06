const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next){
    res.json({user: req.user || 'Not logged in'});
});

router.get('/logout', function(req, res, next){
    req.logout(function(err){
        if (err) { return next(err); }
        res.json('User logged out');
    });    
});

module.exports = router;