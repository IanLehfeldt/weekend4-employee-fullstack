var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            done();
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM employees', function (queryErr, result) {
                if (queryErr) {
                    done();
                    console.log('Error making query', queryErr);
                    res.sendStatus(500);
                } else {
                    done();
                    res.send(result.rows);
                }
            });
        }
    });
}); // get route

router.post('/', function (req, res) {
    console.log(req.body);
    console.log('employee post route hit');

    pool.connect(function (err, db, done) {
        if (err) {
            done();
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            db.query('INSERT INTO employees (first_name, last_name, job_description, annual_salary) VALUES ($1, $2, $3, $4)',
                [req.body.firstName, req.body.lastName, req.body.jobTitle, req.body.annualSalary],
                function (queryErr, result) {
                    if (queryErr) {
                        done();
                        console.log('Error making query', queryErr);
                        res.sendStatus(500);
                    } else {
                        done();
                        console.log(result);
                        res.sendStatus(200);
                    }
                });
        }
    });
}); // post route

router.put('/:id', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            done();
            console.log('Error connecting to database', err);
            res.sendStatus(500);
        } else {
            db.query('UPDATE employees SET "is_active"= NOT "is_active" WHERE id = $1;',
                [req.params.id],
                function (queryErr, result) {
                    if (queryErr) {
                        done();
                        console.log('Error making query', queryErr);
                        res.sendStatus(500);
                    } else {
                        done();
                        res.sendStatus(200);
                    }
                });
        }
    });
}); // put route

module.exports = router;