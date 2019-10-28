var promise = require('bluebird');
const axios = require('axios');


var options = {
    // Ijnitialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/weather';
var initialString = 'https://api.weather.gov/points/30.3322,-81.6557';

var db = pgp(connectionString)
var load = pgp(initialString)

// add query functions

function getAllWeather(req, res, next){
    console.log("testing")
    db.any(`select * from weather`)
    .then(function (data) {
        res.status(200)
            .json({
                status: 'success',
                data: data,
                message: 'Retrieved ALL puppies'
            })
    })
    .catch(function(err){
        return next(err)
    })
}


function postNewWeather(req, res, next){
    req.body.age = parseInt(req.body.temperature);
    db.none('insert into weather(temperature, speed)' + 'values(${temperature},${speed})', req.body)
    .then(function(data){
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Inserted new weather entry'
      })
    })
    .catch(function(err){
      return next(err)
    })
  }

  

module.exports = {
    getAllWeather: getAllWeather,
    postNewWeather: postNewWeather,
};