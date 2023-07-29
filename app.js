// 모듈 설정
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nunjucks = require('nunjucks');
// ------------------------------------------------

// 라우터 설정
var bottonRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// ------------------------------------------------

// express 실행
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');
nunjucks.configure('views', { 
  express: app,
  watch: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ------------------------------------------------


// 설정한 라우터 사용 
//app.use('/', indexRouter);
app.use('/', bottonRouter)


module.exports = app;
