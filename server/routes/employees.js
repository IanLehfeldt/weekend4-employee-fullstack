var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function (req, res){
    console.log('employess get route was hit');
    
})

module.exports = router;