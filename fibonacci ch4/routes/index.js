// const createError = require('http-errors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // createError(401, 'Dude, nothing here!!!!');
  // console.log("cons:\n",createError(401, 'Dude, nothing here!!!!'));
  res.render('index', { title11: "Welcome to the Fibonacci Calculator" });
});

router.get('/error', function(req, res, next) {
    next({
        status: 404,
        message: "Fake error"
    });
});
  
module.exports = router;
