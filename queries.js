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

function getSingleWeather(req, res, next){
  console.log("testing")
  db.one(`select * from weather where id = $id`)
  .then(function (data) {
      res.status(200)
          .json({
              status: 'success',
              data: data,
              message: 'Retrieved ONE weather forecast'
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

  function updateWeather(req, res, next) {
    db.none('update weather set temperature=$1, speed=$2 where id=$3',
    [parseInt(req.body.temperature), parseInt(req.body.speed), parseInt(req.body.id)])
      .then(function () {
          res.status(200)
              .json({
                  status: 'success',
                  message: 'Updated puppy'
              })
      })
      .catch(function (err) {
          return next(err);
      })
}

function deleteWeather(req, res, next) {
    var weatherID = parseInt(req.params.id);
    db.result('delete from weather where id = $1', pupID)
    .then(function (result) {
        res.status(200)
          .json({
              status: 'success',
              message: `Removed  ${result.rowCount} weather`
          })
    })
    .catch(function (err) {
        return next(err)
    })
}

  

module.exports = {
    getAllWeather: getAllWeather,
    postNewWeather: postNewWeather,
    getSingleWeather: getSingleWeather,
    updateWeather: updateWeather,
    deleteWeather: deleteWeather
};