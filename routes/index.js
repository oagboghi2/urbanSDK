var express = require('express');
var router = express.Router();

var db = require('../queries.js');

router.get('/api/weather', db.getAllWeather);
router.post('/api/weather', db.postNewWeather);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
