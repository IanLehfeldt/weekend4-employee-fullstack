var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function (req, res){
    pool.connect( function (err, db, done){
        if (err){
            done();
            console.log('err connecting to database', err);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM employees JOIN jobs ON employees.jobs_id = jobs.id;', function (queryErr, result){
                if (queryErr){
                    done();
                    console.log('Error making query', queryErr);
                    res.sendStatus(500);
                } else {
                    done();
                    console.log(result.rows);
                    res.send(result.rows);
                }
            })
        }
    })
})

module.exports = router;