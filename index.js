const express = require('express')
const axios = require('axios');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors"); 
const port = 3001;

var indexRouter = require('./routes/index.js');

const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


  // error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.render('error');
 });

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', indexRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));