var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Raju page */
router.get('/raju', function(req, res, next) {
    res.render('raju', { title: 'Raju' });
});

/* Arun page */
router.get('/arun', function(req, res, next) {
    res.render('arun', { title: 'Arun' });
});

/* Rani page */
router.get('/rani', function(req, res, next) {
    res.render('rani', { title: 'Rani' });
});

/* Shiva page */
router.get('/shiva', function(req, res, next) {
    res.render('shiva', { title: 'Shiva' });
});


module.exports = router;
