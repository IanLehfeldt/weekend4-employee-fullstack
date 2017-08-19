var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function (req, res){
    console.log('employess get route was hit');
    res.sendStatus(200);
})

module.exports = router;